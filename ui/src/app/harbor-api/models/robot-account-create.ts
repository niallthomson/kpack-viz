/* tslint:disable */
import { RobotAccountAccess } from './robot-account-access';
export interface RobotAccountCreate {

  /**
   * The permission of robot account
   */
  access?: Array<RobotAccountAccess>;

  /**
   * The name of robot account
   */
  name?: string;

  /**
   * The description of robot account
   */
  description?: string;
}
