// Code generated by go-swagger; DO NOT EDIT.

package products

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// PostEmailPingReader is a Reader for the PostEmailPing structure.
type PostEmailPingReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PostEmailPingReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPostEmailPingOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewPostEmailPingBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 401:
		result := NewPostEmailPingUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 403:
		result := NewPostEmailPingForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 415:
		result := NewPostEmailPingUnsupportedMediaType()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewPostEmailPingInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewPostEmailPingOK creates a PostEmailPingOK with default headers values
func NewPostEmailPingOK() *PostEmailPingOK {
	return &PostEmailPingOK{}
}

/*PostEmailPingOK handles this case with default header values.

Ping email server successfully.
*/
type PostEmailPingOK struct {
}

func (o *PostEmailPingOK) Error() string {
	return fmt.Sprintf("[POST /email/ping][%d] postEmailPingOK ", 200)
}

func (o *PostEmailPingOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPostEmailPingBadRequest creates a PostEmailPingBadRequest with default headers values
func NewPostEmailPingBadRequest() *PostEmailPingBadRequest {
	return &PostEmailPingBadRequest{}
}

/*PostEmailPingBadRequest handles this case with default header values.

Inviald email server settings.
*/
type PostEmailPingBadRequest struct {
}

func (o *PostEmailPingBadRequest) Error() string {
	return fmt.Sprintf("[POST /email/ping][%d] postEmailPingBadRequest ", 400)
}

func (o *PostEmailPingBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPostEmailPingUnauthorized creates a PostEmailPingUnauthorized with default headers values
func NewPostEmailPingUnauthorized() *PostEmailPingUnauthorized {
	return &PostEmailPingUnauthorized{}
}

/*PostEmailPingUnauthorized handles this case with default header values.

User need to login first.
*/
type PostEmailPingUnauthorized struct {
}

func (o *PostEmailPingUnauthorized) Error() string {
	return fmt.Sprintf("[POST /email/ping][%d] postEmailPingUnauthorized ", 401)
}

func (o *PostEmailPingUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPostEmailPingForbidden creates a PostEmailPingForbidden with default headers values
func NewPostEmailPingForbidden() *PostEmailPingForbidden {
	return &PostEmailPingForbidden{}
}

/*PostEmailPingForbidden handles this case with default header values.

Only admin has this authority.
*/
type PostEmailPingForbidden struct {
}

func (o *PostEmailPingForbidden) Error() string {
	return fmt.Sprintf("[POST /email/ping][%d] postEmailPingForbidden ", 403)
}

func (o *PostEmailPingForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPostEmailPingUnsupportedMediaType creates a PostEmailPingUnsupportedMediaType with default headers values
func NewPostEmailPingUnsupportedMediaType() *PostEmailPingUnsupportedMediaType {
	return &PostEmailPingUnsupportedMediaType{}
}

/*PostEmailPingUnsupportedMediaType handles this case with default header values.

The Media Type of the request is not supported, it has to be "application/json"
*/
type PostEmailPingUnsupportedMediaType struct {
}

func (o *PostEmailPingUnsupportedMediaType) Error() string {
	return fmt.Sprintf("[POST /email/ping][%d] postEmailPingUnsupportedMediaType ", 415)
}

func (o *PostEmailPingUnsupportedMediaType) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPostEmailPingInternalServerError creates a PostEmailPingInternalServerError with default headers values
func NewPostEmailPingInternalServerError() *PostEmailPingInternalServerError {
	return &PostEmailPingInternalServerError{}
}

/*PostEmailPingInternalServerError handles this case with default header values.

Unexpected internal errors.
*/
type PostEmailPingInternalServerError struct {
}

func (o *PostEmailPingInternalServerError) Error() string {
	return fmt.Sprintf("[POST /email/ping][%d] postEmailPingInternalServerError ", 500)
}

func (o *PostEmailPingInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}
