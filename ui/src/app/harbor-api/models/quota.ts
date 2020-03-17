/* tslint:disable */
import { ResourceList } from './resource-list';
import { QuotaRefObject } from './quota-ref-object';

/**
 * The quota object
 */
export interface Quota {

  /**
   * the update time of the quota
   */
  update_time?: string;

  /**
   * The used status of the quota
   */
  used?: ResourceList;

  /**
   * The reference object of the quota
   */
  ref?: QuotaRefObject;

  /**
   * The hard limits of the quota
   */
  hard?: ResourceList;

  /**
   * the creation time of the quota
   */
  creation_time?: string;

  /**
   * ID of the quota
   */
  id?: number;
}
