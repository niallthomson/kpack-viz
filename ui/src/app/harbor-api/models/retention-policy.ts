/* tslint:disable */
import { RetentionRule } from './retention-rule';
import { RetentionPolicyScope } from './retention-policy-scope';
import { RetentionRuleTrigger } from './retention-rule-trigger';

/**
 * retention policy
 */
export interface RetentionPolicy {
  rules?: Array<RetentionRule>;
  scope?: RetentionPolicyScope;
  trigger?: RetentionRuleTrigger;
  id?: number;
  algorithm?: string;
}
