/* tslint:disable */
import { VulnerabilityItem } from './vulnerability-item';
import { Scanner } from './scanner';

/**
 * The harbor native report format
 */
export interface Report {

  /**
   * Time of generating this report
   */
  generated_at?: string;
  vulnerabilities?: Array<VulnerabilityItem>;
  scanner?: Scanner;

  /**
   * A standard scale for measuring the severity of a vulnerability.
   */
  severity?: string;
}
