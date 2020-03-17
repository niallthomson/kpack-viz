/* tslint:disable */
export interface ProjectMemberEntity {

  /**
   * the id of entity, if the member is a user, it is user_id in user table. if the member is a user group, it is the user group's ID in user_group table.
   */
  entity_id?: number;

  /**
   * the name of the role
   */
  role_name?: string;

  /**
   * the name of the group member.
   */
  entity_name?: string;

  /**
   * the entity's type, u for user entity, g for group entity.
   */
  entity_type?: string;

  /**
   * the project id
   */
  project_id?: number;

  /**
   * the project member id
   */
  id?: number;

  /**
   * the role id
   */
  role_id?: number;
}
