/* tslint:disable */

/**
 * The object contains basic chart information
 */
export interface ChartInfoEntry {

  /**
   * The created time of chart
   */
  updated?: string;

  /**
   * Name of chart
   */
  name: string;

  /**
   * The created time of chart
   */
  created: string;

  /**
   * Flag to indicate if the chart is deprecated
   */
  deprecated?: boolean;

  /**
   * Total count of chart versions
   */
  total_versions: number;

  /**
   * latest version of chart
   */
  latest_version?: string;

  /**
   * The home website of chart
   */
  home?: string;

  /**
   * The icon path of chart
   */
  icon?: string;
}
