// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// VulnNamespaceTimestamp vuln namespace timestamp
//
// swagger:model VulnNamespaceTimestamp
type VulnNamespaceTimestamp struct {

	// The UTC timestamp in miliseconds of last successful update for vulnerability data.
	LastUpdate int64 `json:"last_update,omitempty"`

	// The namespace of the Vulnerability
	Namespace string `json:"namespace,omitempty"`
}

// Validate validates this vuln namespace timestamp
func (m *VulnNamespaceTimestamp) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *VulnNamespaceTimestamp) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *VulnNamespaceTimestamp) UnmarshalBinary(b []byte) error {
	var res VulnNamespaceTimestamp
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
