// Code generated by go-swagger; DO NOT EDIT.

package products

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/niallthomson/kpack-viz/harbor/models"
)

// GetRegistriesIDReader is a Reader for the GetRegistriesID structure.
type GetRegistriesIDReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetRegistriesIDReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetRegistriesIDOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 401:
		result := NewGetRegistriesIDUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetRegistriesIDNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewGetRegistriesIDInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewGetRegistriesIDOK creates a GetRegistriesIDOK with default headers values
func NewGetRegistriesIDOK() *GetRegistriesIDOK {
	return &GetRegistriesIDOK{}
}

/*GetRegistriesIDOK handles this case with default header values.

Get registry successfully.
*/
type GetRegistriesIDOK struct {
	Payload *models.Registry
}

func (o *GetRegistriesIDOK) Error() string {
	return fmt.Sprintf("[GET /registries/{id}][%d] getRegistriesIdOK  %+v", 200, o.Payload)
}

func (o *GetRegistriesIDOK) GetPayload() *models.Registry {
	return o.Payload
}

func (o *GetRegistriesIDOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.Registry)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRegistriesIDUnauthorized creates a GetRegistriesIDUnauthorized with default headers values
func NewGetRegistriesIDUnauthorized() *GetRegistriesIDUnauthorized {
	return &GetRegistriesIDUnauthorized{}
}

/*GetRegistriesIDUnauthorized handles this case with default header values.

User need to log in first.
*/
type GetRegistriesIDUnauthorized struct {
}

func (o *GetRegistriesIDUnauthorized) Error() string {
	return fmt.Sprintf("[GET /registries/{id}][%d] getRegistriesIdUnauthorized ", 401)
}

func (o *GetRegistriesIDUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewGetRegistriesIDNotFound creates a GetRegistriesIDNotFound with default headers values
func NewGetRegistriesIDNotFound() *GetRegistriesIDNotFound {
	return &GetRegistriesIDNotFound{}
}

/*GetRegistriesIDNotFound handles this case with default header values.

Registry not found
*/
type GetRegistriesIDNotFound struct {
}

func (o *GetRegistriesIDNotFound) Error() string {
	return fmt.Sprintf("[GET /registries/{id}][%d] getRegistriesIdNotFound ", 404)
}

func (o *GetRegistriesIDNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewGetRegistriesIDInternalServerError creates a GetRegistriesIDInternalServerError with default headers values
func NewGetRegistriesIDInternalServerError() *GetRegistriesIDInternalServerError {
	return &GetRegistriesIDInternalServerError{}
}

/*GetRegistriesIDInternalServerError handles this case with default header values.

Unexpected internal errors.
*/
type GetRegistriesIDInternalServerError struct {
}

func (o *GetRegistriesIDInternalServerError) Error() string {
	return fmt.Sprintf("[GET /registries/{id}][%d] getRegistriesIdInternalServerError ", 500)
}

func (o *GetRegistriesIDInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}
