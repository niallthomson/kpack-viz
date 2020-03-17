// Code generated by go-swagger; DO NOT EDIT.

package products

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
)

// PutRetentionsIDReader is a Reader for the PutRetentionsID structure.
type PutRetentionsIDReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PutRetentionsIDReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPutRetentionsIDOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 401:
		result := NewPutRetentionsIDUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 403:
		result := NewPutRetentionsIDForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewPutRetentionsIDInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewPutRetentionsIDOK creates a PutRetentionsIDOK with default headers values
func NewPutRetentionsIDOK() *PutRetentionsIDOK {
	return &PutRetentionsIDOK{}
}

/*PutRetentionsIDOK handles this case with default header values.

Update Retention Policy successfully.
*/
type PutRetentionsIDOK struct {
}

func (o *PutRetentionsIDOK) Error() string {
	return fmt.Sprintf("[PUT /retentions/{id}][%d] putRetentionsIdOK ", 200)
}

func (o *PutRetentionsIDOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPutRetentionsIDUnauthorized creates a PutRetentionsIDUnauthorized with default headers values
func NewPutRetentionsIDUnauthorized() *PutRetentionsIDUnauthorized {
	return &PutRetentionsIDUnauthorized{}
}

/*PutRetentionsIDUnauthorized handles this case with default header values.

User need to log in first.
*/
type PutRetentionsIDUnauthorized struct {
}

func (o *PutRetentionsIDUnauthorized) Error() string {
	return fmt.Sprintf("[PUT /retentions/{id}][%d] putRetentionsIdUnauthorized ", 401)
}

func (o *PutRetentionsIDUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPutRetentionsIDForbidden creates a PutRetentionsIDForbidden with default headers values
func NewPutRetentionsIDForbidden() *PutRetentionsIDForbidden {
	return &PutRetentionsIDForbidden{}
}

/*PutRetentionsIDForbidden handles this case with default header values.

User have no permission.
*/
type PutRetentionsIDForbidden struct {
}

func (o *PutRetentionsIDForbidden) Error() string {
	return fmt.Sprintf("[PUT /retentions/{id}][%d] putRetentionsIdForbidden ", 403)
}

func (o *PutRetentionsIDForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPutRetentionsIDInternalServerError creates a PutRetentionsIDInternalServerError with default headers values
func NewPutRetentionsIDInternalServerError() *PutRetentionsIDInternalServerError {
	return &PutRetentionsIDInternalServerError{}
}

/*PutRetentionsIDInternalServerError handles this case with default header values.

Unexpected internal errors.
*/
type PutRetentionsIDInternalServerError struct {
}

func (o *PutRetentionsIDInternalServerError) Error() string {
	return fmt.Sprintf("[PUT /retentions/{id}][%d] putRetentionsIdInternalServerError ", 500)
}

func (o *PutRetentionsIDInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}
