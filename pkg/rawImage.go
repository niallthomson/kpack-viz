package pkg

import (
	"encoding/json"
	"github.com/buildpacks/lifecycle"
	"time"
)

type RawImage struct {
	Size      int64     `json:"size"`
	Stack     string    `json:"stack"`
	Pushed    time.Time `json:"pushed"`
	ImageInfo ImageInfo `json:"imageInfo"`
}

type ImageInfo struct {
	StackID    string                     `json:"stackId"`
	Buildpacks []lifecycle.Buildpack      `json:"buildpacks"`
	Base       lifecycle.RunImageMetadata `json:"base"`
	BOM        []lifecycle.BOMEntry       `json:"bom"`
	Stack      lifecycle.StackMetadata    `json:"stack"`
}

func NewRawImage(size int64, pushed time.Time, stack string, buildMetaData string) (*RawImage, error) {
	var imageInfo ImageInfo

	err := json.Unmarshal([]byte(buildMetaData), &imageInfo)
	if err != nil {
		return nil, err
	}

	return &RawImage{
		Size:      size,
		Stack:     stack,
		Pushed:    pushed,
		ImageInfo: imageInfo,
	}, nil
}
