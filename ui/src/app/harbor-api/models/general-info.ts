/* tslint:disable */
import { VulnNamespaceTimestamp } from './vuln-namespace-timestamp';
export interface GeneralInfo {

  /**
   * If the Harbor instance is deployed with nested notary.
   */
  with_notary?: boolean;

  /**
   * The build version of Harbor.
   */
  harbor_version?: string;

  /**
   * The UTC time in milliseconds, after which user can call scanAll API to scan all images.
   */
  next_scan_all?: number;

  /**
   * The auth mode of current Harbor instance.
   */
  auth_mode?: string;

  /**
   * The status of vulnerability data of Clair.
   */
  clair_vulnerability_status?: {overall_last_update?: number, details?: Array<VulnNamespaceTimestamp>};

  /**
   * If the Harbor instance is deployed with nested clair.
   */
  with_clair?: boolean;

  /**
   * The url of the endpoint of admiral instance.
   */
  admiral_endpoint?: string;

  /**
   * If the Harbor instance is deployed with Admiral.
   */
  with_admiral?: boolean;

  /**
   * The external URL of Harbor, with protocol.
   */
  external_url?: string;

  /**
   * Indicate who can create projects, it could be 'adminonly' or 'everyone'.
   */
  project_creation_restriction?: string;

  /**
   * Indicate whether there is a ca root cert file ready for download in the file system.
   */
  has_ca_root?: boolean;

  /**
   * Indicate whether the Harbor instance enable user to register himself.
   */
  self_registration?: boolean;

  /**
   * The url of registry against which the docker command should be issued.
   */
  registry_url?: string;
}
