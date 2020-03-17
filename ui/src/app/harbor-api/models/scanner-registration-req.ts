/* tslint:disable */
export interface ScannerRegistrationReq {

  /**
   * The name of this registration
   */
  name?: string;

  /**
   * A base URL of the scanner adapter.
   */
  url?: string;

  /**
   * An optional value of the HTTP Authorization header sent with each request to the Scanner Adapter API.
   */
  access_credential?: string;

  /**
   * Specify what authentication approach is adopted for the HTTP communications.
   * Supported types Basic", "Bearer" and api key header "X-ScannerAdapter-API-Key"
   */
  auth?: string;

  /**
   * Indicate whether the registration is enabled or not
   */
  disabled?: boolean;

  /**
   * Indicate whether use internal registry addr for the scanner to pull content or not
   */
  use_internal_addr?: boolean;

  /**
   * Indicate if skip the certificate verification when sending HTTP requests
   */
  skip_certVerify?: boolean;

  /**
   * An optional description of this registration.
   */
  description?: string;
}
