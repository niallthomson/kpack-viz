/* tslint:disable */

/**
 * The health status of component
 */
export interface ComponentHealthStatus {

  /**
   * The health status of component
   */
  status?: string;

  /**
   * The component name
   */
  name?: string;

  /**
   * (optional) The error message when the status is "unhealthy"
   */
  error?: string;
}
