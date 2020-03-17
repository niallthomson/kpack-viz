/* tslint:disable */
import { ResourceList } from './resource-list';
export interface ProjectSummary {

  /**
   * The total number of master members.
   */
  master_count?: number;

  /**
   * The total number of project admin members.
   */
  project_admin_count?: number;

  /**
   * The total number of developer members.
   */
  developer_count?: number;

  /**
   * The total number of charts under this project.
   */
  chart_count?: number;

  /**
   * The number of the repositories under this project.
   */
  repo_count?: number;
  quota?: {hard?: ResourceList, used?: ResourceList};

  /**
   * The total number of guest members.
   */
  guest_count?: number;
}
