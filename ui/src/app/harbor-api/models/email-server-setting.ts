/* tslint:disable */
export interface EmailServerSetting {

  /**
   * Use ssl/tls or not.
   */
  email_ssl?: boolean;

  /**
   * The password of email server.
   */
  email_password?: string;

  /**
   * The dentity of email server.
   */
  email_identity?: string;

  /**
   * The port of email server.
   */
  email_port?: number;

  /**
   * The username of email server.
   */
  email_username?: string;

  /**
   * The host of email server.
   */
  email_host?: string;
}
