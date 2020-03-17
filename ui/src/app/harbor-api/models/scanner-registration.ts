/* tslint:disable */

/**
 * Registration represents a named configuration for invoking a scanner via its adapter.
 */
export interface ScannerRegistration {

  /**
   * Indicate whether the registration is enabled or not
   */
  disabled?: boolean;

  /**
   * Optional property to describe the vendor of the scanner registration
   */
  vendor?: string;

  /**
   * An optional description of this registration.
   */
  description?: string;

  /**
   * A base URL of the scanner adapter
   */
  url?: string;

  /**
   * Optional property to describe the name of the scanner registration
   */
  adapter?: string;

  /**
   * An optional value of the HTTP Authorization header sent with each request to the Scanner Adapter API.
   */
  access_credential?: string;

  /**
   * The unique identifier of this registration.
   */
  uuid?: string;

  /**
   * Specify what authentication approach is adopted for the HTTP communications.
   * Supported types Basic", "Bearer" and api key header "X-ScannerAdapter-API-Key"
   */
  auth?: string;

  /**
   * Indicate if the registration is set as the system default one
   */
  is_default?: boolean;

  /**
   * Optional property to describe the version of the scanner registration
   */
  version?: string;

  /**
   * Indicate the healthy of the registration
   */
  health?: string;

  /**
   * Indicate whether use internal registry addr for the scanner to pull content or not
   */
  use_internal_addr?: boolean;

  /**
   * Indicate if skip the certificate verification when sending HTTP requests
   */
  skip_certVerify?: boolean;

  /**
   * The name of this registration.
   */
  name?: string;
}
