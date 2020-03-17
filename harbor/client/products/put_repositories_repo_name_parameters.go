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

	"github.com/niallthomson/kpack-viz/harbor/models"
)

// NewPutRepositoriesRepoNameParams creates a new PutRepositoriesRepoNameParams object
// with the default values initialized.
func NewPutRepositoriesRepoNameParams() *PutRepositoriesRepoNameParams {
	var ()
	return &PutRepositoriesRepoNameParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewPutRepositoriesRepoNameParamsWithTimeout creates a new PutRepositoriesRepoNameParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewPutRepositoriesRepoNameParamsWithTimeout(timeout time.Duration) *PutRepositoriesRepoNameParams {
	var ()
	return &PutRepositoriesRepoNameParams{

		timeout: timeout,
	}
}

// NewPutRepositoriesRepoNameParamsWithContext creates a new PutRepositoriesRepoNameParams object
// with the default values initialized, and the ability to set a context for a request
func NewPutRepositoriesRepoNameParamsWithContext(ctx context.Context) *PutRepositoriesRepoNameParams {
	var ()
	return &PutRepositoriesRepoNameParams{

		Context: ctx,
	}
}

// NewPutRepositoriesRepoNameParamsWithHTTPClient creates a new PutRepositoriesRepoNameParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewPutRepositoriesRepoNameParamsWithHTTPClient(client *http.Client) *PutRepositoriesRepoNameParams {
	var ()
	return &PutRepositoriesRepoNameParams{
		HTTPClient: client,
	}
}

/*PutRepositoriesRepoNameParams contains all the parameters to send to the API endpoint
for the put repositories repo name operation typically these are written to a http.Request
*/
type PutRepositoriesRepoNameParams struct {

	/*Description
	  The description of the repository.

	*/
	Description *models.RepositoryDescription
	/*RepoName
	  The name of repository which will be deleted.

	*/
	RepoName string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the put repositories repo name params
func (o *PutRepositoriesRepoNameParams) WithTimeout(timeout time.Duration) *PutRepositoriesRepoNameParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the put repositories repo name params
func (o *PutRepositoriesRepoNameParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the put repositories repo name params
func (o *PutRepositoriesRepoNameParams) WithContext(ctx context.Context) *PutRepositoriesRepoNameParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the put repositories repo name params
func (o *PutRepositoriesRepoNameParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the put repositories repo name params
func (o *PutRepositoriesRepoNameParams) WithHTTPClient(client *http.Client) *PutRepositoriesRepoNameParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the put repositories repo name params
func (o *PutRepositoriesRepoNameParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithDescription adds the description to the put repositories repo name params
func (o *PutRepositoriesRepoNameParams) WithDescription(description *models.RepositoryDescription) *PutRepositoriesRepoNameParams {
	o.SetDescription(description)
	return o
}

// SetDescription adds the description to the put repositories repo name params
func (o *PutRepositoriesRepoNameParams) SetDescription(description *models.RepositoryDescription) {
	o.Description = description
}

// WithRepoName adds the repoName to the put repositories repo name params
func (o *PutRepositoriesRepoNameParams) WithRepoName(repoName string) *PutRepositoriesRepoNameParams {
	o.SetRepoName(repoName)
	return o
}

// SetRepoName adds the repoName to the put repositories repo name params
func (o *PutRepositoriesRepoNameParams) SetRepoName(repoName string) {
	o.RepoName = repoName
}

// WriteToRequest writes these params to a swagger request
func (o *PutRepositoriesRepoNameParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Description != nil {
		if err := r.SetBodyParam(o.Description); err != nil {
			return err
		}
	}

	// path param repo_name
	if err := r.SetPathParam("repo_name", o.RepoName); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
