/* tslint:disable */
import { TriggerSettings } from './trigger-settings';
export interface ReplicationTrigger {

  /**
   * The replication policy trigger type. The valid values are manual, event_based and scheduled.
   */
  type?: string;
  trigger_settings?: TriggerSettings;
}
