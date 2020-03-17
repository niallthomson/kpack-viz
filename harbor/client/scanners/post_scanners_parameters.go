// Code generated by go-swagger; DO NOT EDIT.

package scanners

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

	"github.com/niallthomson/kpack-viz/harbor/models"
)

// NewPostScannersParams creates a new PostScannersParams object
// with the default values initialized.
func NewPostScannersParams() *PostScannersParams {
	var ()
	return &PostScannersParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewPostScannersParamsWithTimeout creates a new PostScannersParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewPostScannersParamsWithTimeout(timeout time.Duration) *PostScannersParams {
	var ()
	return &PostScannersParams{

		timeout: timeout,
	}
}

// NewPostScannersParamsWithContext creates a new PostScannersParams object
// with the default values initialized, and the ability to set a context for a request
func NewPostScannersParamsWithContext(ctx context.Context) *PostScannersParams {
	var ()
	return &PostScannersParams{

		Context: ctx,
	}
}

// NewPostScannersParamsWithHTTPClient creates a new PostScannersParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewPostScannersParamsWithHTTPClient(client *http.Client) *PostScannersParams {
	var ()
	return &PostScannersParams{
		HTTPClient: client,
	}
}

/*PostScannersParams contains all the parameters to send to the API endpoint
for the post scanners operation typically these are written to a http.Request
*/
type PostScannersParams struct {

	/*Registration
	  A scanner registration to be created.

	*/
	Registration *models.ScannerRegistrationReq

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the post scanners params
func (o *PostScannersParams) WithTimeout(timeout time.Duration) *PostScannersParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the post scanners params
func (o *PostScannersParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the post scanners params
func (o *PostScannersParams) WithContext(ctx context.Context) *PostScannersParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the post scanners params
func (o *PostScannersParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the post scanners params
func (o *PostScannersParams) WithHTTPClient(client *http.Client) *PostScannersParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the post scanners params
func (o *PostScannersParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithRegistration adds the registration to the post scanners params
func (o *PostScannersParams) WithRegistration(registration *models.ScannerRegistrationReq) *PostScannersParams {
	o.SetRegistration(registration)
	return o
}

// SetRegistration adds the registration to the post scanners params
func (o *PostScannersParams) SetRegistration(registration *models.ScannerRegistrationReq) {
	o.Registration = registration
}

// WriteToRequest writes these params to a swagger request
func (o *PostScannersParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Registration != nil {
		if err := r.SetBodyParam(o.Registration); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
