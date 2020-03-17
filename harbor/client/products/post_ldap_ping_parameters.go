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

// NewPostLdapPingParams creates a new PostLdapPingParams object
// with the default values initialized.
func NewPostLdapPingParams() *PostLdapPingParams {
	var ()
	return &PostLdapPingParams{

		timeout: cr.DefaultTimeout,
	}
}

// NewPostLdapPingParamsWithTimeout creates a new PostLdapPingParams object
// with the default values initialized, and the ability to set a timeout on a request
func NewPostLdapPingParamsWithTimeout(timeout time.Duration) *PostLdapPingParams {
	var ()
	return &PostLdapPingParams{

		timeout: timeout,
	}
}

// NewPostLdapPingParamsWithContext creates a new PostLdapPingParams object
// with the default values initialized, and the ability to set a context for a request
func NewPostLdapPingParamsWithContext(ctx context.Context) *PostLdapPingParams {
	var ()
	return &PostLdapPingParams{

		Context: ctx,
	}
}

// NewPostLdapPingParamsWithHTTPClient creates a new PostLdapPingParams object
// with the default values initialized, and the ability to set a custom HTTPClient for a request
func NewPostLdapPingParamsWithHTTPClient(client *http.Client) *PostLdapPingParams {
	var ()
	return &PostLdapPingParams{
		HTTPClient: client,
	}
}

/*PostLdapPingParams contains all the parameters to send to the API endpoint
for the post ldap ping operation typically these are written to a http.Request
*/
type PostLdapPingParams struct {

	/*Ldapconf
	  ldap configuration. support input ldap service configuration. If it's a empty request, will load current configuration from the system.

	*/
	Ldapconf *models.LdapConf

	timeout    time.Duration
	Context    context.Context
	HTTPClient *http.Client
}

// WithTimeout adds the timeout to the post ldap ping params
func (o *PostLdapPingParams) WithTimeout(timeout time.Duration) *PostLdapPingParams {
	o.SetTimeout(timeout)
	return o
}

// SetTimeout adds the timeout to the post ldap ping params
func (o *PostLdapPingParams) SetTimeout(timeout time.Duration) {
	o.timeout = timeout
}

// WithContext adds the context to the post ldap ping params
func (o *PostLdapPingParams) WithContext(ctx context.Context) *PostLdapPingParams {
	o.SetContext(ctx)
	return o
}

// SetContext adds the context to the post ldap ping params
func (o *PostLdapPingParams) SetContext(ctx context.Context) {
	o.Context = ctx
}

// WithHTTPClient adds the HTTPClient to the post ldap ping params
func (o *PostLdapPingParams) WithHTTPClient(client *http.Client) *PostLdapPingParams {
	o.SetHTTPClient(client)
	return o
}

// SetHTTPClient adds the HTTPClient to the post ldap ping params
func (o *PostLdapPingParams) SetHTTPClient(client *http.Client) {
	o.HTTPClient = client
}

// WithLdapconf adds the ldapconf to the post ldap ping params
func (o *PostLdapPingParams) WithLdapconf(ldapconf *models.LdapConf) *PostLdapPingParams {
	o.SetLdapconf(ldapconf)
	return o
}

// SetLdapconf adds the ldapconf to the post ldap ping params
func (o *PostLdapPingParams) SetLdapconf(ldapconf *models.LdapConf) {
	o.Ldapconf = ldapconf
}

// WriteToRequest writes these params to a swagger request
func (o *PostLdapPingParams) WriteToRequest(r runtime.ClientRequest, reg strfmt.Registry) error {

	if err := r.SetTimeout(o.timeout); err != nil {
		return err
	}
	var res []error

	if o.Ldapconf != nil {
		if err := r.SetBodyParam(o.Ldapconf); err != nil {
			return err
		}
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}
