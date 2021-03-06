package pkg

import (
	"github.com/pivotal/kpack/pkg/apis/build/v1alpha1"
	corev1alpha1 "github.com/pivotal/kpack/pkg/apis/core/v1alpha1"
	informer "github.com/pivotal/kpack/pkg/client/informers/externalversions/build/v1alpha1"
	lister "github.com/pivotal/kpack/pkg/client/listers/build/v1alpha1"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/client-go/tools/cache"
	"log"
	"strconv"
	"time"
)

var stageNames = [7]string{"prepare", "detect", "restore", "analyze", "build", "export", "cache"}

type Build struct {
	ID          string       `json:"id"`
	Image       string       `json:"image"`
	BuildNumber int          `json:"buildNumber"`
	LatestImage string       `json:"latestImage"`
	Started     time.Time    `json:"started"`
	Status      string       `json:"status"`
	Stages      []BuildStage `json:"stages"`
	Tags        []string     `json:"tags"`
}

type BuildStage struct {
	Name    string    `json:"name"`
	Started time.Time `json:"started"`
	Status  string    `json:"status"`
}

type BuildWatcher interface {
	OnBuild(*Build)
}

type KpackBuildService struct {
	informer informer.BuildInformer
	lister   lister.BuildLister
	watchers []BuildWatcher
}

// NewKpackBuildService creates a new service
func newKpackBuildService(buildInformer informer.BuildInformer, buildLister lister.BuildLister) *KpackBuildService {
	return &KpackBuildService{
		informer: buildInformer,
		lister:   buildLister,
	}
}

func (h *KpackBuildService) GetInformer() informer.BuildInformer {
	return h.informer
}

func (h *KpackBuildService) GetBuilds() ([]*Build, error) {
	kpackBuilds, err := h.lister.List(labels.Everything())
	if err != nil {
		return nil, err
	}

	builds := make([]*Build, 0, len(kpackBuilds))
	for _, b := range kpackBuilds {
		build, err := h.convertBuild(b)
		if err != nil {
			return nil, err
		}

		builds = append(builds, build)
	}

	return builds, nil
}

func (h *KpackBuildService) convertBuild(b *v1alpha1.Build) (*Build, error) {
	buildNumber, err := strconv.Atoi(b.ObjectMeta.Labels["image.build.pivotal.io/buildNumber"])
	if err != nil {
		return nil, err
	}

	status := "running"

	if b.Status.GetCondition(corev1alpha1.ConditionSucceeded).IsTrue() {
		status = "succeeded"
	} else if b.Status.GetCondition(corev1alpha1.ConditionSucceeded).IsFalse() {
		status = "error"
	}

	stages := make([]BuildStage, 0, len(b.Status.StepStates))

	for i, s := range b.Status.StepStates {
		stageStatus := "waiting"
		var stageStarted time.Time

		if s.Terminated != nil {
			stageStarted = s.Terminated.StartedAt.Time

			if s.Terminated.Reason == "Completed" {
				stageStatus = "complete"
			} else {
				stageStatus = "error"
			}
		} else if s.Running != nil {
			stageStarted = s.Running.StartedAt.Time
			stageStatus = "running"
		}

		stages = append(stages, BuildStage{
			Name:    stageNames[i],
			Status:  stageStatus,
			Started: stageStarted,
		})
	}

	return &Build{
		ID:          b.Name,
		Image:       b.ObjectMeta.Labels["image.build.pivotal.io/image"],
		BuildNumber: buildNumber,
		LatestImage: b.Status.LatestImage,
		Started:     b.ObjectMeta.CreationTimestamp.Time,
		Status:      status,
		Stages:      stages,
		Tags:        b.Spec.Tags,
	}, nil
}

func (h *KpackBuildService) AddWatcher(watcher BuildWatcher) {
	h.watchers = append(h.watchers, watcher)
}

func (h *KpackBuildService) Start() {
	go h.doStart()
}

func (h *KpackBuildService) doStart() {
	stopper := make(chan struct{})
	defer close(stopper)

	informer := h.informer.Informer()

	informer.AddEventHandler(cache.ResourceEventHandlerFuncs{
		AddFunc: func(obj interface{}) {
			rawBuild := obj.(*v1alpha1.Build)
			log.Printf("New build Added to Store: %s", rawBuild.GetName())

			build, err := h.convertBuild(rawBuild)
			if err != nil {
				log.Printf("Failed to process build %s", rawBuild.GetName())
				return
			}

			for _, w := range h.watchers {
				w.OnBuild(build)
			}
		},
		UpdateFunc: func(old interface{}, new interface{}) {
			rawBuild := new.(*v1alpha1.Build)
			log.Printf("Build updated: %s", rawBuild.GetName())

			build, err := h.convertBuild(rawBuild)
			if err != nil {
				log.Printf("Failed to process build %s", rawBuild.GetName())
				return
			}

			for _, w := range h.watchers {
				w.OnBuild(build)
			}
		},
	})

	informer.Run(stopper)
}
