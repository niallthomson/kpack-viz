/* tslint:disable */
export interface SearchRepository {

  /**
   * The name of the repository
   */
  repository_name?: string;

  /**
   * The name of the project that the repository belongs to
   */
  project_name?: string;

  /**
   * The flag to indicate the publicity of the project that the repository belongs to (1 is public, 0 is not)
   */
  project_public?: boolean;

  /**
   * The count of tags in the repository
   */
  tags_count?: number;

  /**
   * The ID of the project that the repository belongs to
   */
  project_id?: number;

  /**
   * The count how many times the repository is pulled
   */
  pull_count?: number;
}
