/* tslint:disable */

/**
 * Another chart the chart depends on
 */
export interface Dependency {

  /**
   * The version of the chart dependency
   */
  version: string;

  /**
   * The name of the chart denpendency
   */
  name: string;

  /**
   * The URL to the repository
   */
  repository?: string;
}
