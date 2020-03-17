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

// GetRepositoriesTopReader is a Reader for the GetRepositoriesTop structure.
type GetRepositoriesTopReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetRepositoriesTopReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetRepositoriesTopOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 400:
		result := NewGetRepositoriesTopBadRequest()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewGetRepositoriesTopInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewGetRepositoriesTopOK creates a GetRepositoriesTopOK with default headers values
func NewGetRepositoriesTopOK() *GetRepositoriesTopOK {
	return &GetRepositoriesTopOK{}
}

/*GetRepositoriesTopOK handles this case with default header values.

Get popular repositories successfully.
*/
type GetRepositoriesTopOK struct {
	Payload []*models.Repository
}

func (o *GetRepositoriesTopOK) Error() string {
	return fmt.Sprintf("[GET /repositories/top][%d] getRepositoriesTopOK  %+v", 200, o.Payload)
}

func (o *GetRepositoriesTopOK) GetPayload() []*models.Repository {
	return o.Payload
}

func (o *GetRepositoriesTopOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetRepositoriesTopBadRequest creates a GetRepositoriesTopBadRequest with default headers values
func NewGetRepositoriesTopBadRequest() *GetRepositoriesTopBadRequest {
	return &GetRepositoriesTopBadRequest{}
}

/*GetRepositoriesTopBadRequest handles this case with default header values.

Bad request because of invalid count.
*/
type GetRepositoriesTopBadRequest struct {
}

func (o *GetRepositoriesTopBadRequest) Error() string {
	return fmt.Sprintf("[GET /repositories/top][%d] getRepositoriesTopBadRequest ", 400)
}

func (o *GetRepositoriesTopBadRequest) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewGetRepositoriesTopInternalServerError creates a GetRepositoriesTopInternalServerError with default headers values
func NewGetRepositoriesTopInternalServerError() *GetRepositoriesTopInternalServerError {
	return &GetRepositoriesTopInternalServerError{}
}

/*GetRepositoriesTopInternalServerError handles this case with default header values.

Unexpected internal errors.
*/
type GetRepositoriesTopInternalServerError struct {
}

func (o *GetRepositoriesTopInternalServerError) Error() string {
	return fmt.Sprintf("[GET /repositories/top][%d] getRepositoriesTopInternalServerError ", 500)
}

func (o *GetRepositoriesTopInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}
