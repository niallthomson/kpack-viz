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

// NewGetRepositoriesRepoNameTagsParams creates a new GetRepositoriesRepoNameTagsParams object
// with the default values initialized.
func NewGetRepositoriesRepoNameTagsParams() *GetRepositoriesRepoNameTagsParams {
	var ()
	return &GetRepositoriesRepoNameTagsParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewGetRepositoriesRepoNameTagsParamsWithTimeout creates a new GetRepositoriesRepoNameTagsParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewGetRepositoriesRepoNameTagsParamsWithTimeout(timeout time.Duration) *GetRepositoriesRepoNameTagsParams {
	var ()
	return &GetRepositoriesRepoNameTagsParams{

		timeout: timeout,
	}
}

// NewGetRepositoriesRepoNameTagsParamsWithContext creates a new GetRepositoriesRepoNameTagsParams object
// with the default values initialized, and the ability to set a context for a request
func NewGetRepositoriesRepoNameTagsParamsWithContext(ctx context.Context) *GetRepositoriesRepoNameTagsParams {
	var ()
	return &GetRepositoriesRepoNameTagsParams{

		Context: ctx,
	}
}

// NewGetRepositoriesRepoNameTagsParamsWithHTTPClient creates a new GetRepositoriesRepoNameTagsParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewGetRepositoriesRepoNameTagsParamsWithHTTPClient(client *http.Client) *GetRepositoriesRepoNameTagsParams {
	var ()
	return &GetRepositoriesRepoNameTagsParams{
		HTTPClient: client,
	}
}

/*GetRepositoriesRepoNameTagsParams contains all the parameters to send to the API endpoint
for the get repositories repo name tags operation typically these are written to a http.Request
*/
type GetRepositoriesRepoNameTagsParams struct {

	/*Detail
	  Bool value indicating whether return detailed information of the tag, such as vulnerability scan info, if set to false, only tag name is returned.

	*/
	Detail *bool
	/*LabelID
	  A label ID.

	*/
	LabelID *string
	/*RepoName
	  Relevant repository name.

	*/
	RepoName string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) WithTimeout(timeout time.Duration) *GetRepositoriesRepoNameTagsParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) WithContext(ctx context.Context) *GetRepositoriesRepoNameTagsParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) WithHTTPClient(client *http.Client) *GetRepositoriesRepoNameTagsParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithDetail adds the detail to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) WithDetail(detail *bool) *GetRepositoriesRepoNameTagsParams {
	o.SetDetail(detail)
	return o
}

// SetDetail adds the detail to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) SetDetail(detail *bool) {
	o.Detail = detail
}

// WithLabelID adds the labelID to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) WithLabelID(labelID *string) *GetRepositoriesRepoNameTagsParams {
	o.SetLabelID(labelID)
	return o
}

// SetLabelID adds the labelId to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) SetLabelID(labelID *string) {
	o.LabelID = labelID
}

// WithRepoName adds the repoName to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) WithRepoName(repoName string) *GetRepositoriesRepoNameTagsParams {
	o.SetRepoName(repoName)
	return o
}

// SetRepoName adds the repoName to the get repositories repo name tags params
func (o *GetRepositoriesRepoNameTagsParams) SetRepoName(repoName string) {
	o.RepoName = repoName
}

// WriteToRequest writes these params to a swagger request
func (o *GetRepositoriesRepoNameTagsParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Detail != nil {

		// query param detail
		var qrDetail bool
		if o.Detail != nil {
			qrDetail = *o.Detail
		}
		qDetail := swag.FormatBool(qrDetail)
		if qDetail != "" {
			if err := r.SetQueryParam("detail", qDetail); err != nil {
				return err
			}
		}

	}

	if o.LabelID != nil {

		// query param label_id
		var qrLabelID string
		if o.LabelID != nil {
			qrLabelID = *o.LabelID
		}
		qLabelID := qrLabelID
		if qLabelID != "" {
			if err := r.SetQueryParam("label_id", qLabelID); err != nil {
				return err
			}
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
