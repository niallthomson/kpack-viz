// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// WebhookJob The webhook job.
//
// swagger:model WebhookJob
type WebhookJob struct {

	// The webhook job creation time.
	CreationTime string `json:"creation_time,omitempty"`

	// The webhook job event type.
	EventType string `json:"event_type,omitempty"`

	// The webhook job ID.
	ID int64 `json:"id,omitempty"`

	// The webhook job notify detailed data.
	JobDetail string `json:"job_detail,omitempty"`

	// The webhook job notify type.
	NotifyType string `json:"notify_type,omitempty"`

	// The webhook policy ID.
	PolicyID int64 `json:"policy_id,omitempty"`

	// The webhook job status.
	Status string `json:"status,omitempty"`

	// The webhook job update time.
	UpdateTime string `json:"update_time,omitempty"`
}

// Validate validates this webhook job
func (m *WebhookJob) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *WebhookJob) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *WebhookJob) UnmarshalBinary(b []byte) error {
	var res WebhookJob
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
