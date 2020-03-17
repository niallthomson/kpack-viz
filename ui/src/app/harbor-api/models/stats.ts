/* tslint:disable */

/**
 * Stats provides the overall progress of the scan all process.
 */
export interface Stats {

  /**
   * The metrics data for the each status
   */
  metrics?: {[key: string]: number};

  /**
   * The number of the finished scan processes triggered by the scan all action
   */
  completed?: number;

  /**
   * The total number of scan processes triggered by the scan all action
   */
  total?: number;

  /**
   * The requester identity which usually uses the ID of the scan all job
   */
  requester?: string;
}
