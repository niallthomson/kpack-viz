/* tslint:disable */
import { ChartMetadata } from './chart-metadata';

/**
 * A specified chart entry
 */
export interface ChartVersion extends ChartMetadata {

  /**
   * A flag to indicate if the chart entry is removed
   */
  removed?: boolean;

  /**
   * The digest value of the chart entry
   */
  digest?: string;

  /**
   * The urls of the chart entry
   */
  urls?: Array<string>;

  /**
   * The created time of the chart entry
   */
  created?: string;
}
