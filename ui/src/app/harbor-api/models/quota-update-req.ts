/* tslint:disable */
import { ResourceList } from './resource-list';
export interface QuotaUpdateReq {

  /**
   * The new hard limits for the quota
   */
  hard?: ResourceList;
}
