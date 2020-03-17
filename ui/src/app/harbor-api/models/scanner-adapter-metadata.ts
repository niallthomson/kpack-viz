/* tslint:disable */
import { Scanner } from './scanner';
import { ScannerCapability } from './scanner-capability';

/**
 * The metadata info of the scanner adapter
 */
export interface ScannerAdapterMetadata {
  name?: Scanner;
  capabilities?: Array<ScannerCapability>;
  properties?: {[key: string]: string};
}
