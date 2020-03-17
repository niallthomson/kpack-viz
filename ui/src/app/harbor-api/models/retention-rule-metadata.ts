/* tslint:disable */
import { RetentionRuleParamMetadata } from './retention-rule-param-metadata';

/**
 * the tag retention rule metadata
 */
export interface RetentionRuleMetadata {

  /**
   * rule display text
   */
  display_text?: string;

  /**
   * rule action
   */
  action?: string;

  /**
   * rule params
   */
  params?: Array<RetentionRuleParamMetadata>;

  /**
   * rule id
   */
  rule_template?: string;
}
