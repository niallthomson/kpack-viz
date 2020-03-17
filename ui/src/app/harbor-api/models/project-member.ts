/* tslint:disable */
import { UserGroup } from './user-group';
import { UserEntity } from './user-entity';
export interface ProjectMember {

  /**
   * The role id 1 for projectAdmin, 2 for developer, 3 for guest, 4 for master
   */
  role_id?: number;
  member_group?: UserGroup;
  member_user?: UserEntity;
}
