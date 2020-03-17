/* tslint:disable */
export interface StatisticMap {

  /**
   * The count of the total projects, only be seen when the is admin.
   */
  total_project_count?: number;

  /**
   * The count of the public projects.
   */
  public_project_count?: number;

  /**
   * The count of the private projects which the user is a member of.
   */
  private_project_count?: number;

  /**
   * The count of the public repositories belonging to the public projects which the user is a member of.
   */
  public_repo_count?: number;

  /**
   * The count of the total repositories, only be seen when the user is admin.
   */
  total_repo_count?: number;

  /**
   * The count of the private repositories belonging to the projects which the user is a member of.
   */
  private_repo_count?: number;
}
