/* tslint:disable */
import { RetentionSelector } from './retention-selector';
export interface RetentionRule {
  priority?: number;
  scope_selectors?: {[key: string]: Array<RetentionSelector>};
  disabled?: boolean;
  params?: {[key: string]: {}};
  template?: string;
  action?: string;
  tag_selectors?: Array<RetentionSelector>;
  id?: number;
}
