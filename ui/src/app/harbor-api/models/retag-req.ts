/* tslint:disable */
export interface RetagReq {

  /**
   * If target tag already exists, whether to override it
   */
  override?: boolean;

  /**
   * Source image to be retagged, e.g. 'stage/app:v1.0'
   */
  src_image?: string;

  /**
   * new tag to be created
   */
  tag?: string;
}
