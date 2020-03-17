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
)

// NewGetRetentionsIDExecutionsEidTasksParams creates a new GetRetentionsIDExecutionsEidTasksParams object
// with the default values initialized.
func NewGetRetentionsIDExecutionsEidTasksParams() *GetRetentionsIDExecutionsEidTasksParams {
	var ()
	return &GetRetentionsIDExecutionsEidTasksParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewGetRetentionsIDExecutionsEidTasksParamsWithTimeout creates a new GetRetentionsIDExecutionsEidTasksParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewGetRetentionsIDExecutionsEidTasksParamsWithTimeout(timeout time.Duration) *GetRetentionsIDExecutionsEidTasksParams {
	var ()
	return &GetRetentionsIDExecutionsEidTasksParams{

		timeout: timeout,
	}
}

// NewGetRetentionsIDExecutionsEidTasksParamsWithContext creates a new GetRetentionsIDExecutionsEidTasksParams object
// with the default values initialized, and the ability to set a context for a request
func NewGetRetentionsIDExecutionsEidTasksParamsWithContext(ctx context.Context) *GetRetentionsIDExecutionsEidTasksParams {
	var ()
	return &GetRetentionsIDExecutionsEidTasksParams{

		Context: ctx,
	}
}

// NewGetRetentionsIDExecutionsEidTasksParamsWithHTTPClient creates a new GetRetentionsIDExecutionsEidTasksParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewGetRetentionsIDExecutionsEidTasksParamsWithHTTPClient(client *http.Client) *GetRetentionsIDExecutionsEidTasksParams {
	var ()
	return &GetRetentionsIDExecutionsEidTasksParams{
		HTTPClient: client,
	}
}

/*GetRetentionsIDExecutionsEidTasksParams contains all the parameters to send to the API endpoint
for the get retentions ID executions eid tasks operation typically these are written to a http.Request
*/
type GetRetentionsIDExecutionsEidTasksParams struct {

	/*Eid
	  Retention execution ID.

	*/
	Eid int64
	/*ID
	  Retention ID.

	*/
	ID int64

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the get retentions ID executions eid tasks params
func (o *GetRetentionsIDExecutionsEidTasksParams) WithTimeout(timeout time.Duration) *GetRetentionsIDExecutionsEidTasksParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get retentions ID executions eid tasks params
func (o *GetRetentionsIDExecutionsEidTasksParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get retentions ID executions eid tasks params
func (o *GetRetentionsIDExecutionsEidTasksParams) WithContext(ctx context.Context) *GetRetentionsIDExecutionsEidTasksParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get retentions ID executions eid tasks params
func (o *GetRetentionsIDExecutionsEidTasksParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get retentions ID executions eid tasks params
func (o *GetRetentionsIDExecutionsEidTasksParams) WithHTTPClient(client *http.Client) *GetRetentionsIDExecutionsEidTasksParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get retentions ID executions eid tasks params
func (o *GetRetentionsIDExecutionsEidTasksParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithEid adds the eid to the get retentions ID executions eid tasks params
func (o *GetRetentionsIDExecutionsEidTasksParams) WithEid(eid int64) *GetRetentionsIDExecutionsEidTasksParams {
	o.SetEid(eid)
	return o
}

// SetEid adds the eid to the get retentions ID executions eid tasks params
func (o *GetRetentionsIDExecutionsEidTasksParams) SetEid(eid int64) {
	o.Eid = eid
}

// WithID adds the id to the get retentions ID executions eid tasks params
func (o *GetRetentionsIDExecutionsEidTasksParams) WithID(id int64) *GetRetentionsIDExecutionsEidTasksParams {
	o.SetID(id)
	return o
}

// SetID adds the id to the get retentions ID executions eid tasks params
func (o *GetRetentionsIDExecutionsEidTasksParams) SetID(id int64) {
	o.ID = id
}

// WriteToRequest writes these params to a swagger request
func (o *GetRetentionsIDExecutionsEidTasksParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param eid
	if err := r.SetPathParam("eid", swag.FormatInt64(o.Eid)); err != nil {
		return err
	}

	// path param id
	if err := r.SetPathParam("id", swag.FormatInt64(o.ID)); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
