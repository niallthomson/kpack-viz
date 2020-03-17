/* tslint:disable */
import { FilterStyle } from './filter-style';

/**
 * The registry info contains the base info and capability declarations of the registry
 */
export interface RegistryInfo {

  /**
   * The registry type
   */
  type?: string;

  /**
   * The filters that the registry supports
   */
  supported_resource_filters?: Array<FilterStyle>;

  /**
   * The triggers that the registry supports
   */
  supported_triggers?: Array<string>;

  /**
   * The description
   */
  description?: string;
}
