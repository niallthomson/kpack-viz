package main

import (
	"encoding/json"
	"errors"
	"flag"
	"github.com/buildpacks/lifecycle"
	"github.com/golang/glog"
	"github.com/niallthomson/kpack-viz/pkg"
	_ "github.com/niallthomson/kpack-viz/statik"
	"github.com/pivotal/kpack/pkg/apis/build/v1alpha1"
	"github.com/rakyll/statik/fs"
	"io"
	"k8s.io/client-go/tools/cache"
	"net/http"
	"net/url"
	"os"
	"strings"
)

var addr = flag.String("addr", ":8080", "http service address")

func main() {
	flag.Parse()

	kpackService, err := pkg.NewKpackService()
	if err != nil {
		glog.Fatal(err)
	}

	buildService := kpackService.GetBuildService()
	imageService := kpackService.GetImageService()

	harborService := pkg.NewHarborService()

	hub := pkg.NewHub()
	go hub.Run()

	//go watchBuilds(buildService, hub)
	buildWatcher := pkg.NewHubBuildWatcher(hub)
	buildService.AddWatcher(buildWatcher)

	kpackService.Start()

	statikFS, err := fs.New()
	if err != nil {
		glog.Fatal(err)
	}
	http.HandleFunc("/api/watch/builds", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		pkg.ServeWs(hub, w, r)
	})
	http.HandleFunc("/api/logs", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		imageParam, ok := r.URL.Query()["image"]
		if !ok || len(imageParam[0]) < 1 {
			glog.Info("param 'image' is missing")
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		buildParam, ok := r.URL.Query()["build"]
		if !ok || len(buildParam[0]) < 1 {
			glog.Info("param 'build' is missing")
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		logs, err := pkg.FetchLogs(imageParam[0], buildParam[0])
		if err != nil {
			glog.Info("Error fetching logs: %s", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		w.Write([]byte(logs))
	})
	http.HandleFunc("/api/builds", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		builds, err := buildService.GetBuilds()
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		json.NewEncoder(w).Encode(builds)
	})
	http.HandleFunc("/api/images", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)
		images, err := imageService.GetImages()
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		json.NewEncoder(w).Encode(images)
	})
	http.HandleFunc("/api/rawImage", func(w http.ResponseWriter, r *http.Request) {
		enableCors(&w)

		tagParam, ok := r.URL.Query()["tag"]
		if !ok || len(tagParam[0]) < 1 {
			glog.Info("param 'tag' is missing")
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		decodedValue, err := url.QueryUnescape(tagParam[0])
		if err != nil {
			glog.Info("Error", err)
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		fullImage, tag, err := splitImageTag(decodedValue)
		if err != nil {
			glog.Info("Error", err)
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		repo, image, err := splitImage(fullImage)
		if err != nil {
			glog.Info("Error", err)
			w.WriteHeader(http.StatusBadRequest)
			return
		}

		harborImage, err := harborService.GetImage(repo, image, tag)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		rawImage, err := pkg.NewRawImage(harborImage.Size, harborImage.Pushed, harborImage.Manifest.Labels[lifecycle.StackIDLabel], harborImage.Manifest.Labels[lifecycle.BuildMetadataLabel])

		json.NewEncoder(w).Encode(rawImage)
	})
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		_, err := statikFS.Open(r.URL.Path)
		if os.IsNotExist(err) {
			index, err := statikFS.Open("/index.html")
			if err != nil {
				w.WriteHeader(http.StatusNotFound)
				return
			}
			io.Copy(w, index)
		} else {
			http.FileServer(statikFS).ServeHTTP(w, r)
		}
	})

	err = http.ListenAndServe(*addr, nil)
	if err != nil {
		glog.Error("ListenAndServe: ", err)
	}
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func splitImageTag(input string) (string, string, error) {
	s := strings.Split(input, ":")
	if len(s) < 2 {
		return "", "", errors.New("malformed tag")
	}
	return s[0], s[1], nil
}

func splitImage(input string) (string, string, error) {
	s := strings.Split(input, "/")
	if len(s) < 3 {
		return "", "", errors.New("malformed image")
	}
	return s[0], s[1] + "/" + s[2], nil
}

func watchBuilds(buildService *pkg.KpackBuildService, h *pkg.Hub) {
	stopper := make(chan struct{})
	defer close(stopper)

	buildInformer := buildService.GetInformer()

	informer := buildInformer.Informer()

	informer.AddEventHandler(cache.ResourceEventHandlerFuncs{
		AddFunc: func(obj interface{}) {
			mObj := obj.(*v1alpha1.Build)
			glog.Info("New build Added to Store: %s", mObj.GetName())

			str, _ := json.Marshal(mObj)

			h.Broadcast(str)
		},
		UpdateFunc: func(old interface{}, new interface{}) {
			build := new.(*v1alpha1.Build)
			glog.Info("Build updated: %s", build.GetName())

			str, _ := json.Marshal(build)

			h.Broadcast(str)
		},
	})

	informer.Run(stopper)
}
