/* tslint:disable */
import { DigitalSignature } from './digital-signature';

/**
 * The security information of the chart
 */
export interface SecurityReport {
  signature?: DigitalSignature;
}
