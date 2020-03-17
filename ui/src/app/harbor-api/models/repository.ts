/* tslint:disable */
import { Label } from './label';
export interface Repository {

  /**
   * The update time of repository.
   */
  update_time?: string;

  /**
   * The description of repository.
   */
  description?: string;

  /**
   * The tags count of repository.
   */
  tags_count?: number;

  /**
   * The label list.
   */
  labels?: Array<Label>;

  /**
   * The creation time of repository.
   */
  creation_time?: string;

  /**
   * The star count of repository.
   */
  star_count?: number;

  /**
   * The project ID of repository.
   */
  project_id?: number;

  /**
   * The pull count of repository.
   */
  pull_count?: number;

  /**
   * The ID of repository.
   */
  id?: number;

  /**
   * The name of repository.
   */
  name?: string;
}
