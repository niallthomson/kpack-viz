/* tslint:disable */
export interface ProjectMetadata {

  /**
   * Whether content trust is enabled or not. If it is enabled, user can't pull unsigned images from this project. The valid values are "true", "false".
   */
  enable_content_trust?: string;

  /**
   * Whether scan images automatically when pushing. The valid values are "true", "false".
   */
  auto_scan?: string;

  /**
   * If the vulnerability is high than severity defined here, the images can't be pulled. The valid values are "none", "low", "medium", "high", "critical".
   */
  severity?: string;

  /**
   * Whether this project reuse the system level CVE whitelist as the whitelist of its own.  The valid values are "true", "false". If it is set to "true" the actual whitelist associate with this project, if any, will be ignored.
   */
  reuse_sys_cve_whitelist?: string;

  /**
   * The public status of the project. The valid values are "true", "false".
   */
  public?: string;

  /**
   * Whether prevent the vulnerable images from running. The valid values are "true", "false".
   */
  prevent_vul?: string;
}
