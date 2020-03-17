/* tslint:disable */
import { AdminJobScheduleObj } from './admin-job-schedule-obj';
export interface GCResult {

  /**
   * the status of gc job.
   */
  job_status?: string;

  /**
   * the update time of gc job.
   */
  update_time?: string;
  schedule?: AdminJobScheduleObj;

  /**
   * if gc job was deleted.
   */
  deleted?: boolean;

  /**
   * the job kind of gc job.
   */
  job_kind?: string;

  /**
   * the creation time of gc job.
   */
  creation_time?: string;

  /**
   * the id of gc job.
   */
  id?: number;

  /**
   * the job name of gc job.
   */
  job_name?: string;
}
