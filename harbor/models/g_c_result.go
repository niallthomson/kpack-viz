// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// GCResult g c result
//
// swagger:model GCResult
type GCResult struct {

	// the creation time of gc job.
	CreationTime string `json:"creation_time,omitempty"`

	// if gc job was deleted.
	Deleted bool `json:"deleted,omitempty"`

	// the id of gc job.
	ID int64 `json:"id,omitempty"`

	// the job kind of gc job.
	JobKind string `json:"job_kind,omitempty"`

	// the job name of gc job.
	JobName string `json:"job_name,omitempty"`

	// the status of gc job.
	JobStatus string `json:"job_status,omitempty"`

	// schedule
	Schedule *AdminJobScheduleObj `json:"schedule,omitempty"`

	// the update time of gc job.
	UpdateTime string `json:"update_time,omitempty"`
}

// Validate validates this g c result
func (m *GCResult) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateSchedule(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *GCResult) validateSchedule(formats strfmt.Registry) error {

	if swag.IsZero(m.Schedule) { // not required
		return nil
	}

	if m.Schedule != nil {
		if err := m.Schedule.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("schedule")
			}
			return err
		}
	}

	return nil
}

// MarshalBinary interface implementation
func (m *GCResult) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *GCResult) UnmarshalBinary(b []byte) error {
	var res GCResult
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
