/* tslint:disable */

/**
 * The webhook policy and last trigger time group by event type.
 */
export interface WebhookLastTrigger {

  /**
   * Whether or not the webhook policy enabled.
   */
  enabled?: boolean;

  /**
   * The creation time of webhook policy.
   */
  creation_time?: string;

  /**
   * The webhook event type.
   */
  event_type?: string;

  /**
   * The last trigger time of webhook policy.
   */
  last_trigger_time?: string;
}
