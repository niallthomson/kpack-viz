// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// PutRegistry put registry
//
// swagger:model PutRegistry
type PutRegistry struct {

	// The registry access key.
	AccessKey string `json:"access_key,omitempty"`

	// The registry access secret.
	AccessSecret string `json:"access_secret,omitempty"`

	// Credential type of the registry, e.g. 'basic'.
	CredentialType string `json:"credential_type,omitempty"`

	// Description of the registry.
	Description string `json:"description,omitempty"`

	// Whether or not the certificate will be verified when Harbor tries to access the server.
	Insecure bool `json:"insecure,omitempty"`

	// The registry name.
	Name string `json:"name,omitempty"`

	// The registry address URL string.
	URL string `json:"url,omitempty"`
}

// Validate validates this put registry
func (m *PutRegistry) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *PutRegistry) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *PutRegistry) UnmarshalBinary(b []byte) error {
	var res PutRegistry
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
