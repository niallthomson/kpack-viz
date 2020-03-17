/* tslint:disable */

/**
 * The webhook policy target object.
 */
export interface WebhookTargetObject {

  /**
   * The webhook target notify type.
   */
  type?: string;

  /**
   * The webhook auth header.
   */
  auth_header?: string;

  /**
   * Whether or not to skip cert verify.
   */
  skip_cert_verify?: boolean;

  /**
   * The webhook target address.
   */
  address?: string;
}
