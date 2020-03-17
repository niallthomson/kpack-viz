/* tslint:disable */
import { RetentionRuleMetadata } from './retention-rule-metadata';
import { RetentionSelectorMetadata } from './retention-selector-metadata';

/**
 * the tag retention metadata
 */
export interface RetentionMetadata {

  /**
   * templates
   */
  templates?: Array<RetentionRuleMetadata>;

  /**
   * supported tag selectors
   */
  tag_selectors?: Array<RetentionSelectorMetadata>;

  /**
   * supported scope selectors
   */
  scope_selectors?: Array<RetentionSelectorMetadata>;
}
