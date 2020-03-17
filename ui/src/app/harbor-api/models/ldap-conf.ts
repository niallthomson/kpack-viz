/* tslint:disable */
export interface LdapConf {

  /**
   * The url of ldap service.
   */
  ldap_url?: string;

  /**
   * The serach uid from ldap service attributes.
   */
  ldap_uid?: string;

  /**
   * The search dn of ldap service.
   */
  ldap_search_dn?: string;

  /**
   * The connect timeout of ldap service(second).
   */
  ldap_connection_timeout?: number;

  /**
   * The search password of ldap service.
   */
  ldap_search_password?: string;

  /**
   * The serach scope of ldap service.
   */
  ldap_scope?: number;

  /**
   * The base dn of ldap service.
   */
  ldap_base_dn?: string;

  /**
   * The serach filter of ldap service.
   */
  ldap_filter?: string;
}
