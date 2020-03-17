// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// Repository repository
//
// swagger:model Repository
type Repository struct {

	// The creation time of repository.
	CreationTime string `json:"creation_time,omitempty"`

	// The description of repository.
	Description string `json:"description,omitempty"`

	// The ID of repository.
	ID int64 `json:"id,omitempty"`

	// The label list.
	Labels []*Label `json:"labels"`

	// The name of repository.
	Name string `json:"name,omitempty"`

	// The project ID of repository.
	ProjectID int64 `json:"project_id,omitempty"`

	// The pull count of repository.
	PullCount int64 `json:"pull_count,omitempty"`

	// The star count of repository.
	StarCount int64 `json:"star_count,omitempty"`

	// The tags count of repository.
	TagsCount int64 `json:"tags_count,omitempty"`

	// The update time of repository.
	UpdateTime string `json:"update_time,omitempty"`
}

// Validate validates this repository
func (m *Repository) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateLabels(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *Repository) validateLabels(formats strfmt.Registry) error {

	if swag.IsZero(m.Labels) { // not required
		return nil
	}

	for i := 0; i < len(m.Labels); i++ {
		if swag.IsZero(m.Labels[i]) { // not required
			continue
		}

		if m.Labels[i] != nil {
			if err := m.Labels[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("labels" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *Repository) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *Repository) UnmarshalBinary(b []byte) error {
	var res Repository
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
