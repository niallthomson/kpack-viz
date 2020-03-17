// Code generated by go-swagger; DO NOT EDIT.

package products

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"net/http"
	"time"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/runtime"
	cr "github.com/go-openapi/runtime/client"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"

	"github.com/niallthomson/kpack-viz/harbor/models"
)

// NewPutUsersUserIDParams creates a new PutUsersUserIDParams object
// with the default values initialized.
func NewPutUsersUserIDParams() *PutUsersUserIDParams {
	var ()
	return &PutUsersUserIDParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewPutUsersUserIDParamsWithTimeout creates a new PutUsersUserIDParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewPutUsersUserIDParamsWithTimeout(timeout time.Duration) *PutUsersUserIDParams {
	var ()
	return &PutUsersUserIDParams{

		timeout: timeout,
	}
}

// NewPutUsersUserIDParamsWithContext creates a new PutUsersUserIDParams object
// with the default values initialized, and the ability to set a context for a request
func NewPutUsersUserIDParamsWithContext(ctx context.Context) *PutUsersUserIDParams {
	var ()
	return &PutUsersUserIDParams{

		Context: ctx,
	}
}

// NewPutUsersUserIDParamsWithHTTPClient creates a new PutUsersUserIDParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewPutUsersUserIDParamsWithHTTPClient(client *http.Client) *PutUsersUserIDParams {
	var ()
	return &PutUsersUserIDParams{
		HTTPClient: client,
	}
}

/*PutUsersUserIDParams contains all the parameters to send to the API endpoint
for the put users user ID operation typically these are written to a http.Request
*/
type PutUsersUserIDParams struct {

	/*Profile
	  Only email, realname and comment can be modified.

	*/
	Profile *models.UserProfile
	/*UserID
	  Registered user ID

	*/
	UserID int64

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the put users user ID params
func (o *PutUsersUserIDParams) WithTimeout(timeout time.Duration) *PutUsersUserIDParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the put users user ID params
func (o *PutUsersUserIDParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the put users user ID params
func (o *PutUsersUserIDParams) WithContext(ctx context.Context) *PutUsersUserIDParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the put users user ID params
func (o *PutUsersUserIDParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the put users user ID params
func (o *PutUsersUserIDParams) WithHTTPClient(client *http.Client) *PutUsersUserIDParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the put users user ID params
func (o *PutUsersUserIDParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithProfile adds the profile to the put users user ID params
func (o *PutUsersUserIDParams) WithProfile(profile *models.UserProfile) *PutUsersUserIDParams {
	o.SetProfile(profile)
	return o
}

// SetProfile adds the profile to the put users user ID params
func (o *PutUsersUserIDParams) SetProfile(profile *models.UserProfile) {
	o.Profile = profile
}

// WithUserID adds the userID to the put users user ID params
func (o *PutUsersUserIDParams) WithUserID(userID int64) *PutUsersUserIDParams {
	o.SetUserID(userID)
	return o
}

// SetUserID adds the userId to the put users user ID params
func (o *PutUsersUserIDParams) SetUserID(userID int64) {
	o.UserID = userID
}

// WriteToRequest writes these params to a swagger request
func (o *PutUsersUserIDParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Profile != nil {
		if err := r.SetBodyParam(o.Profile); err != nil {
			return err
		}
	}

	// path param user_id
	if err := r.SetPathParam("user_id", swag.FormatInt64(o.UserID)); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
