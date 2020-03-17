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
)

// NewGetRepositoriesRepoNameSignaturesParams creates a new GetRepositoriesRepoNameSignaturesParams object
// with the default values initialized.
func NewGetRepositoriesRepoNameSignaturesParams() *GetRepositoriesRepoNameSignaturesParams {
	var ()
	return &GetRepositoriesRepoNameSignaturesParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewGetRepositoriesRepoNameSignaturesParamsWithTimeout creates a new GetRepositoriesRepoNameSignaturesParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewGetRepositoriesRepoNameSignaturesParamsWithTimeout(timeout time.Duration) *GetRepositoriesRepoNameSignaturesParams {
	var ()
	return &GetRepositoriesRepoNameSignaturesParams{

		timeout: timeout,
	}
}

// NewGetRepositoriesRepoNameSignaturesParamsWithContext creates a new GetRepositoriesRepoNameSignaturesParams object
// with the default values initialized, and the ability to set a context for a request
func NewGetRepositoriesRepoNameSignaturesParamsWithContext(ctx context.Context) *GetRepositoriesRepoNameSignaturesParams {
	var ()
	return &GetRepositoriesRepoNameSignaturesParams{

		Context: ctx,
	}
}

// NewGetRepositoriesRepoNameSignaturesParamsWithHTTPClient creates a new GetRepositoriesRepoNameSignaturesParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewGetRepositoriesRepoNameSignaturesParamsWithHTTPClient(client *http.Client) *GetRepositoriesRepoNameSignaturesParams {
	var ()
	return &GetRepositoriesRepoNameSignaturesParams{
		HTTPClient: client,
	}
}

/*GetRepositoriesRepoNameSignaturesParams contains all the parameters to send to the API endpoint
for the get repositories repo name signatures operation typically these are written to a http.Request
*/
type GetRepositoriesRepoNameSignaturesParams struct {

	/*RepoName
	  repository name.

	*/
	RepoName string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the get repositories repo name signatures params
func (o *GetRepositoriesRepoNameSignaturesParams) WithTimeout(timeout time.Duration) *GetRepositoriesRepoNameSignaturesParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get repositories repo name signatures params
func (o *GetRepositoriesRepoNameSignaturesParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get repositories repo name signatures params
func (o *GetRepositoriesRepoNameSignaturesParams) WithContext(ctx context.Context) *GetRepositoriesRepoNameSignaturesParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get repositories repo name signatures params
func (o *GetRepositoriesRepoNameSignaturesParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get repositories repo name signatures params
func (o *GetRepositoriesRepoNameSignaturesParams) WithHTTPClient(client *http.Client) *GetRepositoriesRepoNameSignaturesParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get repositories repo name signatures params
func (o *GetRepositoriesRepoNameSignaturesParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithRepoName adds the repoName to the get repositories repo name signatures params
func (o *GetRepositoriesRepoNameSignaturesParams) WithRepoName(repoName string) *GetRepositoriesRepoNameSignaturesParams {
	o.SetRepoName(repoName)
	return o
}

// SetRepoName adds the repoName to the get repositories repo name signatures params
func (o *GetRepositoriesRepoNameSignaturesParams) SetRepoName(repoName string) {
	o.RepoName = repoName
}

// WriteToRequest writes these params to a swagger request
func (o *GetRepositoriesRepoNameSignaturesParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	// path param repo_name
	if err := r.SetPathParam("repo_name", o.RepoName); err != nil {
		return err
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
