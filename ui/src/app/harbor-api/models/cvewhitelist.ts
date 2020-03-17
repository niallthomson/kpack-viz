/* tslint:disable */
import { CVEWhitelistItem } from './cvewhitelist-item';

/**
 * The CVE Whitelist for system or project
 */
export interface CVEWhitelist {
  items?: Array<CVEWhitelistItem>;

  /**
   * ID of the project which the whitelist belongs to.  For system level whitelist this attribute is zero.
   */
  project_id?: number;

  /**
   * ID of the whitelist
   */
  id?: number;

  /**
   * the time for expiration of the whitelist, in the form of seconds since epoch.  This is an optional attribute, if it's not set the CVE whitelist does not expire.
   */
  expires_at?: number;
}
