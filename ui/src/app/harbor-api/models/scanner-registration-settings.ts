/* tslint:disable */
export interface ScannerRegistrationSettings {

  /**
   * A base URL of the scanner adapter.
   */
  url?: string;

  /**
   * An optional value of the HTTP Authorization header sent with each request to the Scanner Adapter API.
   */
  access_credential?: string;

  /**
   * The name of this registration
   */
  name?: string;

  /**
   * Specify what authentication approach is adopted for the HTTP communications.
   * Supported types Basic", "Bearer" and api key header "X-ScannerAdapter-API-Key"
   */
  auth?: string;
}
