/* tslint:disable */

/**
 * The metadata of chart version
 */
export interface ChartMetadata {

  /**
   * The name of template engine
   */
  engine: string;

  /**
   * A one-sentence description of chart
   */
  description?: string;

  /**
   * Whether or not this chart is deprecated
   */
  deprecated?: boolean;

  /**
   * The version of the application enclosed in the chart
   */
  appVersion: string;

  /**
   * The API version of this chart
   */
  apiVersion: string;

  /**
   * The name of the chart
   */
  name: string;

  /**
   * The URL to the source code of chart
   */
  sources?: Array<string>;

  /**
   * A SemVer 2 version of chart
   */
  version: string;

  /**
   * A list of string keywords
   */
  keywords?: Array<string>;

  /**
   * The URL to the relevant project page
   */
  home?: string;

  /**
   * The URL to an icon file
   */
  icon: string;
}
