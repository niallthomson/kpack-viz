/* tslint:disable */
import { VulnerabilitySummary } from './vulnerability-summary';

/**
 * The summary for the native report
 */
export interface NativeReportSummary {

  /**
   * The end time of the scan process that generating report
   */
  end_time?: string;

  /**
   * The overall severity
   */
  severity?: string;

  /**
   * The seconds spent for generating the report
   */
  duration?: number;

  /**
   * The start time of the scan process that generating report
   */
  start_time?: string;

  /**
   * id of the native scan report
   */
  report_id?: string;

  /**
   * The status of the report generating process
   */
  scan_status?: string;
  summary?: VulnerabilitySummary;
}
