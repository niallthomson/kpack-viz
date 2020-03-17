/* tslint:disable */

/**
 * The webhook job.
 */
export interface WebhookJob {

  /**
   * The webhook job status.
   */
  status?: string;

  /**
   * The webhook job update time.
   */
  update_time?: string;

  /**
   * The webhook job event type.
   */
  event_type?: string;

  /**
   * The webhook job creation time.
   */
  creation_time?: string;

  /**
   * The webhook job notify detailed data.
   */
  job_detail?: string;

  /**
   * The webhook job ID.
   */
  id?: number;

  /**
   * The webhook job notify type.
   */
  notify_type?: string;

  /**
   * The webhook policy ID.
   */
  policy_id?: number;
}
