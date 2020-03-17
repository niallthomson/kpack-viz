/* tslint:disable */

/**
 * The replication task
 */
export interface ReplicationTask {

  /**
   * The status
   */
  status?: string;

  /**
   * The job ID
   */
  job_id?: string;

  /**
   * The start time
   */
  start_time?: string;

  /**
   * The destination resource
   */
  dst_resource?: string;

  /**
   * The source resource
   */
  src_resource?: string;

  /**
   * The resource type
   */
  resource_type?: string;

  /**
   * The ID
   */
  id?: number;

  /**
   * The execution ID
   */
  execution_id?: number;

  /**
   * The end time
   */
  end_time?: string;
}
