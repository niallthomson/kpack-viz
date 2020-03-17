/* tslint:disable */
import { ComponentHealthStatus } from './component-health-status';

/**
 * The system health status
 */
export interface OverallHealthStatus {

  /**
   * The overall health status. It is "healthy" only when all the components' status are "healthy"
   */
  status?: string;
  components?: Array<ComponentHealthStatus>;
}
