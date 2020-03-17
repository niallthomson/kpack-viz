package pkg

import (
	"context"
	"encoding/json"
	"github.com/go-openapi/runtime"
	httptransport "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
	apiclient "github.com/niallthomson/kpack-viz/harbor/client"
	"github.com/niallthomson/kpack-viz/harbor/client/products"
	"github.com/niallthomson/kpack-viz/harbor/models"
	"time"
)

type RegistryImage struct {
	Size     int64
	Pushed   time.Time
	Manifest *ManifestConfig
}

type HarborManifest struct {
	Architecture string         `json:"architecture"`
	Created      time.Time      `json:"created"`
	Config       ManifestConfig `json:"config"`
}

type ManifestConfig struct {
	Image  string            `json:"Image"`
	Labels map[string]string `json:"Labels"`
}

type harborInstance struct {
	client *apiclient.Harbor
	auth   *runtime.ClientAuthInfoWriter
}

type HarborService struct {
	clients map[string]*apiclient.Harbor
}

func NewHarborService() *HarborService {
	return &HarborService{
		make(map[string]*apiclient.Harbor),
	}
}

/*func (h *HarborService) AddHarborCreds(endpoint string, username string, password string) {
	transport := httptransport.New(endpoint, "/api", nil)

	client := apiclient.New(transport, strfmt.Default)
	auth := httptransport.BasicAuth(username, password)

	instance := &harborInstance{
		client: client,
		auth:   &auth,
	}

	h.clients[endpoint] = instance
}*/

func (h *HarborService) getClient(endpoint string) *apiclient.Harbor {
	if val, ok := h.clients[endpoint]; ok {
		return val
	}

	transport := httptransport.New(endpoint, "/api", nil)

	client := apiclient.New(transport, strfmt.Default)

	h.clients[endpoint] = client

	return client
}

func (h *HarborService) GetImage(endpoint string, repo string, tagName string) (*RegistryImage, error) {
	client := h.getClient(endpoint)

	tag, err := h.fetchTag(repo, tagName, client)
	if err != nil {
		return nil, err
	}

	manifestPayload, err := h.fetchManifest(repo, tagName, client)
	if err != nil {
		return nil, err
	}

	var manifest HarborManifest

	err = json.Unmarshal([]byte(manifestPayload.Config), &manifest)
	if err != nil {
		return nil, err
	}

	return &RegistryImage{
		Size:     tag.Size,
		Manifest: &manifest.Config,
		Pushed:   manifest.Created,
	}, nil
}

func (h *HarborService) fetchTag(repo string, tagName string, client *apiclient.Harbor) (*models.DetailedTag, error) {
	var params = products.NewGetRepositoriesRepoNameTagsTagParamsWithContext(context.Background())
	params.RepoName = repo
	params.Tag = tagName

	resp, err := client.Products.GetRepositoriesRepoNameTagsTag(params, nil)
	if err != nil {
		return nil, err
	}

	return resp.GetPayload(), nil
}

func (h *HarborService) fetchManifest(repo string, tagName string, client *apiclient.Harbor) (*models.Manifest, error) {
	var params = products.NewGetRepositoriesRepoNameTagsTagManifestParamsWithContext(context.Background())
	params.RepoName = repo
	params.Tag = tagName

	resp, err := client.Products.GetRepositoriesRepoNameTagsTagManifest(params, nil)
	if err != nil {
		return nil, err
	}

	return resp.GetPayload(), nil
}
