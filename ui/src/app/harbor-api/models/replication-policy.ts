/* tslint:disable */
import { ReplicationFilter } from './replication-filter';
import { Registry } from './registry';
import { ReplicationTrigger } from './replication-trigger';
export interface ReplicationPolicy {

  /**
   * The update time of the policy.
   */
  update_time?: string;

  /**
   * The description of the policy.
   */
  description?: string;

  /**
   * Whether the policy is enabled or not.
   */
  enabled?: boolean;

  /**
   * The replication policy filter array.
   */
  filters?: Array<ReplicationFilter>;

  /**
   * The destination registry.
   */
  dest_registry?: Registry;

  /**
   * The create time of the policy.
   */
  creation_time?: string;

  /**
   * The source registry.
   */
  src_registry?: Registry;

  /**
   * The destination namespace.
   */
  dest_namespace?: string;
  trigger?: ReplicationTrigger;

  /**
   * Whether to replicate the deletion operation.
   */
  deletion?: boolean;

  /**
   * Whether to override the resources on the destination registry.
   */
  override?: boolean;

  /**
   * The policy ID.
   */
  id?: number;

  /**
   * The policy name.
   */
  name?: string;
}
