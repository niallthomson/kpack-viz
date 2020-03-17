package pkg

import (
	"encoding/json"
	"github.com/matthewmcnew/build-service-visualization/k8s"
	"github.com/pivotal/kpack/pkg/apis/build/v1alpha1"
	"github.com/pivotal/kpack/pkg/client/clientset/versioned"
	"github.com/pivotal/kpack/pkg/client/informers/externalversions"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/client-go/tools/cache"
	"log"
	"time"
)

// Hub maintains the set of active clients and broadcasts messages to the
// clients.
type Hub struct {
	// Registered clients.
	clients map[*Client]bool

	// Inbound messages from the clients.
	broadcast chan []byte

	// Register requests from the clients.
	register chan *Client

	// Unregister requests from clients.
	unregister chan *Client
}

func NewHub() *Hub {
	return &Hub{
		broadcast:  make(chan []byte),
		register:   make(chan *Client),
		unregister: make(chan *Client),
		clients:    make(map[*Client]bool),
	}
}

func (h *Hub) Run() {
	clusterConfig, err := k8s.BuildConfigFromFlags("", "")
	if err != nil {
		log.Fatalf("Error building kubeconfig: %v", err)
	}

	client, err := versioned.NewForConfig(clusterConfig)
	if err != nil {
		log.Fatalf("could not get Build client: %s", err)
	}

	informerFactory := externalversions.NewSharedInformerFactory(client, 10*time.Hour)
	//imageInformer := informerFactory.Build().V1alpha1().Images().Informer()
	buildInformer := informerFactory.Build().V1alpha1().Builds().Informer()
	buildLister := informerFactory.Build().V1alpha1().Builds().Lister()

	go h.watch(buildInformer)

	for {
		select {
		case client := <-h.register:
			h.clients[client] = true
			log.Printf("client connected")
			builds, _ := buildLister.List(labels.Everything())
			for _, b := range builds {
				str, _ := json.Marshal(b)
				client.send <- str
			}
		case client := <-h.unregister:
			if _, ok := h.clients[client]; ok {
				log.Printf("client disconnected")

				delete(h.clients, client)
				close(client.send)
			}
		case message := <-h.broadcast:
			for client := range h.clients {
				select {
				case client.send <- message:
				default:
					close(client.send)
					delete(h.clients, client)
				}
			}
		}
	}
}

func (h *Hub) watch(buildInformer cache.SharedIndexInformer) {
	stopper := make(chan struct{})
	defer close(stopper)

	buildInformer.AddEventHandler(cache.ResourceEventHandlerFuncs{
		AddFunc: func(obj interface{}) {
			mObj := obj.(*v1alpha1.Build)
			log.Printf("New build Added to Store: %s", mObj.GetName())

			str, _ := json.Marshal(mObj)

			h.broadcast <- str
		},
		UpdateFunc: func(old interface{}, new interface{}) {
			build := new.(*v1alpha1.Build)
			log.Printf("Build updated: %s", build.GetName())

			str, _ := json.Marshal(build)

			h.broadcast <- str
		},
	})

	buildInformer.Run(stopper)
}
