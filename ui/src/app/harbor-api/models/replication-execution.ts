/* tslint:disable */

/**
 * The replication execution
 */
export interface ReplicationExecution {

  /**
   * The status
   */
  status?: string;

  /**
   * The status text
   */
  status_text?: string;

  /**
   * The trigger mode
   */
  trigger?: string;

  /**
   * The start time
   */
  start_time?: string;

  /**
   * The count of failed tasks
   */
  failed?: number;

  /**
   * The count of succeed tasks
   */
  succeed?: number;

  /**
   * The count of stopped tasks
   */
  stopped?: number;

  /**
   * The end time
   */
  end_time?: string;

  /**
   * The count of in_progress tasks
   */
  in_progress?: number;

  /**
   * The total count of all tasks
   */
  total?: number;

  /**
   * The ID
   */
  id?: number;

  /**
   * The policy ID
   */
  policy_id?: number;
}
