/* tslint:disable */
export interface Configurations {

  /**
   * Whether verify your OIDC server certificate, disable it if your OIDC server is hosted via self-hosted certificate.
   */
  oidc_verify_cert?: boolean;

  /**
   * By default it's empty so the email_username is picked.
   */
  email_identity?: string;

  /**
   * The filter to search the ldap group.
   */
  ldap_group_search_filter?: string;

  /**
   * The auth mode of current system, such as "db_auth", "ldap_auth"
   */
  auth_mode?: string;

  /**
   * Whether the Harbor instance supports self-registration.  If it's set to false, admin need to add user to the instance.
   */
  self_registration?: boolean;

  /**
   * The scope sent to OIDC server during authentication, should be separated by comma. It has to contain “openid”, and “offline_access”. If you are using google, please remove “offline_access” from this field.
   */
  oidc_scope?: string;

  /**
   * The DN of the user to do the search.
   */
  ldap_search_dn?: string;

  /**
   * The default storage quota for the new created projects.
   */
  storage_per_project?: string;
  scan_all_policy?: {type?: string, parameter?: {daily_time?: number}};

  /**
   * Whether or not the certificate will be verified when Harbor tries to access a remote Harbor instance for replication.
   */
  verify_remote_cert?: boolean;

  /**
   * timeout in seconds for connection to LDAP server.
   */
  ldap_timeout?: number;

  /**
   * The Base DN for LDAP binding.
   */
  ldap_base_dn?: string;

  /**
   * The filter for LDAP binding.
   */
  ldap_filter?: string;

  /**
   * 'docker push' is prohibited by Harbor if you set it to true.
   */
  read_only?: boolean;

  /**
   * This attribute indicates whether quota per project enabled in harbor
   */
  quota_per_project_enable?: boolean;

  /**
   * The URL of LDAP server.
   */
  ldap_url?: string;

  /**
   * The name of the OIDC provider.
   */
  oidc_name?: string;

  /**
   * This attribute restricts what users have the permission to create project.  It can be "everyone" or "adminonly".
   */
  project_creation_restriction?: string;

  /**
   * The attribute which is used as identity for the LDAP binding, such as "CN" or "SAMAccountname"
   */
  ldap_uid?: string;

  /**
   * The client id of the OIDC.
   */
  oidc_client_id?: string;

  /**
   * The base DN to search LDAP group.
   */
  ldap_group_base_dn?: string;

  /**
   * The attribute which is used as identity of the LDAP group, default is cn.
   */
  ldap_group_attribute_name?: string;

  /**
   * Whether or not the certificate will be verified when Harbor tries to access the email server.
   */
  email_insecure?: boolean;

  /**
   * Specify the ldap group which have the same privilege with Harbor admin.
   */
  ldap_group_admin_dn?: string;

  /**
   * The username for authenticate against SMTP server.
   */
  email_username?: string;

  /**
   * The URL of an OIDC-complaint server, must start with 'https://'.
   */
  oidc_endpoint?: string;

  /**
   * The client secret of the OIDC.
   */
  oidc_client_secret?: string;

  /**
   * 0-LDAP_SCOPE_BASE, 1-LDAP_SCOPE_ONELEVEL, 2-LDAP_SCOPE_SUBTREE
   */
  ldap_scope?: number;

  /**
   * The default count quota for the new created projects.
   */
  count_per_project?: string;

  /**
   * The expiration time of the token for internal Registry, in minutes.
   */
  token_expiration?: number;

  /**
   * The scope to search ldap. '0-LDAP_SCOPE_BASE, 1-LDAP_SCOPE_ONELEVEL, 2-LDAP_SCOPE_SUBTREE'
   */
  ldap_group_search_scope?: number;

  /**
   * When it's set to true the system will access Email server via TLS by default.  If it's set to false, it still will handle "STARTTLS" from server side.
   */
  email_ssl?: boolean;

  /**
   * The port of SMTP server.
   */
  email_port?: number;

  /**
   * The hostname of SMTP server that sends Email notification.
   */
  email_host?: string;

  /**
   * The sender name for Email notification.
   */
  email_from?: string;
}
