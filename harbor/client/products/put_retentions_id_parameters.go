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

// NewPutRetentionsIDParams creates a new PutRetentionsIDParams object
// with the default values initialized.
func NewPutRetentionsIDParams() *PutRetentionsIDParams {
	var ()
	return &PutRetentionsIDParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewPutRetentionsIDParamsWithTimeout creates a new PutRetentionsIDParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewPutRetentionsIDParamsWithTimeout(timeout time.Duration) *PutRetentionsIDParams {
	var ()
	return &PutRetentionsIDParams{

		timeout: timeout,
	}
}

// NewPutRetentionsIDParamsWithContext creates a new PutRetentionsIDParams object
// with the default values initialized, and the ability to set a context for a request
func NewPutRetentionsIDParamsWithContext(ctx context.Context) *PutRetentionsIDParams {
	var ()
	return &PutRetentionsIDParams{

		Context: ctx,
	}
}

// NewPutRetentionsIDParamsWithHTTPClient creates a new PutRetentionsIDParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewPutRetentionsIDParamsWithHTTPClient(client *http.Client) *PutRetentionsIDParams {
	var ()
	return &PutRetentionsIDParams{
		HTTPClient: client,
	}
}

/*PutRetentionsIDParams contains all the parameters to send to the API endpoint
for the put retentions ID operation typically these are written to a http.Request
*/
type PutRetentionsIDParams struct {

	/*ID
	  Retention ID.

	*/
	ID int64
	/*Policy*/
	Policy *models.RetentionPolicy

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the put retentions ID params
func (o *PutRetentionsIDParams) WithTimeout(timeout time.Duration) *PutRetentionsIDParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the put retentions ID params
func (o *PutRetentionsIDParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the put retentions ID params
func (o *PutRetentionsIDParams) WithContext(ctx context.Context) *PutRetentionsIDParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the put retentions ID params
func (o *PutRetentionsIDParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the put retentions ID params
func (o *PutRetentionsIDParams) WithHTTPClient(client *http.Client) *PutRetentionsIDParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the put retentions ID params
func (o *PutRetentionsIDParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithID adds the id to the put retentions ID params
func (o *PutRetentionsIDParams) WithID(id int64) *PutRetentionsIDParams {
	o.SetID(id)
	return o
}

// SetID adds the id to the put retentions ID params
func (o *PutRetentionsIDParams) SetID(id int64) {
	o.ID = id
}

// WithPolicy adds the policy to the put retentions ID params
func (o *PutRetentionsIDParams) WithPolicy(policy *models.RetentionPolicy) *PutRetentionsIDParams {
	o.SetPolicy(policy)
	return o
}

// SetPolicy adds the policy to the put retentions ID params
func (o *PutRetentionsIDParams) SetPolicy(policy *models.RetentionPolicy) {
	o.Policy = policy
}

// WriteToRequest writes these params to a swagger request
func (o *PutRetentionsIDParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param id
	if err := r.SetPathParam("id", swag.FormatInt64(o.ID)); err != nil {
		return err
	}

	if o.Policy != nil {
		if err := r.SetBodyParam(o.Policy); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
