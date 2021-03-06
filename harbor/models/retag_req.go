// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// RetagReq retag req
//
// swagger:model RetagReq
type RetagReq struct {

	// If target tag already exists, whether to override it
	Override bool `json:"override,omitempty"`

	// Source image to be retagged, e.g. 'stage/app:v1.0'
	SrcImage string `json:"src_image,omitempty"`

	// new tag to be created
	Tag string `json:"tag,omitempty"`
}

// Validate validates this retag req
func (m *RetagReq) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *RetagReq) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *RetagReq) UnmarshalBinary(b []byte) error {
	var res RetagReq
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
