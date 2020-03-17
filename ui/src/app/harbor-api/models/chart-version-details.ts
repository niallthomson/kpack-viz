/* tslint:disable */
import { Dependency } from './dependency';
import { SecurityReport } from './security-report';
import { Labels } from './labels';
import { ChartVersion } from './chart-version';

/**
 * The detailed information of the chart entry
 */
export interface ChartVersionDetails {
  files?: {[key: string]: string};
  dependencies?: Array<Dependency>;
  values?: {[key: string]: {}};
  security?: SecurityReport;
  labels?: Labels;
  metadata?: ChartVersion;
}
