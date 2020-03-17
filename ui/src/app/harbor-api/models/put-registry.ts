/* tslint:disable */
export interface PutRegistry {

  /**
   * The registry access key.
   */
  access_key?: string;

  /**
   * Credential type of the registry, e.g. 'basic'.
   */
  credential_type?: string;

  /**
   * The registry name.
   */
  name?: string;

  /**
   * The registry access secret.
   */
  access_secret?: string;

  /**
   * The registry address URL string.
   */
  url?: string;

  /**
   * Whether or not the certificate will be verified when Harbor tries to access the server.
   */
  insecure?: boolean;

  /**
   * Description of the registry.
   */
  description?: string;
}
