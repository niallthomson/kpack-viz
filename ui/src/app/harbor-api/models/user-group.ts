/* tslint:disable */
export interface UserGroup {

  /**
   * The name of the user group
   */
  group_name?: string;

  /**
   * The DN of the LDAP group if group type is 1 (LDAP group).
   */
  ldap_group_dn?: string;

  /**
   * The group type, 1 for LDAP group, 2 for HTTP group.
   */
  group_type?: number;

  /**
   * The ID of the user group
   */
  id?: number;
}
