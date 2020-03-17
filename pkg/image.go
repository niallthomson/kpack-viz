package pkg

import (
	"github.com/pivotal/kpack/pkg/apis/build/v1alpha1"
	informer "github.com/pivotal/kpack/pkg/client/informers/externalversions/build/v1alpha1"
	lister "github.com/pivotal/kpack/pkg/client/listers/build/v1alpha1"
	"k8s.io/apimachinery/pkg/labels"
)

type Image struct {
	Name        string     `json:"name"`
	LatestImage string     `json:"latestImage"`
	Tag         string     `json:"tag"`
	GitSource   *GitSource `json:"gitSource"`
}

type GitSource struct {
	URL      string `json:"url"`
	Revision string `json:"revision"`
}

type KpackImageService struct {
	informer informer.ImageInformer
	lister   lister.ImageLister
}

// NewKpackImageService creates a new service
func newKpackImageService(imageInformer informer.ImageInformer, imageLister lister.ImageLister) *KpackImageService {
	return &KpackImageService{
		informer: imageInformer,
		lister:   imageLister,
	}
}

func (h *KpackImageService) GetImages() ([]*Image, error) {
	kpackImages, err := h.lister.List(labels.Everything())
	if err != nil {
		return nil, err
	}

	images := make([]*Image, 0, len(kpackImages))
	for _, i := range kpackImages {
		image, err := h.convertImage(i)
		if err != nil {
			return nil, err
		}

		images = append(images, image)
	}

	return images, nil
}

func (h *KpackImageService) convertImage(i *v1alpha1.Image) (*Image, error) {
	var gitSource *GitSource

	if i.Spec.Source.Git != nil {
		gitSource = &GitSource{
			URL:      i.Spec.Source.Git.URL,
			Revision: i.Spec.Source.Git.Revision,
		}
	}

	return &Image{
		Name:        i.Name,
		LatestImage: i.Status.LatestImage,
		Tag:         i.Spec.Tag,
		GitSource:   gitSource,
	}, nil
}
