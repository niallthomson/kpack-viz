/* tslint:disable */
import { CVEWhitelist } from './cvewhitelist';
import { ProjectMetadata } from './project-metadata';
export interface ProjectReq {

  /**
   * The count quota of the project.
   */
  count_limit?: number;

  /**
   * The name of the project.
   */
  project_name?: string;

  /**
   * The CVE whitelist of the project.
   */
  cve_whitelist?: CVEWhitelist;

  /**
   * The storage quota of the project.
   */
  storage_limit?: number;

  /**
   * The metadata of the project.
   */
  metadata?: ProjectMetadata;
}
