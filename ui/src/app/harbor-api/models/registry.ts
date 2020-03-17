/* tslint:disable */
import { RegistryCredential } from './registry-credential';
export interface Registry {

  /**
   * Health status of the registry.
   */
  status?: string;
  credential?: RegistryCredential;

  /**
   * The update time of the policy.
   */
  update_time?: string;

  /**
   * The registry name.
   */
  name?: string;

  /**
   * The registry URL string.
   */
  url?: string;

  /**
   * Whether or not the certificate will be verified when Harbor tries to access the server.
   */
  insecure?: boolean;

  /**
   * The create time of the policy.
   */
  creation_time?: string;

  /**
   * Type of the registry, e.g. 'harbor'.
   */
  type?: string;

  /**
   * The registry ID.
   */
  id?: number;

  /**
   * Description of the registry.
   */
  description?: string;
}
