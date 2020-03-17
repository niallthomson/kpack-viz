/* tslint:disable */
import { ScanOverview } from './scan-overview';
import { Label } from './label';
export interface DetailedTag {

  /**
   * The name of the tag.
   */
  name?: string;

  /**
   * The overview of the scan result.
   */
  scan_overview?: ScanOverview;

  /**
   * The author of the image.
   */
  author?: string;

  /**
   * The version of docker which builds the image.
   */
  docker_version?: string;

  /**
   * The label list.
   */
  labels?: Array<Label>;

  /**
   * The build time of the image.
   */
  created?: string;

  /**
   * The architecture of the image.
   */
  architecture?: string;

  /**
   * The signature of image, defined by RepoSignature. If it is null, the image is unsigned.
   */
  signature?: {};

  /**
   * The os of the image.
   */
  os?: string;

  /**
   * The digest of the tag.
   */
  digest?: string;

  /**
   * The size of the image.
   */
  size?: number;
}
