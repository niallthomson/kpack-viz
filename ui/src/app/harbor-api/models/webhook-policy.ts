/* tslint:disable */
import { WebhookTargetObject } from './webhook-target-object';

/**
 * The webhook policy object
 */
export interface WebhookPolicy {

  /**
   * The update time of the webhook policy.
   */
  update_time?: string;

  /**
   * The description of webhook policy.
   */
  description?: string;

  /**
   * The creator of the webhook policy.
   */
  creator?: string;

  /**
   * The create time of the webhook policy.
   */
  creation_time?: string;

  /**
   * Whether the webhook policy is enabled or not.
   */
  enabled?: boolean;
  targets?: Array<WebhookTargetObject>;
  event_types?: Array<string>;

  /**
   * The project ID of webhook policy.
   */
  project_id?: number;

  /**
   * The webhook policy ID.
   */
  id?: number;

  /**
   * The name of webhook policy.
   */
  name?: string;
}
