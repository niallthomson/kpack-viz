/* tslint:disable */
export interface LdapUsers {

  /**
   * system will try to guess the user email address form "mail" or "email" attribute.
   */
  ldap_email?: string;

  /**
   * system will try to guess the user realname form "uid" or "cn" attribute.
   */
  ldap_realname?: string;

  /**
   * search ldap user name based on ldapconf.
   */
  ldap_username?: string;
}
