/* tslint:disable */
import { ChartVersion } from './chart-version';

/**
 * The chart search result item
 */
export interface SearchResult {

  /**
   * The matched level
   */
  score?: number;

  /**
   * The chart name with repo name
   */
  name?: string;
  chart?: ChartVersion;
}
