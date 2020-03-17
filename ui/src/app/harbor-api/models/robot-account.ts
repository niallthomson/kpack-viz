/* tslint:disable */

/**
 * The object of robot account
 */
export interface RobotAccount {

  /**
   * The update time of the robot account
   */
  update_time?: string;

  /**
   * The description of robot account
   */
  description?: string;

  /**
   * The creation time of the robot account
   */
  creation_time?: string;

  /**
   * The expiration of robot account (in seconds)
   */
  expires_at?: number;

  /**
   * The robot account is disable or enable
   */
  disabled?: boolean;

  /**
   * The project id of robot account
   */
  project_id?: number;

  /**
   * The id of robot account
   */
  id?: number;

  /**
   * The name of robot account
   */
  name?: string;
}
