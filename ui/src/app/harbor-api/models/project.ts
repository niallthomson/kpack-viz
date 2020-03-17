/* tslint:disable */
import { CVEWhitelist } from './cvewhitelist';
import { ProjectMetadata } from './project-metadata';
export interface Project {

  /**
   * The update time of the project.
   */
  update_time?: string;

  /**
   * The owner name of the project.
   */
  owner_name?: string;

  /**
   * The name of the project.
   */
  name?: string;

  /**
   * A deletion mark of the project.
   */
  deleted?: boolean;

  /**
   * The owner ID of the project always means the creator of the project.
   */
  owner_id?: number;

  /**
   * The number of the repositories under this project.
   */
  repo_count?: number;

  /**
   * The creation time of the project.
   */
  creation_time?: string;

  /**
   * Correspond to the UI about whether the project's publicity is  updatable (for UI)
   */
  togglable?: boolean;

  /**
   * Project ID
   */
  project_id?: number;

  /**
   * The role ID with highest permission of the current user who triggered the API (for UI)
   */
  current_user_role_id?: number;

  /**
   * The list of role ID of the current user who triggered the API (for UI)
   */
  current_user_role_ids?: Array<number>;

  /**
   * The total number of charts under this project.
   */
  chart_count?: number;

  /**
   * The CVE whitelist of this project.
   */
  cve_whitelist?: CVEWhitelist;

  /**
   * The metadata of the project.
   */
  metadata?: ProjectMetadata;
}
