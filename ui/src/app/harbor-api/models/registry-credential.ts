/* tslint:disable */
export interface RegistryCredential {

  /**
   * Access key, e.g. user name when credential type is 'basic'.
   */
  access_key?: string;

  /**
   * Access secret, e.g. password when credential type is 'basic'.
   */
  access_secret?: string;

  /**
   * Credential type, such as 'basic', 'oauth'.
   */
  type?: string;
}
