package pkg

import (
	"github.com/pivotal/kpack/pkg/client/clientset/versioned"
	"github.com/pivotal/kpack/pkg/client/informers/externalversions"
	"k8s.io/client-go/tools/clientcmd"
	"log"
	"time"
)

type KpackService struct {
	buildService *KpackBuildService
	imageService *KpackImageService
}

func NewKpackService() (*KpackService, error) {
	//clusterConfig, err := k8s.BuildConfigFromFlags("", "")
	clusterConfig, err := clientcmd.NewNonInteractiveDeferredLoadingClientConfig(
		clientcmd.NewDefaultClientConfigLoadingRules(),
		&clientcmd.ConfigOverrides{}).ClientConfig()

	if err != nil {
		return nil, err
	}

	client, err := versioned.NewForConfig(clusterConfig)
	if err != nil {
		return nil, err
	}

	informerFactory := externalversions.NewSharedInformerFactory(client, 10*time.Hour)

	buildInformer := informerFactory.Build().V1alpha1().Builds()
	buildLister := buildInformer.Lister()

	imageInformer := informerFactory.Build().V1alpha1().Images()
	imageLister := imageInformer.Lister()

	stopChan := make(chan struct{})
	informerFactory.Start(stopChan)

	log.Println("Informer factory started")

	return &KpackService{
		buildService: newKpackBuildService(buildInformer, buildLister),
		imageService: newKpackImageService(imageInformer, imageLister),
	}, nil
}

func (h *KpackService) GetBuildService() *KpackBuildService {
	return h.buildService
}

func (h *KpackService) GetImageService() *KpackImageService {
	return h.imageService
}

func (h *KpackService) Start() {
	h.buildService.Start()
}
