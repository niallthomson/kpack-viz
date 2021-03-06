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

// NewGetRepositoriesParams creates a new GetRepositoriesParams object
// with the default values initialized.
func NewGetRepositoriesParams() *GetRepositoriesParams {
	var ()
	return &GetRepositoriesParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewGetRepositoriesParamsWithTimeout creates a new GetRepositoriesParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewGetRepositoriesParamsWithTimeout(timeout time.Duration) *GetRepositoriesParams {
	var ()
	return &GetRepositoriesParams{

		timeout: timeout,
	}
}

// NewGetRepositoriesParamsWithContext creates a new GetRepositoriesParams object
// with the default values initialized, and the ability to set a context for a request
func NewGetRepositoriesParamsWithContext(ctx context.Context) *GetRepositoriesParams {
	var ()
	return &GetRepositoriesParams{

		Context: ctx,
	}
}

// NewGetRepositoriesParamsWithHTTPClient creates a new GetRepositoriesParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewGetRepositoriesParamsWithHTTPClient(client *http.Client) *GetRepositoriesParams {
	var ()
	return &GetRepositoriesParams{
		HTTPClient: client,
	}
}

/*GetRepositoriesParams contains all the parameters to send to the API endpoint
for the get repositories operation typically these are written to a http.Request
*/
type GetRepositoriesParams struct {

	/*LabelID
	  The ID of label used to filter the result.

	*/
	LabelID *int64
	/*Page
	  The page number, default is 1.

	*/
	Page *int32
	/*PageSize
	  The size of per page, default is 10, maximum is 100.

	*/
	PageSize *int32
	/*ProjectID
	  Relevant project ID.

	*/
	ProjectID int32
	/*Q
	  Repo name for filtering results.

	*/
	Q *string
	/*Sort
	  Sort method, valid values include: 'name', '-name', 'creation_time', '-creation_time', 'update_time', '-update_time'. Here '-' stands for descending order.


	*/
	Sort *string

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the get repositories params
func (o *GetRepositoriesParams) WithTimeout(timeout time.Duration) *GetRepositoriesParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the get repositories params
func (o *GetRepositoriesParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the get repositories params
func (o *GetRepositoriesParams) WithContext(ctx context.Context) *GetRepositoriesParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the get repositories params
func (o *GetRepositoriesParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the get repositories params
func (o *GetRepositoriesParams) WithHTTPClient(client *http.Client) *GetRepositoriesParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the get repositories params
func (o *GetRepositoriesParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithLabelID adds the labelID to the get repositories params
func (o *GetRepositoriesParams) WithLabelID(labelID *int64) *GetRepositoriesParams {
	o.SetLabelID(labelID)
	return o
}

// SetLabelID adds the labelId to the get repositories params
func (o *GetRepositoriesParams) SetLabelID(labelID *int64) {
	o.LabelID = labelID
}

// WithPage adds the page to the get repositories params
func (o *GetRepositoriesParams) WithPage(page *int32) *GetRepositoriesParams {
	o.SetPage(page)
	return o
}

// SetPage adds the page to the get repositories params
func (o *GetRepositoriesParams) SetPage(page *int32) {
	o.Page = page
}

// WithPageSize adds the pageSize to the get repositories params
func (o *GetRepositoriesParams) WithPageSize(pageSize *int32) *GetRepositoriesParams {
	o.SetPageSize(pageSize)
	return o
}

// SetPageSize adds the pageSize to the get repositories params
func (o *GetRepositoriesParams) SetPageSize(pageSize *int32) {
	o.PageSize = pageSize
}

// WithProjectID adds the projectID to the get repositories params
func (o *GetRepositoriesParams) WithProjectID(projectID int32) *GetRepositoriesParams {
	o.SetProjectID(projectID)
	return o
}

// SetProjectID adds the projectId to the get repositories params
func (o *GetRepositoriesParams) SetProjectID(projectID int32) {
	o.ProjectID = projectID
}

// WithQ adds the q to the get repositories params
func (o *GetRepositoriesParams) WithQ(q *string) *GetRepositoriesParams {
	o.SetQ(q)
	return o
}

// SetQ adds the q to the get repositories params
func (o *GetRepositoriesParams) SetQ(q *string) {
	o.Q = q
}

// WithSort adds the sort to the get repositories params
func (o *GetRepositoriesParams) WithSort(sort *string) *GetRepositoriesParams {
	o.SetSort(sort)
	return o
}

// SetSort adds the sort to the get repositories params
func (o *GetRepositoriesParams) SetSort(sort *string) {
	o.Sort = sort
}

// WriteToRequest writes these params to a swagger request
func (o *GetRepositoriesParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.LabelID != nil {

		// query param label_id
		var qrLabelID int64
		if o.LabelID != nil {
			qrLabelID = *o.LabelID
		}
		qLabelID := swag.FormatInt64(qrLabelID)
		if qLabelID != "" {
			if err := r.SetQueryParam("label_id", qLabelID); err != nil {
				return err
			}
		}

	}

	if o.Page != nil {

		// query param page
		var qrPage int32
		if o.Page != nil {
			qrPage = *o.Page
		}
		qPage := swag.FormatInt32(qrPage)
		if qPage != "" {
			if err := r.SetQueryParam("page", qPage); err != nil {
				return err
			}
		}

	}

	if o.PageSize != nil {

		// query param page_size
		var qrPageSize int32
		if o.PageSize != nil {
			qrPageSize = *o.PageSize
		}
		qPageSize := swag.FormatInt32(qrPageSize)
		if qPageSize != "" {
			if err := r.SetQueryParam("page_size", qPageSize); err != nil {
				return err
			}
		}

	}

	// query param project_id
	qrProjectID := o.ProjectID
	qProjectID := swag.FormatInt32(qrProjectID)
	if qProjectID != "" {
		if err := r.SetQueryParam("project_id", qProjectID); err != nil {
			return err
		}
	}

	if o.Q != nil {

		// query param q
		var qrQ string
		if o.Q != nil {
			qrQ = *o.Q
		}
		qQ := qrQ
		if qQ != "" {
			if err := r.SetQueryParam("q", qQ); err != nil {
				return err
			}
		}

	}

	if o.Sort != nil {

		// query param sort
		var qrSort string
		if o.Sort != nil {
			qrSort = *o.Sort
		}
		qSort := qrSort
		if qSort != "" {
			if err := r.SetQueryParam("sort", qSort); err != nil {
				return err
			}
		}

	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
