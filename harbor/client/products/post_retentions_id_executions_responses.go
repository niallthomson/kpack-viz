// Code generated by go-swagger; DO NOT EDIT.

package products

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// PostRetentionsIDExecutionsReader is a Reader for the PostRetentionsIDExecutions structure.
type PostRetentionsIDExecutionsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *PostRetentionsIDExecutionsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewPostRetentionsIDExecutionsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 401:
		result := NewPostRetentionsIDExecutionsUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 403:
		result := NewPostRetentionsIDExecutionsForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewPostRetentionsIDExecutionsInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewPostRetentionsIDExecutionsOK creates a PostRetentionsIDExecutionsOK with default headers values
func NewPostRetentionsIDExecutionsOK() *PostRetentionsIDExecutionsOK {
	return &PostRetentionsIDExecutionsOK{}
}

/*PostRetentionsIDExecutionsOK handles this case with default header values.

Trigger a Retention job successfully.
*/
type PostRetentionsIDExecutionsOK struct {
}

func (o *PostRetentionsIDExecutionsOK) Error() string {
	return fmt.Sprintf("[POST /retentions/{id}/executions][%d] postRetentionsIdExecutionsOK ", 200)
}

func (o *PostRetentionsIDExecutionsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPostRetentionsIDExecutionsUnauthorized creates a PostRetentionsIDExecutionsUnauthorized with default headers values
func NewPostRetentionsIDExecutionsUnauthorized() *PostRetentionsIDExecutionsUnauthorized {
	return &PostRetentionsIDExecutionsUnauthorized{}
}

/*PostRetentionsIDExecutionsUnauthorized handles this case with default header values.

User need to log in first.
*/
type PostRetentionsIDExecutionsUnauthorized struct {
}

func (o *PostRetentionsIDExecutionsUnauthorized) Error() string {
	return fmt.Sprintf("[POST /retentions/{id}/executions][%d] postRetentionsIdExecutionsUnauthorized ", 401)
}

func (o *PostRetentionsIDExecutionsUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPostRetentionsIDExecutionsForbidden creates a PostRetentionsIDExecutionsForbidden with default headers values
func NewPostRetentionsIDExecutionsForbidden() *PostRetentionsIDExecutionsForbidden {
	return &PostRetentionsIDExecutionsForbidden{}
}

/*PostRetentionsIDExecutionsForbidden handles this case with default header values.

User have no permission.
*/
type PostRetentionsIDExecutionsForbidden struct {
}

func (o *PostRetentionsIDExecutionsForbidden) Error() string {
	return fmt.Sprintf("[POST /retentions/{id}/executions][%d] postRetentionsIdExecutionsForbidden ", 403)
}

func (o *PostRetentionsIDExecutionsForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewPostRetentionsIDExecutionsInternalServerError creates a PostRetentionsIDExecutionsInternalServerError with default headers values
func NewPostRetentionsIDExecutionsInternalServerError() *PostRetentionsIDExecutionsInternalServerError {
	return &PostRetentionsIDExecutionsInternalServerError{}
}

/*PostRetentionsIDExecutionsInternalServerError handles this case with default header values.

Unexpected internal errors.
*/
type PostRetentionsIDExecutionsInternalServerError struct {
}

func (o *PostRetentionsIDExecutionsInternalServerError) Error() string {
	return fmt.Sprintf("[POST /retentions/{id}/executions][%d] postRetentionsIdExecutionsInternalServerError ", 500)
}

func (o *PostRetentionsIDExecutionsInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

/*PostRetentionsIDExecutionsBody post retentions ID executions body
swagger:model PostRetentionsIDExecutionsBody
*/
type PostRetentionsIDExecutionsBody struct {

	// dry run
	DryRun bool `json:"dry_run,omitempty"`
}

// Validate validates this post retentions ID executions body
func (o *PostRetentionsIDExecutionsBody) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *PostRetentionsIDExecutionsBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *PostRetentionsIDExecutionsBody) UnmarshalBinary(b []byte) error {
	var res PostRetentionsIDExecutionsBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
