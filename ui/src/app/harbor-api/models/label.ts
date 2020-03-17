/* tslint:disable */
export interface Label {

  /**
   * The update time of label.
   */
  update_time?: string;

  /**
   * The description of label.
   */
  description?: string;

  /**
   * The color of label.
   */
  color?: string;

  /**
   * The creation time of label.
   */
  creation_time?: string;

  /**
   * The label is deleted or not.
   */
  deleted?: boolean;

  /**
   * The scope of label, g for global labels and p for project labels.
   */
  scope?: string;

  /**
   * The project ID if the label is a project label.
   */
  project_id?: number;

  /**
   * The ID of label.
   */
  id?: number;

  /**
   * The name of label.
   */
  name?: string;
}
