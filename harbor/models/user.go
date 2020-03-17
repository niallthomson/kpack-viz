// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// User user
//
// swagger:model User
type User struct {

	// salt
	Salt string `json:"Salt,omitempty"`

	// comment
	Comment string `json:"comment,omitempty"`

	// creation time
	CreationTime string `json:"creation_time,omitempty"`

	// deleted
	Deleted bool `json:"deleted,omitempty"`

	// email
	Email string `json:"email,omitempty"`

	// has admin role
	HasAdminRole bool `json:"has_admin_role,omitempty"`

	// password
	Password string `json:"password,omitempty"`

	// realname
	Realname string `json:"realname,omitempty"`

	// reset uuid
	ResetUUID string `json:"reset_uuid,omitempty"`

	// role id
	RoleID int64 `json:"role_id,omitempty"`

	// role name
	RoleName string `json:"role_name,omitempty"`

	// update time
	UpdateTime string `json:"update_time,omitempty"`

	// The ID of the user.
	UserID int64 `json:"user_id,omitempty"`

	// username
	Username string `json:"username,omitempty"`
}

// Validate validates this user
func (m *User) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *User) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *User) UnmarshalBinary(b []byte) error {
	var res User
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
