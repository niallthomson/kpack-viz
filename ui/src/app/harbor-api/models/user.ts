/* tslint:disable */
export interface User {
  username?: string;
  comment?: string;
  update_time?: string;
  password?: string;

  /**
   * The ID of the user.
   */
  user_id?: number;
  realname?: string;
  deleted?: boolean;
  creation_time?: string;
  role_id?: number;
  has_admin_role?: boolean;
  role_name?: string;
  reset_uuid?: string;
  Salt?: string;
  email?: string;
}
