/* tslint:disable */
export interface AccessLog {

  /**
   * Username of the user in this log entry.
   */
  username?: string;

  /**
   * The ID of the log entry.
   */
  log_id?: number;

  /**
   * The operation against the repository in this log entry.
   */
  operation?: string;

  /**
   * The time when this operation is triggered.
   */
  op_time?: string;

  /**
   * Tag of the repository in this log entry.
   */
  repo_tag?: string;

  /**
   * Name of the repository in this log entry.
   */
  repo_name?: string;
}
