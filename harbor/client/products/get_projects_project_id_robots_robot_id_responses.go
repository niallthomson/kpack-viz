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

// GetProjectsProjectIDRobotsRobotIDReader is a Reader for the GetProjectsProjectIDRobotsRobotID structure.
type GetProjectsProjectIDRobotsRobotIDReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *GetProjectsProjectIDRobotsRobotIDReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewGetProjectsProjectIDRobotsRobotIDOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 401:
		result := NewGetProjectsProjectIDRobotsRobotIDUnauthorized()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 403:
		result := NewGetProjectsProjectIDRobotsRobotIDForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewGetProjectsProjectIDRobotsRobotIDNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 500:
		result := NewGetProjectsProjectIDRobotsRobotIDInternalServerError()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewGetProjectsProjectIDRobotsRobotIDOK creates a GetProjectsProjectIDRobotsRobotIDOK with default headers values
func NewGetProjectsProjectIDRobotsRobotIDOK() *GetProjectsProjectIDRobotsRobotIDOK {
	return &GetProjectsProjectIDRobotsRobotIDOK{}
}

/*GetProjectsProjectIDRobotsRobotIDOK handles this case with default header values.

Robot account information.
*/
type GetProjectsProjectIDRobotsRobotIDOK struct {
	Payload *models.RobotAccount
}

func (o *GetProjectsProjectIDRobotsRobotIDOK) Error() string {
	return fmt.Sprintf("[GET /projects/{project_id}/robots/{robot_id}][%d] getProjectsProjectIdRobotsRobotIdOK  %+v", 200, o.Payload)
}

func (o *GetProjectsProjectIDRobotsRobotIDOK) GetPayload() *models.RobotAccount {
	return o.Payload
}

func (o *GetProjectsProjectIDRobotsRobotIDOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(models.RobotAccount)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewGetProjectsProjectIDRobotsRobotIDUnauthorized creates a GetProjectsProjectIDRobotsRobotIDUnauthorized with default headers values
func NewGetProjectsProjectIDRobotsRobotIDUnauthorized() *GetProjectsProjectIDRobotsRobotIDUnauthorized {
	return &GetProjectsProjectIDRobotsRobotIDUnauthorized{}
}

/*GetProjectsProjectIDRobotsRobotIDUnauthorized handles this case with default header values.

User need to log in first.
*/
type GetProjectsProjectIDRobotsRobotIDUnauthorized struct {
}

func (o *GetProjectsProjectIDRobotsRobotIDUnauthorized) Error() string {
	return fmt.Sprintf("[GET /projects/{project_id}/robots/{robot_id}][%d] getProjectsProjectIdRobotsRobotIdUnauthorized ", 401)
}

func (o *GetProjectsProjectIDRobotsRobotIDUnauthorized) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewGetProjectsProjectIDRobotsRobotIDForbidden creates a GetProjectsProjectIDRobotsRobotIDForbidden with default headers values
func NewGetProjectsProjectIDRobotsRobotIDForbidden() *GetProjectsProjectIDRobotsRobotIDForbidden {
	return &GetProjectsProjectIDRobotsRobotIDForbidden{}
}

/*GetProjectsProjectIDRobotsRobotIDForbidden handles this case with default header values.

User in session does not have permission to the project.
*/
type GetProjectsProjectIDRobotsRobotIDForbidden struct {
}

func (o *GetProjectsProjectIDRobotsRobotIDForbidden) Error() string {
	return fmt.Sprintf("[GET /projects/{project_id}/robots/{robot_id}][%d] getProjectsProjectIdRobotsRobotIdForbidden ", 403)
}

func (o *GetProjectsProjectIDRobotsRobotIDForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewGetProjectsProjectIDRobotsRobotIDNotFound creates a GetProjectsProjectIDRobotsRobotIDNotFound with default headers values
func NewGetProjectsProjectIDRobotsRobotIDNotFound() *GetProjectsProjectIDRobotsRobotIDNotFound {
	return &GetProjectsProjectIDRobotsRobotIDNotFound{}
}

/*GetProjectsProjectIDRobotsRobotIDNotFound handles this case with default header values.

The robot account is not found.
*/
type GetProjectsProjectIDRobotsRobotIDNotFound struct {
}

func (o *GetProjectsProjectIDRobotsRobotIDNotFound) Error() string {
	return fmt.Sprintf("[GET /projects/{project_id}/robots/{robot_id}][%d] getProjectsProjectIdRobotsRobotIdNotFound ", 404)
}

func (o *GetProjectsProjectIDRobotsRobotIDNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewGetProjectsProjectIDRobotsRobotIDInternalServerError creates a GetProjectsProjectIDRobotsRobotIDInternalServerError with default headers values
func NewGetProjectsProjectIDRobotsRobotIDInternalServerError() *GetProjectsProjectIDRobotsRobotIDInternalServerError {
	return &GetProjectsProjectIDRobotsRobotIDInternalServerError{}
}

/*GetProjectsProjectIDRobotsRobotIDInternalServerError handles this case with default header values.

Unexpected internal errors.
*/
type GetProjectsProjectIDRobotsRobotIDInternalServerError struct {
}

func (o *GetProjectsProjectIDRobotsRobotIDInternalServerError) Error() string {
	return fmt.Sprintf("[GET /projects/{project_id}/robots/{robot_id}][%d] getProjectsProjectIdRobotsRobotIdInternalServerError ", 500)
}

func (o *GetProjectsProjectIDRobotsRobotIDInternalServerError) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}
