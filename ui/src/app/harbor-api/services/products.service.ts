/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AdminJobSchedule } from '../models/admin-job-schedule';
import { Label } from '../models/label';
import { Stats } from '../models/stats';
import { Resource } from '../models/resource';
import { UserSearch } from '../models/user-search';
import { Repository } from '../models/repository';
import { ReplicationExecution } from '../models/replication-execution';
import { Manifest } from '../models/manifest';
import { Namespace } from '../models/namespace';
import { ChartVersions } from '../models/chart-versions';
import { WebhookJob } from '../models/webhook-job';
import { LdapConf } from '../models/ldap-conf';
import { Registry } from '../models/registry';
import { ImmutableTagRule } from '../models/immutable-tag-rule';
import { EmailServerSetting } from '../models/email-server-setting';
import { RobotAccountPostRep } from '../models/robot-account-post-rep';
import { RobotAccountCreate } from '../models/robot-account-create';
import { RobotAccount } from '../models/robot-account';
import { RetentionMetadata } from '../models/retention-metadata';
import { Search } from '../models/search';
import { AccessLog } from '../models/access-log';
import { ProjectMetadata } from '../models/project-metadata';
import { ScannerRegistration } from '../models/scanner-registration';
import { RetentionExecutionTask } from '../models/retention-execution-task';
import { RetentionPolicy } from '../models/retention-policy';
import { SystemInfo } from '../models/system-info';
import { StatisticMap } from '../models/statistic-map';
import { ReplicationTask } from '../models/replication-task';
import { WebhookPolicy } from '../models/webhook-policy';
import { User } from '../models/user';
import { RegistryInfo } from '../models/registry-info';
import { UserGroup } from '../models/user-group';
import { Quota } from '../models/quota';
import { ChartInfoEntry } from '../models/chart-info-entry';
import { ProjectReq } from '../models/project-req';
import { Project } from '../models/project';
import { Permission } from '../models/permission';
import { RepoSignature } from '../models/repo-signature';
import { RobotAccountUpdate } from '../models/robot-account-update';
import { DetailedTag } from '../models/detailed-tag';
import { UserProfile } from '../models/user-profile';
import { ReplicationPolicy } from '../models/replication-policy';
import { RetentionExecution } from '../models/retention-execution';
import { ProjectSummary } from '../models/project-summary';
import { HasAdminRole } from '../models/has-admin-role';
import { Password } from '../models/password';
import { GCResult } from '../models/gcresult';
import { CVEWhitelist } from '../models/cvewhitelist';
import { OverallHealthStatus } from '../models/overall-health-status';
import { ChartVersionDetails } from '../models/chart-version-details';
import { RetagReq } from '../models/retag-req';
import { PutRegistry } from '../models/put-registry';
import { LdapUsers } from '../models/ldap-users';
import { RepositoryDescription } from '../models/repository-description';
import { RoleRequest } from '../models/role-request';
import { ProjectMemberEntity } from '../models/project-member-entity';
import { LdapImportUsers } from '../models/ldap-import-users';
import { QuotaUpdateReq } from '../models/quota-update-req';
import { ProjectMember } from '../models/project-member';
import { QuotaSwitcher } from '../models/quota-switcher';
import { Configurations } from '../models/configurations';
import { ConfigurationsResponse } from '../models/configurations-response';
import { ScannerRegistrationSettings } from '../models/scanner-registration-settings';
import { GeneralInfo } from '../models/general-info';
import { ScannerAdapterMetadata } from '../models/scanner-adapter-metadata';
import { WebhookLastTrigger } from '../models/webhook-last-trigger';
@Injectable({
  providedIn: 'root',
})
class ProductsService extends __BaseService {
  static readonly putUsersUserIdCliSecretPath = '/users/{user_id}/cli_secret';
  static readonly putSystemGcSchedulePath = '/system/gc/schedule';
  static readonly postSystemGcSchedulePath = '/system/gc/schedule';
  static readonly getSystemGcSchedulePath = '/system/gc/schedule';
  static readonly postChartrepoRepoChartsNameVersionLabelsPath = '/chartrepo/{repo}/charts/{name}/{version}/labels';
  static readonly getChartrepoRepoChartsNameVersionLabelsPath = '/chartrepo/{repo}/charts/{name}/{version}/labels';
  static readonly getScansAllMetricsPath = '/scans/all/metrics';
  static readonly getLabelsIdResourcesPath = '/labels/{id}/resources';
  static readonly getUsersSearchPath = '/users/search';
  static readonly getRepositoriesTopPath = '/repositories/top';
  static readonly putReplicationExecutionsIdPath = '/replication/executions/{id}';
  static readonly getReplicationExecutionsIdPath = '/replication/executions/{id}';
  static readonly postLabelsPath = '/labels';
  static readonly getLabelsPath = '/labels';
  static readonly getRepositoriesRepoNameTagsTagManifestPath = '/repositories/{repo_name}/tags/{tag}/manifest';
  static readonly getRegistriesIdNamespacePath = '/registries/{id}/namespace';
  static readonly getChartrepoRepoChartsNamePath = '/chartrepo/{repo}/charts/{name}';
  static readonly deleteChartrepoRepoChartsNamePath = '/chartrepo/{repo}/charts/{name}';
  static readonly postRepositoriesRepoNameTagsTagLabelsPath = '/repositories/{repo_name}/tags/{tag}/labels';
  static readonly getRepositoriesRepoNameTagsTagLabelsPath = '/repositories/{repo_name}/tags/{tag}/labels';
  static readonly getProjectsProjectIdWebhookJobsPath = '/projects/{project_id}/webhook/jobs';
  static readonly postLdapPingPath = '/ldap/ping';
  static readonly postRegistriesPingPath = '/registries/ping';
  static readonly putProjectsProjectIdImmutabletagrulesIdPath = '/projects/{project_id}/immutabletagrules/{id}';
  static readonly deleteProjectsProjectIdImmutabletagrulesIdPath = '/projects/{project_id}/immutabletagrules/{id}';
  static readonly postEmailPingPath = '/email/ping';
  static readonly postProjectsProjectIdRobotsPath = '/projects/{project_id}/robots';
  static readonly getProjectsProjectIdRobotsPath = '/projects/{project_id}/robots';
  static readonly getSystemGcIdLogPath = '/system/gc/{id}/log';
  static readonly getRetentionsMetadatasPath = '/retentions/metadatas';
  static readonly getRepositoriesRepoNameTagsTagScanUuidLogPath = '/repositories/{repo_name}/tags/{tag}/scan/{uuid}/log';
  static readonly getSearchPath = '/search';
  static readonly getLogsPath = '/logs';
  static readonly postChartrepoRepoProvPath = '/chartrepo/{repo}/prov';
  static readonly putProjectsProjectIdMetadatasMetaNamePath = '/projects/{project_id}/metadatas/{meta_name}';
  static readonly getProjectsProjectIdMetadatasMetaNamePath = '/projects/{project_id}/metadatas/{meta_name}';
  static readonly deleteProjectsProjectIdMetadatasMetaNamePath = '/projects/{project_id}/metadatas/{meta_name}';
  static readonly getProjectsProjectIdScannerPath = '/projects/{project_id}/scanner';
  static readonly getRetentionsIdExecutionsEidTasksPath = '/retentions/{id}/executions/{eid}/tasks';
  static readonly deleteRepositoriesRepoNameLabelsLabelIdPath = '/repositories/{repo_name}/labels/{label_id}';
  static readonly getReplicationAdaptersPath = '/replication/adapters';
  static readonly putRetentionsIdPath = '/retentions/{id}';
  static readonly getRetentionsIdPath = '/retentions/{id}';
  static readonly getScannersPath = '/scanners';
  static readonly getSysteminfoVolumesPath = '/systeminfo/volumes';
  static readonly getStatisticsPath = '/statistics';
  static readonly getReplicationExecutionsIdTasksPath = '/replication/executions/{id}/tasks';
  static readonly postProjectsProjectIdWebhookPoliciesTestPath = '/projects/{project_id}/webhook/policies/test';
  static readonly postUsersPath = '/users';
  static readonly getUsersPath = '/users';
  static readonly getRegistriesIdInfoPath = '/registries/{id}/info';
  static readonly getRetentionsIdExecutionsEidTasksTidPath = '/retentions/{id}/executions/{eid}/tasks/{tid}';
  static readonly getProjectsProjectIdLogsPath = '/projects/{project_id}/logs';
  static readonly postUsergroupsPath = '/usergroups';
  static readonly getUsergroupsPath = '/usergroups';
  static readonly putUsergroupsGroupIdPath = '/usergroups/{group_id}';
  static readonly getUsergroupsGroupIdPath = '/usergroups/{group_id}';
  static readonly deleteUsergroupsGroupIdPath = '/usergroups/{group_id}';
  static readonly getQuotasPath = '/quotas';
  static readonly postChartrepoRepoChartsPath = '/chartrepo/{repo}/charts';
  static readonly getChartrepoRepoChartsPath = '/chartrepo/{repo}/charts';
  static readonly putProjectsProjectIdPath = '/projects/{project_id}';
  static readonly getProjectsProjectIdPath = '/projects/{project_id}';
  static readonly deleteProjectsProjectIdPath = '/projects/{project_id}';
  static readonly getUsersCurrentPermissionsPath = '/users/current/permissions';
  static readonly getUsersCurrentPath = '/users/current';
  static readonly putLabelsIdPath = '/labels/{id}';
  static readonly getLabelsIdPath = '/labels/{id}';
  static readonly deleteLabelsIdPath = '/labels/{id}';
  static readonly putProjectsProjectIdWebhookPoliciesPolicyIdPath = '/projects/{project_id}/webhook/policies/{policy_id}';
  static readonly getProjectsProjectIdWebhookPoliciesPolicyIdPath = '/projects/{project_id}/webhook/policies/{policy_id}';
  static readonly deleteProjectsProjectIdWebhookPoliciesPolicyIdPath = '/projects/{project_id}/webhook/policies/{policy_id}';
  static readonly putSystemScanAllSchedulePath = '/system/scanAll/schedule';
  static readonly postSystemScanAllSchedulePath = '/system/scanAll/schedule';
  static readonly getSystemScanAllSchedulePath = '/system/scanAll/schedule';
  static readonly headProjectsPath = '/projects';
  static readonly postProjectsPath = '/projects';
  static readonly getProjectsPath = '/projects';
  static readonly postProjectsProjectIdMetadatasPath = '/projects/{project_id}/metadatas';
  static readonly getProjectsProjectIdMetadatasPath = '/projects/{project_id}/metadatas';
  static readonly getRepositoriesRepoNameSignaturesPath = '/repositories/{repo_name}/signatures';
  static readonly getLdapGroupsSearchPath = '/ldap/groups/search';
  static readonly putProjectsProjectIdRobotsRobotIdPath = '/projects/{project_id}/robots/{robot_id}';
  static readonly getProjectsProjectIdRobotsRobotIdPath = '/projects/{project_id}/robots/{robot_id}';
  static readonly deleteProjectsProjectIdRobotsRobotIdPath = '/projects/{project_id}/robots/{robot_id}';
  static readonly getRepositoriesRepoNameTagsTagPath = '/repositories/{repo_name}/tags/{tag}';
  static readonly deleteRepositoriesRepoNameTagsTagPath = '/repositories/{repo_name}/tags/{tag}';
  static readonly putUsersUserIdPath = '/users/{user_id}';
  static readonly getUsersUserIdPath = '/users/{user_id}';
  static readonly deleteUsersUserIdPath = '/users/{user_id}';
  static readonly postReplicationPoliciesPath = '/replication/policies';
  static readonly getReplicationPoliciesPath = '/replication/policies';
  static readonly postRetentionsIdExecutionsPath = '/retentions/{id}/executions';
  static readonly getRetentionsIdExecutionsPath = '/retentions/{id}/executions';
  static readonly getProjectsProjectIdSummaryPath = '/projects/{project_id}/summary';
  static readonly getProjectsProjectIdScannerCandidatesPath = '/projects/{project_id}/scanner/candidates';
  static readonly putUsersUserIdSysadminPath = '/users/{user_id}/sysadmin';
  static readonly putUsersUserIdPasswordPath = '/users/{user_id}/password';
  static readonly postProjectsProjectIdWebhookPoliciesPath = '/projects/{project_id}/webhook/policies';
  static readonly getProjectsProjectIdWebhookPoliciesPath = '/projects/{project_id}/webhook/policies';
  static readonly deleteChartrepoRepoChartsNameVersionLabelsIdPath = '/chartrepo/{repo}/charts/{name}/{version}/labels/{id}';
  static readonly getSystemGcPath = '/system/gc';
  static readonly getScansScheduleMetricsPath = '/scans/schedule/metrics';
  static readonly getSystemGcIdPath = '/system/gc/{id}';
  static readonly postReplicationExecutionsPath = '/replication/executions';
  static readonly getReplicationExecutionsPath = '/replication/executions';
  static readonly putSystemCVEWhitelistPath = '/system/CVEWhitelist';
  static readonly getSystemCVEWhitelistPath = '/system/CVEWhitelist';
  static readonly postInternalSyncquotaPath = '/internal/syncquota';
  static readonly postChartrepoChartsPath = '/chartrepo/charts';
  static readonly postRepositoriesRepoNameLabelsPath = '/repositories/{repo_name}/labels';
  static readonly getRepositoriesRepoNameLabelsPath = '/repositories/{repo_name}/labels';
  static readonly getHealthPath = '/health';
  static readonly getChartrepoRepoChartsNameVersionPath = '/chartrepo/{repo}/charts/{name}/{version}';
  static readonly deleteChartrepoRepoChartsNameVersionPath = '/chartrepo/{repo}/charts/{name}/{version}';
  static readonly postRepositoriesRepoNameTagsPath = '/repositories/{repo_name}/tags';
  static readonly getRepositoriesRepoNameTagsPath = '/repositories/{repo_name}/tags';
  static readonly patchRetentionsIdExecutionsEidPath = '/retentions/{id}/executions/{eid}';
  static readonly putRegistriesIdPath = '/registries/{id}';
  static readonly getRegistriesIdPath = '/registries/{id}';
  static readonly deleteRegistriesIdPath = '/registries/{id}';
  static readonly getLdapUsersSearchPath = '/ldap/users/search';
  static readonly getChartrepoHealthPath = '/chartrepo/health';
  static readonly postRetentionsPath = '/retentions';
  static readonly putRepositoriesRepoNamePath = '/repositories/{repo_name}';
  static readonly deleteRepositoriesRepoNamePath = '/repositories/{repo_name}';
  static readonly getScannersRegistrationIdPath = '/scanners/{registration_id}';
  static readonly putProjectsProjectIdMembersMidPath = '/projects/{project_id}/members/{mid}';
  static readonly getProjectsProjectIdMembersMidPath = '/projects/{project_id}/members/{mid}';
  static readonly deleteProjectsProjectIdMembersMidPath = '/projects/{project_id}/members/{mid}';
  static readonly postLdapUsersImportPath = '/ldap/users/import';
  static readonly getSysteminfoGetcertPath = '/systeminfo/getcert';
  static readonly putQuotasIdPath = '/quotas/{id}';
  static readonly getQuotasIdPath = '/quotas/{id}';
  static readonly postProjectsProjectIdImmutabletagrulesPath = '/projects/{project_id}/immutabletagrules';
  static readonly getProjectsProjectIdImmutabletagrulesPath = '/projects/{project_id}/immutabletagrules';
  static readonly putReplicationPoliciesIdPath = '/replication/policies/{id}';
  static readonly getReplicationPoliciesIdPath = '/replication/policies/{id}';
  static readonly deleteReplicationPoliciesIdPath = '/replication/policies/{id}';
  static readonly postRegistriesPath = '/registries';
  static readonly getRegistriesPath = '/registries';
  static readonly postProjectsProjectIdMembersPath = '/projects/{project_id}/members';
  static readonly getProjectsProjectIdMembersPath = '/projects/{project_id}/members';
  static readonly putInternalSwitchquotaPath = '/internal/switchquota';
  static readonly putConfigurationsPath = '/configurations';
  static readonly getConfigurationsPath = '/configurations';
  static readonly postSystemOidcPingPath = '/system/oidc/ping';
  static readonly postScannersPingPath = '/scanners/ping';
  static readonly postRepositoriesRepoNameTagsTagScanPath = '/repositories/{repo_name}/tags/{tag}/scan';
  static readonly getSysteminfoPath = '/systeminfo';
  static readonly getRepositoriesPath = '/repositories';
  static readonly getReplicationExecutionsIdTasksTaskIdLogPath = '/replication/executions/{id}/tasks/{task_id}/log';
  static readonly deleteRepositoriesRepoNameTagsTagLabelsLabelIdPath = '/repositories/{repo_name}/tags/{tag}/labels/{label_id}';
  static readonly getScannersRegistrationIdMetadataPath = '/scanners/{registration_id}/metadata';
  static readonly postInternalSyncregistryPath = '/internal/syncregistry';
  static readonly getProjectsProjectIdWebhookLasttriggerPath = '/projects/{project_id}/webhook/lasttrigger';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * This endpoint let user generate a new CLI secret for himself.  This API only works when auth mode is set to 'OIDC'.
   * Once this API returns with successful status, the old secret will be invalid, as there will be only one CLI secret
   * for a user.
   * @param params The `ProductsService.PutUsersUserIdCliSecretParams` containing the following parameters:
   *
   * - `user_id`: User ID
   *
   * - `input_secret`: JSON object that includes the new secret
   */
  putUsersUserIdCliSecretResponse(params: ProductsService.PutUsersUserIdCliSecretParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.inputSecret;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/users/${params.userId}/cli_secret`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint let user generate a new CLI secret for himself.  This API only works when auth mode is set to 'OIDC'.
   * Once this API returns with successful status, the old secret will be invalid, as there will be only one CLI secret
   * for a user.
   * @param params The `ProductsService.PutUsersUserIdCliSecretParams` containing the following parameters:
   *
   * - `user_id`: User ID
   *
   * - `input_secret`: JSON object that includes the new secret
   */
  putUsersUserIdCliSecret(params: ProductsService.PutUsersUserIdCliSecretParams): __Observable<null> {
    return this.putUsersUserIdCliSecretResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for update gc schedule.
   * @param schedule Updates of gc's schedule.
   */
  putSystemGcScheduleResponse(schedule: AdminJobSchedule): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = schedule;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/system/gc/schedule`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for update gc schedule.
   * @param schedule Updates of gc's schedule.
   */
  putSystemGcSchedule(schedule: AdminJobSchedule): __Observable<null> {
    return this.putSystemGcScheduleResponse(schedule).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for update gc schedule.
   * @param schedule Updates of gc's schedule.
   */
  postSystemGcScheduleResponse(schedule: AdminJobSchedule): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = schedule;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/system/gc/schedule`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for update gc schedule.
   * @param schedule Updates of gc's schedule.
   */
  postSystemGcSchedule(schedule: AdminJobSchedule): __Observable<null> {
    return this.postSystemGcScheduleResponse(schedule).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for get schedule of gc job.
   * @return Get gc's schedule.
   */
  getSystemGcScheduleResponse(): __Observable<__StrictHttpResponse<AdminJobSchedule>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/system/gc/schedule`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AdminJobSchedule>;
      })
    );
  }
  /**
   * This endpoint is for get schedule of gc job.
   * @return Get gc's schedule.
   */
  getSystemGcSchedule(): __Observable<AdminJobSchedule> {
    return this.getSystemGcScheduleResponse().pipe(
      __map(_r => _r.body as AdminJobSchedule)
    );
  }

  /**
   * Mark label to the specified chart version.
   * @param params The `ProductsService.PostChartrepoRepoChartsNameVersionLabelsParams` containing the following parameters:
   *
   * - `version`: The chart version
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   *
   * - `label`: The label being marked to the chart version
   */
  postChartrepoRepoChartsNameVersionLabelsResponse(params: ProductsService.PostChartrepoRepoChartsNameVersionLabelsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    __body = params.label;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/chartrepo/${params.repo}/charts/${params.name}/${params.version}/labels`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Mark label to the specified chart version.
   * @param params The `ProductsService.PostChartrepoRepoChartsNameVersionLabelsParams` containing the following parameters:
   *
   * - `version`: The chart version
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   *
   * - `label`: The label being marked to the chart version
   */
  postChartrepoRepoChartsNameVersionLabels(params: ProductsService.PostChartrepoRepoChartsNameVersionLabelsParams): __Observable<null> {
    return this.postChartrepoRepoChartsNameVersionLabelsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Return the attahced labels of the specified chart version.
   * @param params The `ProductsService.GetChartrepoRepoChartsNameVersionLabelsParams` containing the following parameters:
   *
   * - `version`: The chart version
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   */
  getChartrepoRepoChartsNameVersionLabelsResponse(params: ProductsService.GetChartrepoRepoChartsNameVersionLabelsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/chartrepo/${params.repo}/charts/${params.name}/${params.version}/labels`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Return the attahced labels of the specified chart version.
   * @param params The `ProductsService.GetChartrepoRepoChartsNameVersionLabelsParams` containing the following parameters:
   *
   * - `version`: The chart version
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   */
  getChartrepoRepoChartsNameVersionLabels(params: ProductsService.GetChartrepoRepoChartsNameVersionLabelsParams): __Observable<null> {
    return this.getChartrepoRepoChartsNameVersionLabelsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get the metrics of the latest scan all process
   * @return OK
   */
  getScansAllMetricsResponse(): __Observable<__StrictHttpResponse<Stats>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/scans/all/metrics`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Stats>;
      })
    );
  }
  /**
   * Get the metrics of the latest scan all process
   * @return OK
   */
  getScansAllMetrics(): __Observable<Stats> {
    return this.getScansAllMetricsResponse().pipe(
      __map(_r => _r.body as Stats)
    );
  }

  /**
   * This endpoint let user get the resources that the label is referenced by. Only the replication policies are returned for now.
   * @param id Label ID
   * @return Get successfully.
   */
  getLabelsIdResourcesResponse(id: number): __Observable<__StrictHttpResponse<Resource>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/labels/${id}/resources`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Resource>;
      })
    );
  }
  /**
   * This endpoint let user get the resources that the label is referenced by. Only the replication policies are returned for now.
   * @param id Label ID
   * @return Get successfully.
   */
  getLabelsIdResources(id: number): __Observable<Resource> {
    return this.getLabelsIdResourcesResponse(id).pipe(
      __map(_r => _r.body as Resource)
    );
  }

  /**
   * This endpoint is to search the users by username.
   * @param params The `ProductsService.GetUsersSearchParams` containing the following parameters:
   *
   * - `username`: Username for filtering results.
   *
   * - `page_size`: The size of per page.
   *
   * - `page`: The page number, default is 1.
   *
   * @return Search users by username, email successfully.
   */
  getUsersSearchResponse(params: ProductsService.GetUsersSearchParams): __Observable<__StrictHttpResponse<Array<UserSearch>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.username != null) __params = __params.set('username', params.username.toString());
    if (params.pageSize != null) __params = __params.set('page_size', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserSearch>>;
      })
    );
  }
  /**
   * This endpoint is to search the users by username.
   * @param params The `ProductsService.GetUsersSearchParams` containing the following parameters:
   *
   * - `username`: Username for filtering results.
   *
   * - `page_size`: The size of per page.
   *
   * - `page`: The page number, default is 1.
   *
   * @return Search users by username, email successfully.
   */
  getUsersSearch(params: ProductsService.GetUsersSearchParams): __Observable<Array<UserSearch>> {
    return this.getUsersSearchResponse(params).pipe(
      __map(_r => _r.body as Array<UserSearch>)
    );
  }

  /**
   * This endpoint aims to let users see the most popular public repositories
   * @param count The number of the requested public repositories, default is 10 if not provided.
   * @return Get popular repositories successfully.
   */
  getRepositoriesTopResponse(count?: number): __Observable<__StrictHttpResponse<Array<Repository>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (count != null) __params = __params.set('count', count.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/repositories/top`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Repository>>;
      })
    );
  }
  /**
   * This endpoint aims to let users see the most popular public repositories
   * @param count The number of the requested public repositories, default is 10 if not provided.
   * @return Get popular repositories successfully.
   */
  getRepositoriesTop(count?: number): __Observable<Array<Repository>> {
    return this.getRepositoriesTopResponse(count).pipe(
      __map(_r => _r.body as Array<Repository>)
    );
  }

  /**
   * This endpoint is for user to stop one execution of the replication.
   * @param id The execution ID.
   */
  putReplicationExecutionsIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/replication/executions/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for user to stop one execution of the replication.
   * @param id The execution ID.
   */
  putReplicationExecutionsId(id: number): __Observable<null> {
    return this.putReplicationExecutionsIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for user to get one execution of the replication.
   * @param id The execution ID.
   * @return Success.
   */
  getReplicationExecutionsIdResponse(id: number): __Observable<__StrictHttpResponse<ReplicationExecution>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/replication/executions/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReplicationExecution>;
      })
    );
  }
  /**
   * This endpoint is for user to get one execution of the replication.
   * @param id The execution ID.
   * @return Success.
   */
  getReplicationExecutionsId(id: number): __Observable<ReplicationExecution> {
    return this.getReplicationExecutionsIdResponse(id).pipe(
      __map(_r => _r.body as ReplicationExecution)
    );
  }

  /**
   * This endpoint let user creates a label.
   * @param label The json object of label.
   */
  postLabelsResponse(label: Label): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = label;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/labels`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint let user creates a label.
   * @param label The json object of label.
   */
  postLabels(label: Label): __Observable<null> {
    return this.postLabelsResponse(label).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint let user list labels by name, scope and project_id
   * @param params The `ProductsService.GetLabelsParams` containing the following parameters:
   *
   * - `scope`: The label scope. Valid values are g and p. g for global labels and p for project labels.
   *
   * - `project_id`: Relevant project ID, required when scope is p.
   *
   * - `page_size`: The size of per page.
   *
   * - `page`: The page nubmer.
   *
   * - `name`: The label name.
   *
   * @return Get successfully.
   */
  getLabelsResponse(params: ProductsService.GetLabelsParams): __Observable<__StrictHttpResponse<Array<Label>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.scope != null) __params = __params.set('scope', params.scope.toString());
    if (params.projectId != null) __params = __params.set('project_id', params.projectId.toString());
    if (params.pageSize != null) __params = __params.set('page_size', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/labels`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Label>>;
      })
    );
  }
  /**
   * This endpoint let user list labels by name, scope and project_id
   * @param params The `ProductsService.GetLabelsParams` containing the following parameters:
   *
   * - `scope`: The label scope. Valid values are g and p. g for global labels and p for project labels.
   *
   * - `project_id`: Relevant project ID, required when scope is p.
   *
   * - `page_size`: The size of per page.
   *
   * - `page`: The page nubmer.
   *
   * - `name`: The label name.
   *
   * @return Get successfully.
   */
  getLabels(params: ProductsService.GetLabelsParams): __Observable<Array<Label>> {
    return this.getLabelsResponse(params).pipe(
      __map(_r => _r.body as Array<Label>)
    );
  }

  /**
   * This endpoint aims to retreive manifests from a relevant repository.
   * @param params The `ProductsService.GetRepositoriesRepoNameTagsTagManifestParams` containing the following parameters:
   *
   * - `tag`: Tag name
   *
   * - `repo_name`: Repository name
   *
   * - `version`: The version of manifest, valid value are "v1" and "v2", default is "v2"
   *
   * @return Retrieved manifests from a relevant repository successfully.
   */
  getRepositoriesRepoNameTagsTagManifestResponse(params: ProductsService.GetRepositoriesRepoNameTagsTagManifestParams): __Observable<__StrictHttpResponse<Manifest>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.version != null) __params = __params.set('version', params.version.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/repositories/${params.repoName}/tags/${params.tag}/manifest`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Manifest>;
      })
    );
  }
  /**
   * This endpoint aims to retreive manifests from a relevant repository.
   * @param params The `ProductsService.GetRepositoriesRepoNameTagsTagManifestParams` containing the following parameters:
   *
   * - `tag`: Tag name
   *
   * - `repo_name`: Repository name
   *
   * - `version`: The version of manifest, valid value are "v1" and "v2", default is "v2"
   *
   * @return Retrieved manifests from a relevant repository successfully.
   */
  getRepositoriesRepoNameTagsTagManifest(params: ProductsService.GetRepositoriesRepoNameTagsTagManifestParams): __Observable<Manifest> {
    return this.getRepositoriesRepoNameTagsTagManifestResponse(params).pipe(
      __map(_r => _r.body as Manifest)
    );
  }

  /**
   * This endpoint let user list namespaces of registry according to query.
   * @param params The `ProductsService.GetRegistriesIdNamespaceParams` containing the following parameters:
   *
   * - `id`: The registry ID.
   *
   * - `name`: The name of namespace.
   *
   * @return Success
   */
  getRegistriesIdNamespaceResponse(params: ProductsService.GetRegistriesIdNamespaceParams): __Observable<__StrictHttpResponse<Array<Namespace>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/registries/${params.id}/namespace`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Namespace>>;
      })
    );
  }
  /**
   * This endpoint let user list namespaces of registry according to query.
   * @param params The `ProductsService.GetRegistriesIdNamespaceParams` containing the following parameters:
   *
   * - `id`: The registry ID.
   *
   * - `name`: The name of namespace.
   *
   * @return Success
   */
  getRegistriesIdNamespace(params: ProductsService.GetRegistriesIdNamespaceParams): __Observable<Array<Namespace>> {
    return this.getRegistriesIdNamespaceResponse(params).pipe(
      __map(_r => _r.body as Array<Namespace>)
    );
  }

  /**
   * Get all the versions of the specified chart
   * @param params The `ProductsService.GetChartrepoRepoChartsNameParams` containing the following parameters:
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   *
   * @return Retrieved all versions of the specified chart
   */
  getChartrepoRepoChartsNameResponse(params: ProductsService.GetChartrepoRepoChartsNameParams): __Observable<__StrictHttpResponse<ChartVersions>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/chartrepo/${params.repo}/charts/${params.name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChartVersions>;
      })
    );
  }
  /**
   * Get all the versions of the specified chart
   * @param params The `ProductsService.GetChartrepoRepoChartsNameParams` containing the following parameters:
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   *
   * @return Retrieved all versions of the specified chart
   */
  getChartrepoRepoChartsName(params: ProductsService.GetChartrepoRepoChartsNameParams): __Observable<ChartVersions> {
    return this.getChartrepoRepoChartsNameResponse(params).pipe(
      __map(_r => _r.body as ChartVersions)
    );
  }

  /**
   * Delete all the versions of the specified chart
   * @param params The `ProductsService.DeleteChartrepoRepoChartsNameParams` containing the following parameters:
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   */
  deleteChartrepoRepoChartsNameResponse(params: ProductsService.DeleteChartrepoRepoChartsNameParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/chartrepo/${params.repo}/charts/${params.name}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Delete all the versions of the specified chart
   * @param params The `ProductsService.DeleteChartrepoRepoChartsNameParams` containing the following parameters:
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   */
  deleteChartrepoRepoChartsName(params: ProductsService.DeleteChartrepoRepoChartsNameParams): __Observable<null> {
    return this.deleteChartrepoRepoChartsNameResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Add a label to the image.
   * @param params The `ProductsService.PostRepositoriesRepoNameTagsTagLabelsParams` containing the following parameters:
   *
   * - `tag`: The tag of the image.
   *
   * - `repo_name`: The name of repository.
   *
   * - `label`: Only the ID property is required.
   */
  postRepositoriesRepoNameTagsTagLabelsResponse(params: ProductsService.PostRepositoriesRepoNameTagsTagLabelsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.label;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/repositories/${params.repoName}/tags/${params.tag}/labels`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Add a label to the image.
   * @param params The `ProductsService.PostRepositoriesRepoNameTagsTagLabelsParams` containing the following parameters:
   *
   * - `tag`: The tag of the image.
   *
   * - `repo_name`: The name of repository.
   *
   * - `label`: Only the ID property is required.
   */
  postRepositoriesRepoNameTagsTagLabels(params: ProductsService.PostRepositoriesRepoNameTagsTagLabelsParams): __Observable<null> {
    return this.postRepositoriesRepoNameTagsTagLabelsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get labels of an image specified by the repo_name and tag.
   * @param params The `ProductsService.GetRepositoriesRepoNameTagsTagLabelsParams` containing the following parameters:
   *
   * - `tag`: The tag of the image.
   *
   * - `repo_name`: The name of repository.
   *
   * @return Successfully.
   */
  getRepositoriesRepoNameTagsTagLabelsResponse(params: ProductsService.GetRepositoriesRepoNameTagsTagLabelsParams): __Observable<__StrictHttpResponse<Array<Label>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/repositories/${params.repoName}/tags/${params.tag}/labels`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Label>>;
      })
    );
  }
  /**
   * Get labels of an image specified by the repo_name and tag.
   * @param params The `ProductsService.GetRepositoriesRepoNameTagsTagLabelsParams` containing the following parameters:
   *
   * - `tag`: The tag of the image.
   *
   * - `repo_name`: The name of repository.
   *
   * @return Successfully.
   */
  getRepositoriesRepoNameTagsTagLabels(params: ProductsService.GetRepositoriesRepoNameTagsTagLabelsParams): __Observable<Array<Label>> {
    return this.getRepositoriesRepoNameTagsTagLabelsResponse(params).pipe(
      __map(_r => _r.body as Array<Label>)
    );
  }

  /**
   * This endpoint returns webhook jobs of a project.
   * @param params The `ProductsService.GetProjectsProjectIdWebhookJobsParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `policy_id`: The policy ID.
   *
   * @return List project webhook jobs successfully.
   */
  getProjectsProjectIdWebhookJobsResponse(params: ProductsService.GetProjectsProjectIdWebhookJobsParams): __Observable<__StrictHttpResponse<Array<WebhookJob>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.policyId != null) __params = __params.set('policy_id', params.policyId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/webhook/jobs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<WebhookJob>>;
      })
    );
  }
  /**
   * This endpoint returns webhook jobs of a project.
   * @param params The `ProductsService.GetProjectsProjectIdWebhookJobsParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `policy_id`: The policy ID.
   *
   * @return List project webhook jobs successfully.
   */
  getProjectsProjectIdWebhookJobs(params: ProductsService.GetProjectsProjectIdWebhookJobsParams): __Observable<Array<WebhookJob>> {
    return this.getProjectsProjectIdWebhookJobsResponse(params).pipe(
      __map(_r => _r.body as Array<WebhookJob>)
    );
  }

  /**
   * This endpoint ping the available ldap service for test related configuration parameters.
   * @param ldapconf ldap configuration. support input ldap service configuration. If it's a empty request, will load current configuration from the system.
   */
  postLdapPingResponse(ldapconf?: LdapConf): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ldapconf;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ldap/ping`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint ping the available ldap service for test related configuration parameters.
   * @param ldapconf ldap configuration. support input ldap service configuration. If it's a empty request, will load current configuration from the system.
   */
  postLdapPing(ldapconf?: LdapConf): __Observable<null> {
    return this.postLdapPingResponse(ldapconf).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint checks status of a registry, the registry can be given by ID or URL (together with credential)
   * @param registry Registry to ping.
   */
  postRegistriesPingResponse(registry: Registry): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registry;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/registries/ping`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint checks status of a registry, the registry can be given by ID or URL (together with credential)
   * @param registry Registry to ping.
   */
  postRegistriesPing(registry: Registry): __Observable<null> {
    return this.postRegistriesPingResponse(registry).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ProductsService.PutProjectsProjectIdImmutabletagrulesIdParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `id`: Immutable tag rule ID.
   *
   * - `immutabletagrule`:
   */
  putProjectsProjectIdImmutabletagrulesIdResponse(params: ProductsService.PutProjectsProjectIdImmutabletagrulesIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.immutabletagrule;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.projectId}/immutabletagrules/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ProductsService.PutProjectsProjectIdImmutabletagrulesIdParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `id`: Immutable tag rule ID.
   *
   * - `immutabletagrule`:
   */
  putProjectsProjectIdImmutabletagrulesId(params: ProductsService.PutProjectsProjectIdImmutabletagrulesIdParams): __Observable<null> {
    return this.putProjectsProjectIdImmutabletagrulesIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `ProductsService.DeleteProjectsProjectIdImmutabletagrulesIdParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `id`: Immutable tag rule ID.
   */
  deleteProjectsProjectIdImmutabletagrulesIdResponse(params: ProductsService.DeleteProjectsProjectIdImmutabletagrulesIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${params.projectId}/immutabletagrules/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ProductsService.DeleteProjectsProjectIdImmutabletagrulesIdParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `id`: Immutable tag rule ID.
   */
  deleteProjectsProjectIdImmutabletagrulesId(params: ProductsService.DeleteProjectsProjectIdImmutabletagrulesIdParams): __Observable<null> {
    return this.deleteProjectsProjectIdImmutabletagrulesIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Test connection and authentication with email server.
   * @param settings Email server settings, if some of the settings are not assigned, they will be read from system configuration.
   */
  postEmailPingResponse(settings?: EmailServerSetting): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = settings;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/email/ping`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Test connection and authentication with email server.
   * @param settings Email server settings, if some of the settings are not assigned, they will be read from system configuration.
   */
  postEmailPing(settings?: EmailServerSetting): __Observable<null> {
    return this.postEmailPingResponse(settings).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Create a robot account for project
   * @param params The `ProductsService.PostProjectsProjectIdRobotsParams` containing the following parameters:
   *
   * - `robot`: Request body of creating a robot account.
   *
   * - `project_id`: Relevant project ID.
   *
   * @return Project member created successfully.
   */
  postProjectsProjectIdRobotsResponse(params: ProductsService.PostProjectsProjectIdRobotsParams): __Observable<__StrictHttpResponse<RobotAccountPostRep>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.robot;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects/${params.projectId}/robots`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RobotAccountPostRep>;
      })
    );
  }
  /**
   * Create a robot account for project
   * @param params The `ProductsService.PostProjectsProjectIdRobotsParams` containing the following parameters:
   *
   * - `robot`: Request body of creating a robot account.
   *
   * - `project_id`: Relevant project ID.
   *
   * @return Project member created successfully.
   */
  postProjectsProjectIdRobots(params: ProductsService.PostProjectsProjectIdRobotsParams): __Observable<RobotAccountPostRep> {
    return this.postProjectsProjectIdRobotsResponse(params).pipe(
      __map(_r => _r.body as RobotAccountPostRep)
    );
  }

  /**
   * Get all robot accounts of specified project
   * @param project_id Relevant project ID.
   * @return Get project robot accounts successfully.
   */
  getProjectsProjectIdRobotsResponse(projectId: number): __Observable<__StrictHttpResponse<Array<RobotAccount>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${projectId}/robots`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RobotAccount>>;
      })
    );
  }
  /**
   * Get all robot accounts of specified project
   * @param project_id Relevant project ID.
   * @return Get project robot accounts successfully.
   */
  getProjectsProjectIdRobots(projectId: number): __Observable<Array<RobotAccount>> {
    return this.getProjectsProjectIdRobotsResponse(projectId).pipe(
      __map(_r => _r.body as Array<RobotAccount>)
    );
  }

  /**
   * This endpoint let user get gc job logs filtered by specific ID.
   * @param id Relevant job ID
   * @return Get successfully.
   */
  getSystemGcIdLogResponse(id: number): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/system/gc/${id}/log`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * This endpoint let user get gc job logs filtered by specific ID.
   * @param id Relevant job ID
   * @return Get successfully.
   */
  getSystemGcIdLog(id: number): __Observable<string> {
    return this.getSystemGcIdLogResponse(id).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * Get Retention Metadatas.
   * @return Get Retention Metadatas successfully.
   */
  getRetentionsMetadatasResponse(): __Observable<__StrictHttpResponse<RetentionMetadata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/retentions/metadatas`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RetentionMetadata>;
      })
    );
  }
  /**
   * Get Retention Metadatas.
   * @return Get Retention Metadatas successfully.
   */
  getRetentionsMetadatas(): __Observable<RetentionMetadata> {
    return this.getRetentionsMetadatasResponse().pipe(
      __map(_r => _r.body as RetentionMetadata)
    );
  }

  /**
   * Get the log text stream for the given artifact and scan action.
   * @param params The `ProductsService.GetRepositoriesRepoNameTagsTagScanUuidLogParams` containing the following parameters:
   *
   * - `uuid`: the scan unique identifier
   *
   * - `tag`: Tag name
   *
   * - `repo_name`: Repository name
   *
   * @return OK
   */
  getRepositoriesRepoNameTagsTagScanUuidLogResponse(params: ProductsService.GetRepositoriesRepoNameTagsTagScanUuidLogParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/repositories/${params.repoName}/tags/${params.tag}/scan/${params.uuid}/log`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * Get the log text stream for the given artifact and scan action.
   * @param params The `ProductsService.GetRepositoriesRepoNameTagsTagScanUuidLogParams` containing the following parameters:
   *
   * - `uuid`: the scan unique identifier
   *
   * - `tag`: Tag name
   *
   * - `repo_name`: Repository name
   *
   * @return OK
   */
  getRepositoriesRepoNameTagsTagScanUuidLog(params: ProductsService.GetRepositoriesRepoNameTagsTagScanUuidLogParams): __Observable<string> {
    return this.getRepositoriesRepoNameTagsTagScanUuidLogResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * The Search endpoint returns information about the projects ,repositories  and helm charts offered at public status or related to the current logged in user. The response includes the project, repository list and charts in a proper display order.
   * @param q Search parameter for project and repository name.
   * @return An array of search results
   */
  getSearchResponse(q: string): __Observable<__StrictHttpResponse<Array<Search>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (q != null) __params = __params.set('q', q.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Search>>;
      })
    );
  }
  /**
   * The Search endpoint returns information about the projects ,repositories  and helm charts offered at public status or related to the current logged in user. The response includes the project, repository list and charts in a proper display order.
   * @param q Search parameter for project and repository name.
   * @return An array of search results
   */
  getSearch(q: string): __Observable<Array<Search>> {
    return this.getSearchResponse(q).pipe(
      __map(_r => _r.body as Array<Search>)
    );
  }

  /**
   * This endpoint let user see the recent operation logs of the projects which he is member of
   * @param params The `ProductsService.GetLogsParams` containing the following parameters:
   *
   * - `username`: Username of the operator.
   *
   * - `tag`: The name of tag
   *
   * - `repository`: The name of repository
   *
   * - `page_size`: The size of per page, default is 10, maximum is 100.
   *
   * - `page`: The page number, default is 1.
   *
   * - `operation`: The operation
   *
   * - `end_timestamp`: The end timestamp
   *
   * - `begin_timestamp`: The begin timestamp
   *
   * @return Get the required logs successfully.
   */
  getLogsResponse(params: ProductsService.GetLogsParams): __Observable<__StrictHttpResponse<Array<AccessLog>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.username != null) __params = __params.set('username', params.username.toString());
    if (params.tag != null) __params = __params.set('tag', params.tag.toString());
    if (params.repository != null) __params = __params.set('repository', params.repository.toString());
    if (params.pageSize != null) __params = __params.set('page_size', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.operation != null) __params = __params.set('operation', params.operation.toString());
    if (params.endTimestamp != null) __params = __params.set('end_timestamp', params.endTimestamp.toString());
    if (params.beginTimestamp != null) __params = __params.set('begin_timestamp', params.beginTimestamp.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/logs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AccessLog>>;
      })
    );
  }
  /**
   * This endpoint let user see the recent operation logs of the projects which he is member of
   * @param params The `ProductsService.GetLogsParams` containing the following parameters:
   *
   * - `username`: Username of the operator.
   *
   * - `tag`: The name of tag
   *
   * - `repository`: The name of repository
   *
   * - `page_size`: The size of per page, default is 10, maximum is 100.
   *
   * - `page`: The page number, default is 1.
   *
   * - `operation`: The operation
   *
   * - `end_timestamp`: The end timestamp
   *
   * - `begin_timestamp`: The begin timestamp
   *
   * @return Get the required logs successfully.
   */
  getLogs(params: ProductsService.GetLogsParams): __Observable<Array<AccessLog>> {
    return this.getLogsResponse(params).pipe(
      __map(_r => _r.body as Array<AccessLog>)
    );
  }

  /**
   * Upload a provance file to the specified project. The provance file should be targeted for an existing chart file.
   * @param params The `ProductsService.PostChartrepoRepoProvParams` containing the following parameters:
   *
   * - `repo`: The project name
   *
   * - `prov`: The provance file
   */
  postChartrepoRepoProvResponse(params: ProductsService.PostChartrepoRepoProvParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.prov != null) { __formData.append('prov', params.prov as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/chartrepo/${params.repo}/prov`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Upload a provance file to the specified project. The provance file should be targeted for an existing chart file.
   * @param params The `ProductsService.PostChartrepoRepoProvParams` containing the following parameters:
   *
   * - `repo`: The project name
   *
   * - `prov`: The provance file
   */
  postChartrepoRepoProv(params: ProductsService.PostChartrepoRepoProvParams): __Observable<null> {
    return this.postChartrepoRepoProvResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is aimed to update the metadata of a project.
   * @param params The `ProductsService.PutProjectsProjectIdMetadatasMetaNameParams` containing the following parameters:
   *
   * - `project_id`: The ID of project.
   *
   * - `meta_name`: The name of metadat.
   */
  putProjectsProjectIdMetadatasMetaNameResponse(params: ProductsService.PutProjectsProjectIdMetadatasMetaNameParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.projectId}/metadatas/${params.metaName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is aimed to update the metadata of a project.
   * @param params The `ProductsService.PutProjectsProjectIdMetadatasMetaNameParams` containing the following parameters:
   *
   * - `project_id`: The ID of project.
   *
   * - `meta_name`: The name of metadat.
   */
  putProjectsProjectIdMetadatasMetaName(params: ProductsService.PutProjectsProjectIdMetadatasMetaNameParams): __Observable<null> {
    return this.putProjectsProjectIdMetadatasMetaNameResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint returns specified metadata of a project.
   * @param params The `ProductsService.GetProjectsProjectIdMetadatasMetaNameParams` containing the following parameters:
   *
   * - `project_id`: Project ID for filtering results.
   *
   * - `meta_name`: The name of metadat.
   *
   * @return Get metadata successfully.
   */
  getProjectsProjectIdMetadatasMetaNameResponse(params: ProductsService.GetProjectsProjectIdMetadatasMetaNameParams): __Observable<__StrictHttpResponse<ProjectMetadata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/metadatas/${params.metaName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProjectMetadata>;
      })
    );
  }
  /**
   * This endpoint returns specified metadata of a project.
   * @param params The `ProductsService.GetProjectsProjectIdMetadatasMetaNameParams` containing the following parameters:
   *
   * - `project_id`: Project ID for filtering results.
   *
   * - `meta_name`: The name of metadat.
   *
   * @return Get metadata successfully.
   */
  getProjectsProjectIdMetadatasMetaName(params: ProductsService.GetProjectsProjectIdMetadatasMetaNameParams): __Observable<ProjectMetadata> {
    return this.getProjectsProjectIdMetadatasMetaNameResponse(params).pipe(
      __map(_r => _r.body as ProjectMetadata)
    );
  }

  /**
   * This endpoint is aimed to delete metadata of a project.
   * @param params The `ProductsService.DeleteProjectsProjectIdMetadatasMetaNameParams` containing the following parameters:
   *
   * - `project_id`: The ID of project.
   *
   * - `meta_name`: The name of metadat.
   */
  deleteProjectsProjectIdMetadatasMetaNameResponse(params: ProductsService.DeleteProjectsProjectIdMetadatasMetaNameParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${params.projectId}/metadatas/${params.metaName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is aimed to delete metadata of a project.
   * @param params The `ProductsService.DeleteProjectsProjectIdMetadatasMetaNameParams` containing the following parameters:
   *
   * - `project_id`: The ID of project.
   *
   * - `meta_name`: The name of metadat.
   */
  deleteProjectsProjectIdMetadatasMetaName(params: ProductsService.DeleteProjectsProjectIdMetadatasMetaNameParams): __Observable<null> {
    return this.deleteProjectsProjectIdMetadatasMetaNameResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get the scanner registration of the specified project. If no scanner registration is configured for the specified project, the system default scanner registration will be returned.
   * @param project_id The project identifier.
   * @return The details of the scanner registration.
   */
  getProjectsProjectIdScannerResponse(projectId: number): __Observable<__StrictHttpResponse<ScannerRegistration>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${projectId}/scanner`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ScannerRegistration>;
      })
    );
  }
  /**
   * Get the scanner registration of the specified project. If no scanner registration is configured for the specified project, the system default scanner registration will be returned.
   * @param project_id The project identifier.
   * @return The details of the scanner registration.
   */
  getProjectsProjectIdScanner(projectId: number): __Observable<ScannerRegistration> {
    return this.getProjectsProjectIdScannerResponse(projectId).pipe(
      __map(_r => _r.body as ScannerRegistration)
    );
  }

  /**
   * Get Retention job tasks, each repository as a task.
   * @param params The `ProductsService.GetRetentionsIdExecutionsEidTasksParams` containing the following parameters:
   *
   * - `id`: Retention ID.
   *
   * - `eid`: Retention execution ID.
   *
   * @return Get Retention job tasks successfully.
   */
  getRetentionsIdExecutionsEidTasksResponse(params: ProductsService.GetRetentionsIdExecutionsEidTasksParams): __Observable<__StrictHttpResponse<Array<RetentionExecutionTask>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/retentions/${params.id}/executions/${params.eid}/tasks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RetentionExecutionTask>>;
      })
    );
  }
  /**
   * Get Retention job tasks, each repository as a task.
   * @param params The `ProductsService.GetRetentionsIdExecutionsEidTasksParams` containing the following parameters:
   *
   * - `id`: Retention ID.
   *
   * - `eid`: Retention execution ID.
   *
   * @return Get Retention job tasks successfully.
   */
  getRetentionsIdExecutionsEidTasks(params: ProductsService.GetRetentionsIdExecutionsEidTasksParams): __Observable<Array<RetentionExecutionTask>> {
    return this.getRetentionsIdExecutionsEidTasksResponse(params).pipe(
      __map(_r => _r.body as Array<RetentionExecutionTask>)
    );
  }

  /**
   * Delete the label from the repository specified by the repo_name.
   * @param params The `ProductsService.DeleteRepositoriesRepoNameLabelsLabelIdParams` containing the following parameters:
   *
   * - `repo_name`: The name of repository.
   *
   * - `label_id`: The ID of label.
   */
  deleteRepositoriesRepoNameLabelsLabelIdResponse(params: ProductsService.DeleteRepositoriesRepoNameLabelsLabelIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/repositories/${params.repoName}/labels/${params.labelId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Delete the label from the repository specified by the repo_name.
   * @param params The `ProductsService.DeleteRepositoriesRepoNameLabelsLabelIdParams` containing the following parameters:
   *
   * - `repo_name`: The name of repository.
   *
   * - `label_id`: The ID of label.
   */
  deleteRepositoriesRepoNameLabelsLabelId(params: ProductsService.DeleteRepositoriesRepoNameLabelsLabelIdParams): __Observable<null> {
    return this.deleteRepositoriesRepoNameLabelsLabelIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint let user list supported adapters.
   * @return Success.
   */
  getReplicationAdaptersResponse(): __Observable<__StrictHttpResponse<Array<string>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/replication/adapters`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<string>>;
      })
    );
  }
  /**
   * This endpoint let user list supported adapters.
   * @return Success.
   */
  getReplicationAdapters(): __Observable<Array<string>> {
    return this.getReplicationAdaptersResponse().pipe(
      __map(_r => _r.body as Array<string>)
    );
  }

  /**
   * Update Retention Policy, you can reference metadatas API for the policy model.
   * You can check project metadatas to find whether a retention policy is already binded.
   * This method should only be called when retention policy has already binded to project.
   * @param params The `ProductsService.PutRetentionsIdParams` containing the following parameters:
   *
   * - `policy`:
   *
   * - `id`: Retention ID.
   */
  putRetentionsIdResponse(params: ProductsService.PutRetentionsIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.policy;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/retentions/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Update Retention Policy, you can reference metadatas API for the policy model.
   * You can check project metadatas to find whether a retention policy is already binded.
   * This method should only be called when retention policy has already binded to project.
   * @param params The `ProductsService.PutRetentionsIdParams` containing the following parameters:
   *
   * - `policy`:
   *
   * - `id`: Retention ID.
   */
  putRetentionsId(params: ProductsService.PutRetentionsIdParams): __Observable<null> {
    return this.putRetentionsIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get Retention Policy.
   * @param id Retention ID.
   * @return Get Retention Policy successfully.
   */
  getRetentionsIdResponse(id: number): __Observable<__StrictHttpResponse<RetentionPolicy>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/retentions/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RetentionPolicy>;
      })
    );
  }
  /**
   * Get Retention Policy.
   * @param id Retention ID.
   * @return Get Retention Policy successfully.
   */
  getRetentionsId(id: number): __Observable<RetentionPolicy> {
    return this.getRetentionsIdResponse(id).pipe(
      __map(_r => _r.body as RetentionPolicy)
    );
  }

  /**
   * Returns a list of currently configured scanner registrations.
   * @return A list of scanner registrations.
   */
  getScannersResponse(): __Observable<__StrictHttpResponse<Array<ScannerRegistration>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/scanners`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ScannerRegistration>>;
      })
    );
  }
  /**
   * Returns a list of currently configured scanner registrations.
   * @return A list of scanner registrations.
   */
  getScanners(): __Observable<Array<ScannerRegistration>> {
    return this.getScannersResponse().pipe(
      __map(_r => _r.body as Array<ScannerRegistration>)
    );
  }

  /**
   * This endpoint is for retrieving system volume info that only provides for admin user.
   * @return Get system volumes successfully.
   */
  getSysteminfoVolumesResponse(): __Observable<__StrictHttpResponse<SystemInfo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systeminfo/volumes`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SystemInfo>;
      })
    );
  }
  /**
   * This endpoint is for retrieving system volume info that only provides for admin user.
   * @return Get system volumes successfully.
   */
  getSysteminfoVolumes(): __Observable<SystemInfo> {
    return this.getSysteminfoVolumesResponse().pipe(
      __map(_r => _r.body as SystemInfo)
    );
  }

  /**
   * This endpoint is aimed to statistic all of the projects number and repositories number relevant to the logined user, also the public projects number and repositories number. If the user is admin, he can also get total projects number and total repositories number.
   * @return Get the projects number and repositories number relevant to the user successfully.
   */
  getStatisticsResponse(): __Observable<__StrictHttpResponse<StatisticMap>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/statistics`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<StatisticMap>;
      })
    );
  }
  /**
   * This endpoint is aimed to statistic all of the projects number and repositories number relevant to the logined user, also the public projects number and repositories number. If the user is admin, he can also get total projects number and total repositories number.
   * @return Get the projects number and repositories number relevant to the user successfully.
   */
  getStatistics(): __Observable<StatisticMap> {
    return this.getStatisticsResponse().pipe(
      __map(_r => _r.body as StatisticMap)
    );
  }

  /**
   * This endpoint is for user to get the task list of one execution.
   * @param id The execution ID.
   * @return Success.
   */
  getReplicationExecutionsIdTasksResponse(id: number): __Observable<__StrictHttpResponse<Array<ReplicationTask>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/replication/executions/${id}/tasks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReplicationTask>>;
      })
    );
  }
  /**
   * This endpoint is for user to get the task list of one execution.
   * @param id The execution ID.
   * @return Success.
   */
  getReplicationExecutionsIdTasks(id: number): __Observable<Array<ReplicationTask>> {
    return this.getReplicationExecutionsIdTasksResponse(id).pipe(
      __map(_r => _r.body as Array<ReplicationTask>)
    );
  }

  /**
   * This endpoint tests webhook connection of a project.
   * @param params The `ProductsService.PostProjectsProjectIdWebhookPoliciesTestParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `policy`: Only property "targets" needed.
   */
  postProjectsProjectIdWebhookPoliciesTestResponse(params: ProductsService.PostProjectsProjectIdWebhookPoliciesTestParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.policy;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects/${params.projectId}/webhook/policies/test`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint tests webhook connection of a project.
   * @param params The `ProductsService.PostProjectsProjectIdWebhookPoliciesTestParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `policy`: Only property "targets" needed.
   */
  postProjectsProjectIdWebhookPoliciesTest(params: ProductsService.PostProjectsProjectIdWebhookPoliciesTestParams): __Observable<null> {
    return this.postProjectsProjectIdWebhookPoliciesTestResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is to create a user if the user does not already exist.
   * @param user New created user.
   */
  postUsersResponse(user: User): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is to create a user if the user does not already exist.
   * @param user New created user.
   */
  postUsers(user: User): __Observable<null> {
    return this.postUsersResponse(user).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for user to search registered users, support for filtering results with username.Notice, by now this operation is only for administrator.
   * @param params The `ProductsService.GetUsersParams` containing the following parameters:
   *
   * - `username`: Username for filtering results.
   *
   * - `page_size`: The size of per page.
   *
   * - `page`: The page number, default is 1.
   *
   * - `email`: Email for filtering results.
   *
   * @return Searched for users of Harbor successfully.
   */
  getUsersResponse(params: ProductsService.GetUsersParams): __Observable<__StrictHttpResponse<Array<User>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.username != null) __params = __params.set('username', params.username.toString());
    if (params.pageSize != null) __params = __params.set('page_size', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.email != null) __params = __params.set('email', params.email.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<User>>;
      })
    );
  }
  /**
   * This endpoint is for user to search registered users, support for filtering results with username.Notice, by now this operation is only for administrator.
   * @param params The `ProductsService.GetUsersParams` containing the following parameters:
   *
   * - `username`: Username for filtering results.
   *
   * - `page_size`: The size of per page.
   *
   * - `page`: The page number, default is 1.
   *
   * - `email`: Email for filtering results.
   *
   * @return Searched for users of Harbor successfully.
   */
  getUsers(params: ProductsService.GetUsersParams): __Observable<Array<User>> {
    return this.getUsersResponse(params).pipe(
      __map(_r => _r.body as Array<User>)
    );
  }

  /**
   * Get the info of one specific registry.
   * @param id The registry ID.
   * @return Get registry successfully.
   */
  getRegistriesIdInfoResponse(id: number): __Observable<__StrictHttpResponse<RegistryInfo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/registries/${id}/info`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RegistryInfo>;
      })
    );
  }
  /**
   * Get the info of one specific registry.
   * @param id The registry ID.
   * @return Get registry successfully.
   */
  getRegistriesIdInfo(id: number): __Observable<RegistryInfo> {
    return this.getRegistriesIdInfoResponse(id).pipe(
      __map(_r => _r.body as RegistryInfo)
    );
  }

  /**
   * Get Retention job task log, tags ratain or deletion detail will be shown in a table.
   * @param params The `ProductsService.GetRetentionsIdExecutionsEidTasksTidParams` containing the following parameters:
   *
   * - `tid`: Retention execution ID.
   *
   * - `id`: Retention ID.
   *
   * - `eid`: Retention execution ID.
   *
   * @return Get Retention job task log successfully.
   */
  getRetentionsIdExecutionsEidTasksTidResponse(params: ProductsService.GetRetentionsIdExecutionsEidTasksTidParams): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/retentions/${params.id}/executions/${params.eid}/tasks/${params.tid}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * Get Retention job task log, tags ratain or deletion detail will be shown in a table.
   * @param params The `ProductsService.GetRetentionsIdExecutionsEidTasksTidParams` containing the following parameters:
   *
   * - `tid`: Retention execution ID.
   *
   * - `id`: Retention ID.
   *
   * - `eid`: Retention execution ID.
   *
   * @return Get Retention job task log successfully.
   */
  getRetentionsIdExecutionsEidTasksTid(params: ProductsService.GetRetentionsIdExecutionsEidTasksTidParams): __Observable<string> {
    return this.getRetentionsIdExecutionsEidTasksTidResponse(params).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * This endpoint let user search access logs filtered by operations and date time ranges.
   * @param params The `ProductsService.GetProjectsProjectIdLogsParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID
   *
   * - `username`: Username of the operator.
   *
   * - `tag`: The name of tag
   *
   * - `repository`: The name of repository
   *
   * - `page_size`: The size of per page, default is 10, maximum is 100.
   *
   * - `page`: The page number, default is 1.
   *
   * - `operation`: The operation
   *
   * - `end_timestamp`: The end timestamp
   *
   * - `begin_timestamp`: The begin timestamp
   *
   * @return Get access log successfully.
   */
  getProjectsProjectIdLogsResponse(params: ProductsService.GetProjectsProjectIdLogsParams): __Observable<__StrictHttpResponse<Array<AccessLog>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.username != null) __params = __params.set('username', params.username.toString());
    if (params.tag != null) __params = __params.set('tag', params.tag.toString());
    if (params.repository != null) __params = __params.set('repository', params.repository.toString());
    if (params.pageSize != null) __params = __params.set('page_size', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.operation != null) __params = __params.set('operation', params.operation.toString());
    if (params.endTimestamp != null) __params = __params.set('end_timestamp', params.endTimestamp.toString());
    if (params.beginTimestamp != null) __params = __params.set('begin_timestamp', params.beginTimestamp.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/logs`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<AccessLog>>;
      })
    );
  }
  /**
   * This endpoint let user search access logs filtered by operations and date time ranges.
   * @param params The `ProductsService.GetProjectsProjectIdLogsParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID
   *
   * - `username`: Username of the operator.
   *
   * - `tag`: The name of tag
   *
   * - `repository`: The name of repository
   *
   * - `page_size`: The size of per page, default is 10, maximum is 100.
   *
   * - `page`: The page number, default is 1.
   *
   * - `operation`: The operation
   *
   * - `end_timestamp`: The end timestamp
   *
   * - `begin_timestamp`: The begin timestamp
   *
   * @return Get access log successfully.
   */
  getProjectsProjectIdLogs(params: ProductsService.GetProjectsProjectIdLogsParams): __Observable<Array<AccessLog>> {
    return this.getProjectsProjectIdLogsResponse(params).pipe(
      __map(_r => _r.body as Array<AccessLog>)
    );
  }

  /**
   * Create user group information
   * @param usergroup undefined
   */
  postUsergroupsResponse(usergroup?: UserGroup): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = usergroup;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/usergroups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Create user group information
   * @param usergroup undefined
   */
  postUsergroups(usergroup?: UserGroup): __Observable<null> {
    return this.postUsergroupsResponse(usergroup).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get all user groups information
   * @return Get user group successfully.
   */
  getUsergroupsResponse(): __Observable<__StrictHttpResponse<Array<UserGroup>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/usergroups`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserGroup>>;
      })
    );
  }
  /**
   * Get all user groups information
   * @return Get user group successfully.
   */
  getUsergroups(): __Observable<Array<UserGroup>> {
    return this.getUsergroupsResponse().pipe(
      __map(_r => _r.body as Array<UserGroup>)
    );
  }

  /**
   * Update user group information
   * @param params The `ProductsService.PutUsergroupsGroupIdParams` containing the following parameters:
   *
   * - `group_id`: Group ID
   *
   * - `usergroup`:
   */
  putUsergroupsGroupIdResponse(params: ProductsService.PutUsergroupsGroupIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.usergroup;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/usergroups/${params.groupId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Update user group information
   * @param params The `ProductsService.PutUsergroupsGroupIdParams` containing the following parameters:
   *
   * - `group_id`: Group ID
   *
   * - `usergroup`:
   */
  putUsergroupsGroupId(params: ProductsService.PutUsergroupsGroupIdParams): __Observable<null> {
    return this.putUsergroupsGroupIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get user group information
   * @param group_id Group ID
   * @return User group get successfully.
   */
  getUsergroupsGroupIdResponse(groupId: number): __Observable<__StrictHttpResponse<UserGroup>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/usergroups/${groupId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserGroup>;
      })
    );
  }
  /**
   * Get user group information
   * @param group_id Group ID
   * @return User group get successfully.
   */
  getUsergroupsGroupId(groupId: number): __Observable<UserGroup> {
    return this.getUsergroupsGroupIdResponse(groupId).pipe(
      __map(_r => _r.body as UserGroup)
    );
  }

  /**
   * Delete user group
   * @param group_id undefined
   */
  deleteUsergroupsGroupIdResponse(groupId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/usergroups/${groupId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Delete user group
   * @param group_id undefined
   */
  deleteUsergroupsGroupId(groupId: number): __Observable<null> {
    return this.deleteUsergroupsGroupIdResponse(groupId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * List quotas
   * @param params The `ProductsService.GetQuotasParams` containing the following parameters:
   *
   * - `sort`: Sort method, valid values include:
   *   'hard.resource_name', '-hard.resource_name', 'used.resource_name', '-used.resource_name'.
   *   Here '-' stands for descending order, resource_name should be the real resource name of the quota.
   *
   * - `reference_id`: The reference id of quota.
   *
   * - `reference`: The reference type of quota.
   *
   * - `page_size`: The size of per page, default is 10, maximum is 100.
   *
   * - `page`: The page number, default is 1.
   *
   * @return Successfully retrieved the quotas.
   */
  getQuotasResponse(params: ProductsService.GetQuotasParams): __Observable<__StrictHttpResponse<Array<Quota>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.referenceId != null) __params = __params.set('reference_id', params.referenceId.toString());
    if (params.reference != null) __params = __params.set('reference', params.reference.toString());
    if (params.pageSize != null) __params = __params.set('page_size', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/quotas`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Quota>>;
      })
    );
  }
  /**
   * List quotas
   * @param params The `ProductsService.GetQuotasParams` containing the following parameters:
   *
   * - `sort`: Sort method, valid values include:
   *   'hard.resource_name', '-hard.resource_name', 'used.resource_name', '-used.resource_name'.
   *   Here '-' stands for descending order, resource_name should be the real resource name of the quota.
   *
   * - `reference_id`: The reference id of quota.
   *
   * - `reference`: The reference type of quota.
   *
   * - `page_size`: The size of per page, default is 10, maximum is 100.
   *
   * - `page`: The page number, default is 1.
   *
   * @return Successfully retrieved the quotas.
   */
  getQuotas(params: ProductsService.GetQuotasParams): __Observable<Array<Quota>> {
    return this.getQuotasResponse(params).pipe(
      __map(_r => _r.body as Array<Quota>)
    );
  }

  /**
   * Upload a chart file to the specified project. With this API, the corresponding provance file can be uploaded together with chart file at once.
   * @param params The `ProductsService.PostChartrepoRepoChartsParams` containing the following parameters:
   *
   * - `repo`: The project name
   *
   * - `chart`: The chart file
   *
   * - `prov`: The provance file
   */
  postChartrepoRepoChartsResponse(params: ProductsService.PostChartrepoRepoChartsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;

    if (params.chart != null) { __formData.append('chart', params.chart as string | Blob);}
    if (params.prov != null) { __formData.append('prov', params.prov as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/chartrepo/${params.repo}/charts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Upload a chart file to the specified project. With this API, the corresponding provance file can be uploaded together with chart file at once.
   * @param params The `ProductsService.PostChartrepoRepoChartsParams` containing the following parameters:
   *
   * - `repo`: The project name
   *
   * - `chart`: The chart file
   *
   * - `prov`: The provance file
   */
  postChartrepoRepoCharts(params: ProductsService.PostChartrepoRepoChartsParams): __Observable<null> {
    return this.postChartrepoRepoChartsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get all the charts under the specified project
   * @param repo The project name
   * @return Searched for charts of project in Harbor successfully.
   */
  getChartrepoRepoChartsResponse(repo: string): __Observable<__StrictHttpResponse<Array<ChartInfoEntry>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/chartrepo/${repo}/charts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ChartInfoEntry>>;
      })
    );
  }
  /**
   * Get all the charts under the specified project
   * @param repo The project name
   * @return Searched for charts of project in Harbor successfully.
   */
  getChartrepoRepoCharts(repo: string): __Observable<Array<ChartInfoEntry>> {
    return this.getChartrepoRepoChartsResponse(repo).pipe(
      __map(_r => _r.body as Array<ChartInfoEntry>)
    );
  }

  /**
   * This endpoint is aimed to update the properties of a project.
   * @param params The `ProductsService.PutProjectsProjectIdParams` containing the following parameters:
   *
   * - `project_id`: Selected project ID.
   *
   * - `project`: Updates of project.
   */
  putProjectsProjectIdResponse(params: ProductsService.PutProjectsProjectIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.project;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.projectId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is aimed to update the properties of a project.
   * @param params The `ProductsService.PutProjectsProjectIdParams` containing the following parameters:
   *
   * - `project_id`: Selected project ID.
   *
   * - `project`: Updates of project.
   */
  putProjectsProjectId(params: ProductsService.PutProjectsProjectIdParams): __Observable<null> {
    return this.putProjectsProjectIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint returns specific project information by project ID.
   * @param project_id Project ID for filtering results.
   * @return Return matched project information.
   */
  getProjectsProjectIdResponse(projectId: number): __Observable<__StrictHttpResponse<Project>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${projectId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Project>;
      })
    );
  }
  /**
   * This endpoint returns specific project information by project ID.
   * @param project_id Project ID for filtering results.
   * @return Return matched project information.
   */
  getProjectsProjectId(projectId: number): __Observable<Project> {
    return this.getProjectsProjectIdResponse(projectId).pipe(
      __map(_r => _r.body as Project)
    );
  }

  /**
   * This endpoint is aimed to delete project by project ID.
   * @param project_id Project ID of project which will be deleted.
   */
  deleteProjectsProjectIdResponse(projectId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${projectId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is aimed to delete project by project ID.
   * @param project_id Project ID of project which will be deleted.
   */
  deleteProjectsProjectId(projectId: number): __Observable<null> {
    return this.deleteProjectsProjectIdResponse(projectId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is to get the current user permissions.
   * @param params The `ProductsService.GetUsersCurrentPermissionsParams` containing the following parameters:
   *
   * - `scope`: Get permissions of the scope
   *
   * - `relative`: If true, the resources in the response are relative to the scope,
   *   eg for resource '/project/1/repository' if relative is 'true' then the resource in response will be 'repository'.
   *
   * @return Get current user permission successfully.
   */
  getUsersCurrentPermissionsResponse(params: ProductsService.GetUsersCurrentPermissionsParams): __Observable<__StrictHttpResponse<Array<Permission>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.scope != null) __params = __params.set('scope', params.scope.toString());
    if (params.relative != null) __params = __params.set('relative', params.relative.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/current/permissions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Permission>>;
      })
    );
  }
  /**
   * This endpoint is to get the current user permissions.
   * @param params The `ProductsService.GetUsersCurrentPermissionsParams` containing the following parameters:
   *
   * - `scope`: Get permissions of the scope
   *
   * - `relative`: If true, the resources in the response are relative to the scope,
   *   eg for resource '/project/1/repository' if relative is 'true' then the resource in response will be 'repository'.
   *
   * @return Get current user permission successfully.
   */
  getUsersCurrentPermissions(params: ProductsService.GetUsersCurrentPermissionsParams): __Observable<Array<Permission>> {
    return this.getUsersCurrentPermissionsResponse(params).pipe(
      __map(_r => _r.body as Array<Permission>)
    );
  }

  /**
   * This endpoint is to get the current user information.
   * @return Get current user information successfully.
   */
  getUsersCurrentResponse(): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/current`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * This endpoint is to get the current user information.
   * @return Get current user information successfully.
   */
  getUsersCurrent(): __Observable<User> {
    return this.getUsersCurrentResponse().pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * This endpoint let user update label properties.
   * @param params The `ProductsService.PutLabelsIdParams` containing the following parameters:
   *
   * - `label`: The updated label json object.
   *
   * - `id`: Label ID
   */
  putLabelsIdResponse(params: ProductsService.PutLabelsIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.label;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/labels/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint let user update label properties.
   * @param params The `ProductsService.PutLabelsIdParams` containing the following parameters:
   *
   * - `label`: The updated label json object.
   *
   * - `id`: Label ID
   */
  putLabelsId(params: ProductsService.PutLabelsIdParams): __Observable<null> {
    return this.putLabelsIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint let user get the label by specific ID.
   * @param id Label ID
   * @return Get successfully.
   */
  getLabelsIdResponse(id: number): __Observable<__StrictHttpResponse<Label>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/labels/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Label>;
      })
    );
  }
  /**
   * This endpoint let user get the label by specific ID.
   * @param id Label ID
   * @return Get successfully.
   */
  getLabelsId(id: number): __Observable<Label> {
    return this.getLabelsIdResponse(id).pipe(
      __map(_r => _r.body as Label)
    );
  }

  /**
   * Delete the label specified by ID.
   * @param id Label ID
   */
  deleteLabelsIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/labels/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Delete the label specified by ID.
   * @param id Label ID
   */
  deleteLabelsId(id: number): __Observable<null> {
    return this.deleteLabelsIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is aimed to update the webhook policy of a project.
   * @param params The `ProductsService.PutProjectsProjectIdWebhookPoliciesPolicyIdParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `policy_id`: The id of webhook policy.
   *
   * - `policy`: All properties needed except "id", "project_id", "creation_time", "update_time".
   */
  putProjectsProjectIdWebhookPoliciesPolicyIdResponse(params: ProductsService.PutProjectsProjectIdWebhookPoliciesPolicyIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.policy;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.projectId}/webhook/policies/${params.policyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is aimed to update the webhook policy of a project.
   * @param params The `ProductsService.PutProjectsProjectIdWebhookPoliciesPolicyIdParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `policy_id`: The id of webhook policy.
   *
   * - `policy`: All properties needed except "id", "project_id", "creation_time", "update_time".
   */
  putProjectsProjectIdWebhookPoliciesPolicyId(params: ProductsService.PutProjectsProjectIdWebhookPoliciesPolicyIdParams): __Observable<null> {
    return this.putProjectsProjectIdWebhookPoliciesPolicyIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint returns specified webhook policy of a project.
   * @param params The `ProductsService.GetProjectsProjectIdWebhookPoliciesPolicyIdParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `policy_id`: The id of webhook policy.
   *
   * @return Get webhook policy successfully.
   */
  getProjectsProjectIdWebhookPoliciesPolicyIdResponse(params: ProductsService.GetProjectsProjectIdWebhookPoliciesPolicyIdParams): __Observable<__StrictHttpResponse<WebhookPolicy>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/webhook/policies/${params.policyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<WebhookPolicy>;
      })
    );
  }
  /**
   * This endpoint returns specified webhook policy of a project.
   * @param params The `ProductsService.GetProjectsProjectIdWebhookPoliciesPolicyIdParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `policy_id`: The id of webhook policy.
   *
   * @return Get webhook policy successfully.
   */
  getProjectsProjectIdWebhookPoliciesPolicyId(params: ProductsService.GetProjectsProjectIdWebhookPoliciesPolicyIdParams): __Observable<WebhookPolicy> {
    return this.getProjectsProjectIdWebhookPoliciesPolicyIdResponse(params).pipe(
      __map(_r => _r.body as WebhookPolicy)
    );
  }

  /**
   * This endpoint is aimed to delete webhookpolicy of a project.
   * @param params The `ProductsService.DeleteProjectsProjectIdWebhookPoliciesPolicyIdParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `policy_id`: The id of webhook policy.
   */
  deleteProjectsProjectIdWebhookPoliciesPolicyIdResponse(params: ProductsService.DeleteProjectsProjectIdWebhookPoliciesPolicyIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${params.projectId}/webhook/policies/${params.policyId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is aimed to delete webhookpolicy of a project.
   * @param params The `ProductsService.DeleteProjectsProjectIdWebhookPoliciesPolicyIdParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `policy_id`: The id of webhook policy.
   */
  deleteProjectsProjectIdWebhookPoliciesPolicyId(params: ProductsService.DeleteProjectsProjectIdWebhookPoliciesPolicyIdParams): __Observable<null> {
    return this.deleteProjectsProjectIdWebhookPoliciesPolicyIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for updating the schedule of scan all job, which scans all of images in Harbor.
   * @param schedule Updates the schedule of scan all job, which scans all of images in Harbor.
   */
  putSystemScanAllScheduleResponse(schedule: AdminJobSchedule): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = schedule;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/system/scanAll/schedule`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for updating the schedule of scan all job, which scans all of images in Harbor.
   * @param schedule Updates the schedule of scan all job, which scans all of images in Harbor.
   */
  putSystemScanAllSchedule(schedule: AdminJobSchedule): __Observable<null> {
    return this.putSystemScanAllScheduleResponse(schedule).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for creating a schedule or a manual trigger for the scan all job, which scans all of images in Harbor.
   * @param schedule Create a schedule or a manual trigger for the scan all job.
   */
  postSystemScanAllScheduleResponse(schedule: AdminJobSchedule): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = schedule;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/system/scanAll/schedule`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for creating a schedule or a manual trigger for the scan all job, which scans all of images in Harbor.
   * @param schedule Create a schedule or a manual trigger for the scan all job.
   */
  postSystemScanAllSchedule(schedule: AdminJobSchedule): __Observable<null> {
    return this.postSystemScanAllScheduleResponse(schedule).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for getting a schedule for the scan all job, which scans all of images in Harbor.
   * @return Get a schedule for the scan all job, which scans all of images in Harbor.
   */
  getSystemScanAllScheduleResponse(): __Observable<__StrictHttpResponse<AdminJobSchedule>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/system/scanAll/schedule`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AdminJobSchedule>;
      })
    );
  }
  /**
   * This endpoint is for getting a schedule for the scan all job, which scans all of images in Harbor.
   * @return Get a schedule for the scan all job, which scans all of images in Harbor.
   */
  getSystemScanAllSchedule(): __Observable<AdminJobSchedule> {
    return this.getSystemScanAllScheduleResponse().pipe(
      __map(_r => _r.body as AdminJobSchedule)
    );
  }

  /**
   * This endpoint is used to check if the project name user provided already exist.
   * @param project_name Project name for checking exists.
   */
  headProjectsResponse(projectName: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (projectName != null) __params = __params.set('project_name', projectName.toString());
    let req = new HttpRequest<any>(
      'HEAD',
      this.rootUrl + `/projects`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is used to check if the project name user provided already exist.
   * @param project_name Project name for checking exists.
   */
  headProjects(projectName: string): __Observable<null> {
    return this.headProjectsResponse(projectName).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for user to create a new project.
   * @param project New created project.
   */
  postProjectsResponse(project: ProjectReq): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = project;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for user to create a new project.
   * @param project New created project.
   */
  postProjects(project: ProjectReq): __Observable<null> {
    return this.postProjectsResponse(project).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint returns all projects created by Harbor, and can be filtered by project name.
   * @param params The `ProductsService.GetProjectsParams` containing the following parameters:
   *
   * - `public`: The project is public or private.
   *
   * - `page_size`: The size of per page, default is 10, maximum is 100.
   *
   * - `page`: The page number, default is 1.
   *
   * - `owner`: The name of project owner.
   *
   * - `name`: The name of project.
   *
   * @return Return all matched projects.
   */
  getProjectsResponse(params: ProductsService.GetProjectsParams): __Observable<__StrictHttpResponse<Array<Project>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.public != null) __params = __params.set('public', params.public.toString());
    if (params.pageSize != null) __params = __params.set('page_size', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.owner != null) __params = __params.set('owner', params.owner.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Project>>;
      })
    );
  }
  /**
   * This endpoint returns all projects created by Harbor, and can be filtered by project name.
   * @param params The `ProductsService.GetProjectsParams` containing the following parameters:
   *
   * - `public`: The project is public or private.
   *
   * - `page_size`: The size of per page, default is 10, maximum is 100.
   *
   * - `page`: The page number, default is 1.
   *
   * - `owner`: The name of project owner.
   *
   * - `name`: The name of project.
   *
   * @return Return all matched projects.
   */
  getProjects(params: ProductsService.GetProjectsParams): __Observable<Array<Project>> {
    return this.getProjectsResponse(params).pipe(
      __map(_r => _r.body as Array<Project>)
    );
  }

  /**
   * This endpoint is aimed to add metadata of a project.
   * @param params The `ProductsService.PostProjectsProjectIdMetadatasParams` containing the following parameters:
   *
   * - `project_id`: Selected project ID.
   *
   * - `metadata`: The metadata of project.
   */
  postProjectsProjectIdMetadatasResponse(params: ProductsService.PostProjectsProjectIdMetadatasParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.metadata;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects/${params.projectId}/metadatas`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is aimed to add metadata of a project.
   * @param params The `ProductsService.PostProjectsProjectIdMetadatasParams` containing the following parameters:
   *
   * - `project_id`: Selected project ID.
   *
   * - `metadata`: The metadata of project.
   */
  postProjectsProjectIdMetadatas(params: ProductsService.PostProjectsProjectIdMetadatasParams): __Observable<null> {
    return this.postProjectsProjectIdMetadatasResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint returns metadata of the project specified by project ID.
   * @param project_id The ID of project.
   * @return Get metadata successfully.
   */
  getProjectsProjectIdMetadatasResponse(projectId: number): __Observable<__StrictHttpResponse<ProjectMetadata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${projectId}/metadatas`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProjectMetadata>;
      })
    );
  }
  /**
   * This endpoint returns metadata of the project specified by project ID.
   * @param project_id The ID of project.
   * @return Get metadata successfully.
   */
  getProjectsProjectIdMetadatas(projectId: number): __Observable<ProjectMetadata> {
    return this.getProjectsProjectIdMetadatasResponse(projectId).pipe(
      __map(_r => _r.body as ProjectMetadata)
    );
  }

  /**
   * This endpoint aims to retrieve signature information of a repository, the data is
   * from the nested notary instance of Harbor.
   * If the repository does not have any signature information in notary, this API will
   * return an empty list with response code 200, instead of 404
   * @param repo_name repository name.
   * @return Retrieved signatures.
   */
  getRepositoriesRepoNameSignaturesResponse(repoName: string): __Observable<__StrictHttpResponse<Array<RepoSignature>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/repositories/${repoName}/signatures`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RepoSignature>>;
      })
    );
  }
  /**
   * This endpoint aims to retrieve signature information of a repository, the data is
   * from the nested notary instance of Harbor.
   * If the repository does not have any signature information in notary, this API will
   * return an empty list with response code 200, instead of 404
   * @param repo_name repository name.
   * @return Retrieved signatures.
   */
  getRepositoriesRepoNameSignatures(repoName: string): __Observable<Array<RepoSignature>> {
    return this.getRepositoriesRepoNameSignaturesResponse(repoName).pipe(
      __map(_r => _r.body as Array<RepoSignature>)
    );
  }

  /**
   * This endpoint searches the available ldap groups based on related configuration parameters. support to search by groupname or groupdn.
   * @param params The `ProductsService.GetLdapGroupsSearchParams` containing the following parameters:
   *
   * - `groupname`: Ldap group name
   *
   * - `groupdn`: The LDAP group DN
   *
   * @return Search ldap group successfully.
   */
  getLdapGroupsSearchResponse(params: ProductsService.GetLdapGroupsSearchParams): __Observable<__StrictHttpResponse<Array<UserGroup>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.groupname != null) __params = __params.set('groupname', params.groupname.toString());
    if (params.groupdn != null) __params = __params.set('groupdn', params.groupdn.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ldap/groups/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<UserGroup>>;
      })
    );
  }
  /**
   * This endpoint searches the available ldap groups based on related configuration parameters. support to search by groupname or groupdn.
   * @param params The `ProductsService.GetLdapGroupsSearchParams` containing the following parameters:
   *
   * - `groupname`: Ldap group name
   *
   * - `groupdn`: The LDAP group DN
   *
   * @return Search ldap group successfully.
   */
  getLdapGroupsSearch(params: ProductsService.GetLdapGroupsSearchParams): __Observable<Array<UserGroup>> {
    return this.getLdapGroupsSearchResponse(params).pipe(
      __map(_r => _r.body as Array<UserGroup>)
    );
  }

  /**
   * Used to disable/enable a specified robot account.
   * @param params The `ProductsService.PutProjectsProjectIdRobotsRobotIdParams` containing the following parameters:
   *
   * - `robot_id`: The ID of robot account.
   *
   * - `robot`: Request body of enable/disable a robot account.
   *
   * - `project_id`: Relevant project ID.
   */
  putProjectsProjectIdRobotsRobotIdResponse(params: ProductsService.PutProjectsProjectIdRobotsRobotIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.robot;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.projectId}/robots/${params.robotId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Used to disable/enable a specified robot account.
   * @param params The `ProductsService.PutProjectsProjectIdRobotsRobotIdParams` containing the following parameters:
   *
   * - `robot_id`: The ID of robot account.
   *
   * - `robot`: Request body of enable/disable a robot account.
   *
   * - `project_id`: Relevant project ID.
   */
  putProjectsProjectIdRobotsRobotId(params: ProductsService.PutProjectsProjectIdRobotsRobotIdParams): __Observable<null> {
    return this.putProjectsProjectIdRobotsRobotIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Return the infor of the specified robot account.
   * @param params The `ProductsService.GetProjectsProjectIdRobotsRobotIdParams` containing the following parameters:
   *
   * - `robot_id`: The ID of robot account.
   *
   * - `project_id`: Relevant project ID.
   *
   * @return Robot account information.
   */
  getProjectsProjectIdRobotsRobotIdResponse(params: ProductsService.GetProjectsProjectIdRobotsRobotIdParams): __Observable<__StrictHttpResponse<RobotAccount>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/robots/${params.robotId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RobotAccount>;
      })
    );
  }
  /**
   * Return the infor of the specified robot account.
   * @param params The `ProductsService.GetProjectsProjectIdRobotsRobotIdParams` containing the following parameters:
   *
   * - `robot_id`: The ID of robot account.
   *
   * - `project_id`: Relevant project ID.
   *
   * @return Robot account information.
   */
  getProjectsProjectIdRobotsRobotId(params: ProductsService.GetProjectsProjectIdRobotsRobotIdParams): __Observable<RobotAccount> {
    return this.getProjectsProjectIdRobotsRobotIdResponse(params).pipe(
      __map(_r => _r.body as RobotAccount)
    );
  }

  /**
   * Delete the specified robot account
   * @param params The `ProductsService.DeleteProjectsProjectIdRobotsRobotIdParams` containing the following parameters:
   *
   * - `robot_id`: The ID of robot account.
   *
   * - `project_id`: Relevant project ID.
   */
  deleteProjectsProjectIdRobotsRobotIdResponse(params: ProductsService.DeleteProjectsProjectIdRobotsRobotIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${params.projectId}/robots/${params.robotId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Delete the specified robot account
   * @param params The `ProductsService.DeleteProjectsProjectIdRobotsRobotIdParams` containing the following parameters:
   *
   * - `robot_id`: The ID of robot account.
   *
   * - `project_id`: Relevant project ID.
   */
  deleteProjectsProjectIdRobotsRobotId(params: ProductsService.DeleteProjectsProjectIdRobotsRobotIdParams): __Observable<null> {
    return this.deleteProjectsProjectIdRobotsRobotIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint aims to retrieve the tag of the repository. If deployed with Notary, the signature property of response represents whether the image is singed or not. If the property is null, the image is unsigned.
   * @param params The `ProductsService.GetRepositoriesRepoNameTagsTagParams` containing the following parameters:
   *
   * - `tag`: Tag of the repository.
   *
   * - `repo_name`: Relevant repository name.
   *
   * @return Get tag successfully.
   */
  getRepositoriesRepoNameTagsTagResponse(params: ProductsService.GetRepositoriesRepoNameTagsTagParams): __Observable<__StrictHttpResponse<DetailedTag>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/repositories/${params.repoName}/tags/${params.tag}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<DetailedTag>;
      })
    );
  }
  /**
   * This endpoint aims to retrieve the tag of the repository. If deployed with Notary, the signature property of response represents whether the image is singed or not. If the property is null, the image is unsigned.
   * @param params The `ProductsService.GetRepositoriesRepoNameTagsTagParams` containing the following parameters:
   *
   * - `tag`: Tag of the repository.
   *
   * - `repo_name`: Relevant repository name.
   *
   * @return Get tag successfully.
   */
  getRepositoriesRepoNameTagsTag(params: ProductsService.GetRepositoriesRepoNameTagsTagParams): __Observable<DetailedTag> {
    return this.getRepositoriesRepoNameTagsTagResponse(params).pipe(
      __map(_r => _r.body as DetailedTag)
    );
  }

  /**
   * This endpoint let user delete tags with repo name and tag.
   * @param params The `ProductsService.DeleteRepositoriesRepoNameTagsTagParams` containing the following parameters:
   *
   * - `tag`: Tag of a repository.
   *
   * - `repo_name`: The name of repository which will be deleted.
   */
  deleteRepositoriesRepoNameTagsTagResponse(params: ProductsService.DeleteRepositoriesRepoNameTagsTagParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/repositories/${params.repoName}/tags/${params.tag}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint let user delete tags with repo name and tag.
   * @param params The `ProductsService.DeleteRepositoriesRepoNameTagsTagParams` containing the following parameters:
   *
   * - `tag`: Tag of a repository.
   *
   * - `repo_name`: The name of repository which will be deleted.
   */
  deleteRepositoriesRepoNameTagsTag(params: ProductsService.DeleteRepositoriesRepoNameTagsTagParams): __Observable<null> {
    return this.deleteRepositoriesRepoNameTagsTagResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint let a registered user change his profile.
   * @param params The `ProductsService.PutUsersUserIdParams` containing the following parameters:
   *
   * - `user_id`: Registered user ID
   *
   * - `profile`: Only email, realname and comment can be modified.
   */
  putUsersUserIdResponse(params: ProductsService.PutUsersUserIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.profile;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/users/${params.userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint let a registered user change his profile.
   * @param params The `ProductsService.PutUsersUserIdParams` containing the following parameters:
   *
   * - `user_id`: Registered user ID
   *
   * - `profile`: Only email, realname and comment can be modified.
   */
  putUsersUserId(params: ProductsService.PutUsersUserIdParams): __Observable<null> {
    return this.putUsersUserIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get user's profile with user id.
   * @param user_id Registered user ID
   * @return Get user's profile successfully.
   */
  getUsersUserIdResponse(userId: number): __Observable<__StrictHttpResponse<User>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/users/${userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<User>;
      })
    );
  }
  /**
   * Get user's profile with user id.
   * @param user_id Registered user ID
   * @return Get user's profile successfully.
   */
  getUsersUserId(userId: number): __Observable<User> {
    return this.getUsersUserIdResponse(userId).pipe(
      __map(_r => _r.body as User)
    );
  }

  /**
   * This endpoint let administrator of Harbor mark a registered user as
   * be removed.It actually won't be deleted from DB.
   * @param user_id User ID for marking as to be removed.
   */
  deleteUsersUserIdResponse(userId: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/users/${userId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint let administrator of Harbor mark a registered user as
   * be removed.It actually won't be deleted from DB.
   * @param user_id User ID for marking as to be removed.
   */
  deleteUsersUserId(userId: number): __Observable<null> {
    return this.deleteUsersUserIdResponse(userId).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint let user create a replication policy
   * @param policy The policy model.
   */
  postReplicationPoliciesResponse(policy: ReplicationPolicy): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = policy;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/replication/policies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint let user create a replication policy
   * @param policy The policy model.
   */
  postReplicationPolicies(policy: ReplicationPolicy): __Observable<null> {
    return this.postReplicationPoliciesResponse(policy).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint let user list replication policies
   * @param params The `ProductsService.GetReplicationPoliciesParams` containing the following parameters:
   *
   * - `page_size`: The size of per page.
   *
   * - `page`: The page nubmer.
   *
   * - `name`: The replication policy name.
   *
   * @return Get policy successfully.
   */
  getReplicationPoliciesResponse(params: ProductsService.GetReplicationPoliciesParams): __Observable<__StrictHttpResponse<Array<ReplicationPolicy>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.pageSize != null) __params = __params.set('page_size', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.name != null) __params = __params.set('name', params.name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/replication/policies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReplicationPolicy>>;
      })
    );
  }
  /**
   * This endpoint let user list replication policies
   * @param params The `ProductsService.GetReplicationPoliciesParams` containing the following parameters:
   *
   * - `page_size`: The size of per page.
   *
   * - `page`: The page nubmer.
   *
   * - `name`: The replication policy name.
   *
   * @return Get policy successfully.
   */
  getReplicationPolicies(params: ProductsService.GetReplicationPoliciesParams): __Observable<Array<ReplicationPolicy>> {
    return this.getReplicationPoliciesResponse(params).pipe(
      __map(_r => _r.body as Array<ReplicationPolicy>)
    );
  }

  /**
   * Trigger a Retention job, if dry_run is True, nothing would be deleted actually.
   * @param params The `ProductsService.PostRetentionsIdExecutionsParams` containing the following parameters:
   *
   * - `id`: Retention ID.
   *
   * - `action`:
   */
  postRetentionsIdExecutionsResponse(params: ProductsService.PostRetentionsIdExecutionsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.action;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/retentions/${params.id}/executions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Trigger a Retention job, if dry_run is True, nothing would be deleted actually.
   * @param params The `ProductsService.PostRetentionsIdExecutionsParams` containing the following parameters:
   *
   * - `id`: Retention ID.
   *
   * - `action`:
   */
  postRetentionsIdExecutions(params: ProductsService.PostRetentionsIdExecutionsParams): __Observable<null> {
    return this.postRetentionsIdExecutionsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get a Retention job, job status may be delayed before job service schedule it up.
   * @param id Retention ID.
   * @return Get a Retention job successfully.
   */
  getRetentionsIdExecutionsResponse(id: number): __Observable<__StrictHttpResponse<Array<RetentionExecution>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/retentions/${id}/executions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<RetentionExecution>>;
      })
    );
  }
  /**
   * Get a Retention job, job status may be delayed before job service schedule it up.
   * @param id Retention ID.
   * @return Get a Retention job successfully.
   */
  getRetentionsIdExecutions(id: number): __Observable<Array<RetentionExecution>> {
    return this.getRetentionsIdExecutionsResponse(id).pipe(
      __map(_r => _r.body as Array<RetentionExecution>)
    );
  }

  /**
   * Get summary of the project.
   * @param project_id Relevant project ID
   * @return Get summary of the project successfully.
   */
  getProjectsProjectIdSummaryResponse(projectId: number): __Observable<__StrictHttpResponse<ProjectSummary>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${projectId}/summary`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProjectSummary>;
      })
    );
  }
  /**
   * Get summary of the project.
   * @param project_id Relevant project ID
   * @return Get summary of the project successfully.
   */
  getProjectsProjectIdSummary(projectId: number): __Observable<ProjectSummary> {
    return this.getProjectsProjectIdSummaryResponse(projectId).pipe(
      __map(_r => _r.body as ProjectSummary)
    );
  }

  /**
   * Retrieve the system configured scanner registrations as candidates of setting project level scanner.
   * @param project_id The project identifier.
   * @return A list of scanner registrations.
   */
  getProjectsProjectIdScannerCandidatesResponse(projectId: number): __Observable<__StrictHttpResponse<Array<ScannerRegistration>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${projectId}/scanner/candidates`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ScannerRegistration>>;
      })
    );
  }
  /**
   * Retrieve the system configured scanner registrations as candidates of setting project level scanner.
   * @param project_id The project identifier.
   * @return A list of scanner registrations.
   */
  getProjectsProjectIdScannerCandidates(projectId: number): __Observable<Array<ScannerRegistration>> {
    return this.getProjectsProjectIdScannerCandidatesResponse(projectId).pipe(
      __map(_r => _r.body as Array<ScannerRegistration>)
    );
  }

  /**
   * This endpoint let a registered user change to be an administrator
   * of Harbor.
   * @param params The `ProductsService.PutUsersUserIdSysadminParams` containing the following parameters:
   *
   * - `user_id`: Registered user ID
   *
   * - `has_admin_role`: Toggle a user to admin or not.
   */
  putUsersUserIdSysadminResponse(params: ProductsService.PutUsersUserIdSysadminParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.hasAdminRole;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/users/${params.userId}/sysadmin`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint let a registered user change to be an administrator
   * of Harbor.
   * @param params The `ProductsService.PutUsersUserIdSysadminParams` containing the following parameters:
   *
   * - `user_id`: Registered user ID
   *
   * - `has_admin_role`: Toggle a user to admin or not.
   */
  putUsersUserIdSysadmin(params: ProductsService.PutUsersUserIdSysadminParams): __Observable<null> {
    return this.putUsersUserIdSysadminResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for user to update password. Users with the admin role can change any user's password. Guest users can change only their own password.
   * @param params The `ProductsService.PutUsersUserIdPasswordParams` containing the following parameters:
   *
   * - `user_id`: Registered user ID.
   *
   * - `password`: Password to be updated, the attribute 'old_password' is optional when the API is called by the system administrator.
   */
  putUsersUserIdPasswordResponse(params: ProductsService.PutUsersUserIdPasswordParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.password;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/users/${params.userId}/password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for user to update password. Users with the admin role can change any user's password. Guest users can change only their own password.
   * @param params The `ProductsService.PutUsersUserIdPasswordParams` containing the following parameters:
   *
   * - `user_id`: Registered user ID.
   *
   * - `password`: Password to be updated, the attribute 'old_password' is optional when the API is called by the system administrator.
   */
  putUsersUserIdPassword(params: ProductsService.PutUsersUserIdPasswordParams): __Observable<null> {
    return this.putUsersUserIdPasswordResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint create a webhook policy if the project does not have one.
   * @param params The `ProductsService.PostProjectsProjectIdWebhookPoliciesParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID
   *
   * - `policy`: Properties "targets" and "event_types" needed.
   */
  postProjectsProjectIdWebhookPoliciesResponse(params: ProductsService.PostProjectsProjectIdWebhookPoliciesParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.policy;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects/${params.projectId}/webhook/policies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint create a webhook policy if the project does not have one.
   * @param params The `ProductsService.PostProjectsProjectIdWebhookPoliciesParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID
   *
   * - `policy`: Properties "targets" and "event_types" needed.
   */
  postProjectsProjectIdWebhookPolicies(params: ProductsService.PostProjectsProjectIdWebhookPoliciesParams): __Observable<null> {
    return this.postProjectsProjectIdWebhookPoliciesResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint returns webhook policies of a project.
   * @param project_id Relevant project ID.
   * @return List project webhook policies successfully.
   */
  getProjectsProjectIdWebhookPoliciesResponse(projectId: number): __Observable<__StrictHttpResponse<Array<WebhookPolicy>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${projectId}/webhook/policies`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<WebhookPolicy>>;
      })
    );
  }
  /**
   * This endpoint returns webhook policies of a project.
   * @param project_id Relevant project ID.
   * @return List project webhook policies successfully.
   */
  getProjectsProjectIdWebhookPolicies(projectId: number): __Observable<Array<WebhookPolicy>> {
    return this.getProjectsProjectIdWebhookPoliciesResponse(projectId).pipe(
      __map(_r => _r.body as Array<WebhookPolicy>)
    );
  }

  /**
   * Remove label from the specified chart version.
   * @param params The `ProductsService.DeleteChartrepoRepoChartsNameVersionLabelsIdParams` containing the following parameters:
   *
   * - `version`: The chart version
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   *
   * - `id`: The label ID
   */
  deleteChartrepoRepoChartsNameVersionLabelsIdResponse(params: ProductsService.DeleteChartrepoRepoChartsNameVersionLabelsIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;




    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/chartrepo/${params.repo}/charts/${params.name}/${params.version}/labels/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Remove label from the specified chart version.
   * @param params The `ProductsService.DeleteChartrepoRepoChartsNameVersionLabelsIdParams` containing the following parameters:
   *
   * - `version`: The chart version
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   *
   * - `id`: The label ID
   */
  deleteChartrepoRepoChartsNameVersionLabelsId(params: ProductsService.DeleteChartrepoRepoChartsNameVersionLabelsIdParams): __Observable<null> {
    return this.deleteChartrepoRepoChartsNameVersionLabelsIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint let user get latest ten gc results.
   * @return Get gc results successfully.
   */
  getSystemGcResponse(): __Observable<__StrictHttpResponse<Array<GCResult>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/system/gc`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<GCResult>>;
      })
    );
  }
  /**
   * This endpoint let user get latest ten gc results.
   * @return Get gc results successfully.
   */
  getSystemGc(): __Observable<Array<GCResult>> {
    return this.getSystemGcResponse().pipe(
      __map(_r => _r.body as Array<GCResult>)
    );
  }

  /**
   * Get the metrics of the latest scheduled scan all process
   * @return OK
   */
  getScansScheduleMetricsResponse(): __Observable<__StrictHttpResponse<Stats>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/scans/schedule/metrics`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Stats>;
      })
    );
  }
  /**
   * Get the metrics of the latest scheduled scan all process
   * @return OK
   */
  getScansScheduleMetrics(): __Observable<Stats> {
    return this.getScansScheduleMetricsResponse().pipe(
      __map(_r => _r.body as Stats)
    );
  }

  /**
   * This endpoint let user get gc status filtered by specific ID.
   * @param id Relevant job ID
   * @return Get gc results successfully.
   */
  getSystemGcIdResponse(id: number): __Observable<__StrictHttpResponse<GCResult>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/system/gc/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GCResult>;
      })
    );
  }
  /**
   * This endpoint let user get gc status filtered by specific ID.
   * @param id Relevant job ID
   * @return Get gc results successfully.
   */
  getSystemGcId(id: number): __Observable<GCResult> {
    return this.getSystemGcIdResponse(id).pipe(
      __map(_r => _r.body as GCResult)
    );
  }

  /**
   * This endpoint is for user to start one execution of the replication.
   * @param execution The execution that needs to be started, only the property "policy_id" is needed.
   */
  postReplicationExecutionsResponse(execution: ReplicationExecution): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = execution;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/replication/executions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for user to start one execution of the replication.
   * @param execution The execution that needs to be started, only the property "policy_id" is needed.
   */
  postReplicationExecutions(execution: ReplicationExecution): __Observable<null> {
    return this.postReplicationExecutionsResponse(execution).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint let user list replication executions.
   * @param params The `ProductsService.GetReplicationExecutionsParams` containing the following parameters:
   *
   * - `trigger`: The trigger mode.
   *
   * - `status`: The execution status.
   *
   * - `policy_id`: The policy ID.
   *
   * - `page_size`: The page size.
   *
   * - `page`: The page.
   *
   * @return Success
   */
  getReplicationExecutionsResponse(params: ProductsService.GetReplicationExecutionsParams): __Observable<__StrictHttpResponse<Array<ReplicationExecution>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.trigger != null) __params = __params.set('trigger', params.trigger.toString());
    if (params.status != null) __params = __params.set('status', params.status.toString());
    if (params.policyId != null) __params = __params.set('policy_id', params.policyId.toString());
    if (params.pageSize != null) __params = __params.set('page_size', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/replication/executions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ReplicationExecution>>;
      })
    );
  }
  /**
   * This endpoint let user list replication executions.
   * @param params The `ProductsService.GetReplicationExecutionsParams` containing the following parameters:
   *
   * - `trigger`: The trigger mode.
   *
   * - `status`: The execution status.
   *
   * - `policy_id`: The policy ID.
   *
   * - `page_size`: The page size.
   *
   * - `page`: The page.
   *
   * @return Success
   */
  getReplicationExecutions(params: ProductsService.GetReplicationExecutionsParams): __Observable<Array<ReplicationExecution>> {
    return this.getReplicationExecutionsResponse(params).pipe(
      __map(_r => _r.body as Array<ReplicationExecution>)
    );
  }

  /**
   * This API overwrites the system level whitelist of CVE with the list in request body.  Only system Admin has permission to call this API.
   * @param whitelist The whitelist with new content
   */
  putSystemCVEWhitelistResponse(whitelist?: CVEWhitelist): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = whitelist;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/system/CVEWhitelist`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This API overwrites the system level whitelist of CVE with the list in request body.  Only system Admin has permission to call this API.
   * @param whitelist The whitelist with new content
   */
  putSystemCVEWhitelist(whitelist?: CVEWhitelist): __Observable<null> {
    return this.putSystemCVEWhitelistResponse(whitelist).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get the system level whitelist of CVE.  This API can be called by all authenticated users.
   * @return Successfully retrieved the CVE whitelist.
   */
  getSystemCVEWhitelistResponse(): __Observable<__StrictHttpResponse<CVEWhitelist>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/system/CVEWhitelist`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CVEWhitelist>;
      })
    );
  }
  /**
   * Get the system level whitelist of CVE.  This API can be called by all authenticated users.
   * @return Successfully retrieved the CVE whitelist.
   */
  getSystemCVEWhitelist(): __Observable<CVEWhitelist> {
    return this.getSystemCVEWhitelistResponse().pipe(
      __map(_r => _r.body as CVEWhitelist)
    );
  }

  /**
   * This endpoint is for syncing quota usage of registry/chart with database.
   */
  postInternalSyncquotaResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/internal/syncquota`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for syncing quota usage of registry/chart with database.
   */
  postInternalSyncquota(): __Observable<null> {
    return this.postInternalSyncquotaResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Upload a chart file to the default 'library' project. Uploading together with the prov file at the same time is also supported.
   * @param params The `ProductsService.PostChartrepoChartsParams` containing the following parameters:
   *
   * - `chart`: The chart file
   *
   * - `prov`: The provance file
   */
  postChartrepoChartsResponse(params: ProductsService.PostChartrepoChartsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let __formData = new FormData();
    __body = __formData;
    if (params.chart != null) { __formData.append('chart', params.chart as string | Blob);}
    if (params.prov != null) { __formData.append('prov', params.prov as string | Blob);}
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/chartrepo/charts`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Upload a chart file to the default 'library' project. Uploading together with the prov file at the same time is also supported.
   * @param params The `ProductsService.PostChartrepoChartsParams` containing the following parameters:
   *
   * - `chart`: The chart file
   *
   * - `prov`: The provance file
   */
  postChartrepoCharts(params: ProductsService.PostChartrepoChartsParams): __Observable<null> {
    return this.postChartrepoChartsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Add a label to the repository.
   * @param params The `ProductsService.PostRepositoriesRepoNameLabelsParams` containing the following parameters:
   *
   * - `repo_name`: The name of repository.
   *
   * - `label`: Only the ID property is required.
   */
  postRepositoriesRepoNameLabelsResponse(params: ProductsService.PostRepositoriesRepoNameLabelsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.label;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/repositories/${params.repoName}/labels`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Add a label to the repository.
   * @param params The `ProductsService.PostRepositoriesRepoNameLabelsParams` containing the following parameters:
   *
   * - `repo_name`: The name of repository.
   *
   * - `label`: Only the ID property is required.
   */
  postRepositoriesRepoNameLabels(params: ProductsService.PostRepositoriesRepoNameLabelsParams): __Observable<null> {
    return this.postRepositoriesRepoNameLabelsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get labels of a repository specified by the repo_name.
   * @param repo_name The name of repository.
   * @return Successfully.
   */
  getRepositoriesRepoNameLabelsResponse(repoName: string): __Observable<__StrictHttpResponse<Array<Label>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/repositories/${repoName}/labels`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Label>>;
      })
    );
  }
  /**
   * Get labels of a repository specified by the repo_name.
   * @param repo_name The name of repository.
   * @return Successfully.
   */
  getRepositoriesRepoNameLabels(repoName: string): __Observable<Array<Label>> {
    return this.getRepositoriesRepoNameLabelsResponse(repoName).pipe(
      __map(_r => _r.body as Array<Label>)
    );
  }

  /**
   * The endpoint returns the health stauts of the system.
   * @return The system health status.
   */
  getHealthResponse(): __Observable<__StrictHttpResponse<OverallHealthStatus>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/health`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<OverallHealthStatus>;
      })
    );
  }
  /**
   * The endpoint returns the health stauts of the system.
   * @return The system health status.
   */
  getHealth(): __Observable<OverallHealthStatus> {
    return this.getHealthResponse().pipe(
      __map(_r => _r.body as OverallHealthStatus)
    );
  }

  /**
   * Get the specified chart version
   * @param params The `ProductsService.GetChartrepoRepoChartsNameVersionParams` containing the following parameters:
   *
   * - `version`: The chart version
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   *
   * @return Successfully retrieved the chart version
   */
  getChartrepoRepoChartsNameVersionResponse(params: ProductsService.GetChartrepoRepoChartsNameVersionParams): __Observable<__StrictHttpResponse<ChartVersionDetails>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/chartrepo/${params.repo}/charts/${params.name}/${params.version}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ChartVersionDetails>;
      })
    );
  }
  /**
   * Get the specified chart version
   * @param params The `ProductsService.GetChartrepoRepoChartsNameVersionParams` containing the following parameters:
   *
   * - `version`: The chart version
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   *
   * @return Successfully retrieved the chart version
   */
  getChartrepoRepoChartsNameVersion(params: ProductsService.GetChartrepoRepoChartsNameVersionParams): __Observable<ChartVersionDetails> {
    return this.getChartrepoRepoChartsNameVersionResponse(params).pipe(
      __map(_r => _r.body as ChartVersionDetails)
    );
  }

  /**
   * Delete the specified chart version
   * @param params The `ProductsService.DeleteChartrepoRepoChartsNameVersionParams` containing the following parameters:
   *
   * - `version`: The chart version
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   */
  deleteChartrepoRepoChartsNameVersionResponse(params: ProductsService.DeleteChartrepoRepoChartsNameVersionParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/chartrepo/${params.repo}/charts/${params.name}/${params.version}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Delete the specified chart version
   * @param params The `ProductsService.DeleteChartrepoRepoChartsNameVersionParams` containing the following parameters:
   *
   * - `version`: The chart version
   *
   * - `repo`: The project name
   *
   * - `name`: The chart name
   */
  deleteChartrepoRepoChartsNameVersion(params: ProductsService.DeleteChartrepoRepoChartsNameVersionParams): __Observable<null> {
    return this.deleteChartrepoRepoChartsNameVersionResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint tags an existing image with another tag in this repo, source images can be in different repos or projects.
   * @param params The `ProductsService.PostRepositoriesRepoNameTagsParams` containing the following parameters:
   *
   * - `request`: Request to give source image and target tag.
   *
   * - `repo_name`: Relevant repository name.
   */
  postRepositoriesRepoNameTagsResponse(params: ProductsService.PostRepositoriesRepoNameTagsParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.request;

    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/repositories/${params.repoName}/tags`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint tags an existing image with another tag in this repo, source images can be in different repos or projects.
   * @param params The `ProductsService.PostRepositoriesRepoNameTagsParams` containing the following parameters:
   *
   * - `request`: Request to give source image and target tag.
   *
   * - `repo_name`: Relevant repository name.
   */
  postRepositoriesRepoNameTags(params: ProductsService.PostRepositoriesRepoNameTagsParams): __Observable<null> {
    return this.postRepositoriesRepoNameTagsResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint aims to retrieve tags from a relevant repository. If deployed with Notary, the signature property of response represents whether the image is singed or not. If the property is null, the image is unsigned.
   * @param params The `ProductsService.GetRepositoriesRepoNameTagsParams` containing the following parameters:
   *
   * - `repo_name`: Relevant repository name.
   *
   * - `label_id`: A label ID.
   *
   * - `detail`: Bool value indicating whether return detailed information of the tag, such as vulnerability scan info, if set to false, only tag name is returned.
   *
   * @return Get tags successfully.
   */
  getRepositoriesRepoNameTagsResponse(params: ProductsService.GetRepositoriesRepoNameTagsParams): __Observable<__StrictHttpResponse<Array<DetailedTag>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.labelId != null) __params = __params.set('label_id', params.labelId.toString());
    if (params.detail != null) __params = __params.set('detail', params.detail.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/repositories/${params.repoName}/tags`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DetailedTag>>;
      })
    );
  }
  /**
   * This endpoint aims to retrieve tags from a relevant repository. If deployed with Notary, the signature property of response represents whether the image is singed or not. If the property is null, the image is unsigned.
   * @param params The `ProductsService.GetRepositoriesRepoNameTagsParams` containing the following parameters:
   *
   * - `repo_name`: Relevant repository name.
   *
   * - `label_id`: A label ID.
   *
   * - `detail`: Bool value indicating whether return detailed information of the tag, such as vulnerability scan info, if set to false, only tag name is returned.
   *
   * @return Get tags successfully.
   */
  getRepositoriesRepoNameTags(params: ProductsService.GetRepositoriesRepoNameTagsParams): __Observable<Array<DetailedTag>> {
    return this.getRepositoriesRepoNameTagsResponse(params).pipe(
      __map(_r => _r.body as Array<DetailedTag>)
    );
  }

  /**
   * Stop a Retention job, only support "stop" action now.
   * @param params The `ProductsService.PatchRetentionsIdExecutionsEidParams` containing the following parameters:
   *
   * - `id`: Retention ID.
   *
   * - `eid`: Retention execution ID.
   *
   * - `action`: The action, only support "stop" now.
   */
  patchRetentionsIdExecutionsEidResponse(params: ProductsService.PatchRetentionsIdExecutionsEidParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.action;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/retentions/${params.id}/executions/${params.eid}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Stop a Retention job, only support "stop" action now.
   * @param params The `ProductsService.PatchRetentionsIdExecutionsEidParams` containing the following parameters:
   *
   * - `id`: Retention ID.
   *
   * - `eid`: Retention execution ID.
   *
   * - `action`: The action, only support "stop" now.
   */
  patchRetentionsIdExecutionsEid(params: ProductsService.PatchRetentionsIdExecutionsEidParams): __Observable<null> {
    return this.patchRetentionsIdExecutionsEidResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for update a given registry.
   * @param params The `ProductsService.PutRegistriesIdParams` containing the following parameters:
   *
   * - `repo_target`: Updates registry.
   *
   * - `id`: The registry's ID.
   */
  putRegistriesIdResponse(params: ProductsService.PutRegistriesIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.repoTarget;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/registries/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for update a given registry.
   * @param params The `ProductsService.PutRegistriesIdParams` containing the following parameters:
   *
   * - `repo_target`: Updates registry.
   *
   * - `id`: The registry's ID.
   */
  putRegistriesId(params: ProductsService.PutRegistriesIdParams): __Observable<null> {
    return this.putRegistriesIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for get specific registry.
   * @param id The registry ID.
   * @return Get registry successfully.
   */
  getRegistriesIdResponse(id: number): __Observable<__StrictHttpResponse<Registry>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/registries/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Registry>;
      })
    );
  }
  /**
   * This endpoint is for get specific registry.
   * @param id The registry ID.
   * @return Get registry successfully.
   */
  getRegistriesId(id: number): __Observable<Registry> {
    return this.getRegistriesIdResponse(id).pipe(
      __map(_r => _r.body as Registry)
    );
  }

  /**
   * This endpoint is for to delete specific registry.
   * @param id The registry's ID.
   */
  deleteRegistriesIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/registries/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for to delete specific registry.
   * @param id The registry's ID.
   */
  deleteRegistriesId(id: number): __Observable<null> {
    return this.deleteRegistriesIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint searches the available ldap users based on related configuration parameters. Support searched by input ladp configuration, load configuration from the system and specific filter.
   * @param username Registered user ID
   * @return Search ldap users successfully.
   */
  getLdapUsersSearchResponse(username?: string): __Observable<__StrictHttpResponse<Array<LdapUsers>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (username != null) __params = __params.set('username', username.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/ldap/users/search`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LdapUsers>>;
      })
    );
  }
  /**
   * This endpoint searches the available ldap users based on related configuration parameters. Support searched by input ladp configuration, load configuration from the system and specific filter.
   * @param username Registered user ID
   * @return Search ldap users successfully.
   */
  getLdapUsersSearch(username?: string): __Observable<Array<LdapUsers>> {
    return this.getLdapUsersSearchResponse(username).pipe(
      __map(_r => _r.body as Array<LdapUsers>)
    );
  }

  /**
   * Check the health of chart repository service.
   * @return Health status of chart repository service is returned.
   */
  getChartrepoHealthResponse(): __Observable<__StrictHttpResponse<{healthy?: boolean}>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/chartrepo/health`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<{healthy?: boolean}>;
      })
    );
  }
  /**
   * Check the health of chart repository service.
   * @return Health status of chart repository service is returned.
   */
  getChartrepoHealth(): __Observable<{healthy?: boolean}> {
    return this.getChartrepoHealthResponse().pipe(
      __map(_r => _r.body as {healthy?: boolean})
    );
  }

  /**
   * Create Retention Policy, you can reference metadatas API for the policy model.
   * You can check project metadatas to find whether a retention policy is already binded.
   * This method should only be called when no retention policy binded to project yet.
   * @param policy Create Retention Policy successfully.
   */
  postRetentionsResponse(policy: RetentionPolicy): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = policy;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/retentions`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Create Retention Policy, you can reference metadatas API for the policy model.
   * You can check project metadatas to find whether a retention policy is already binded.
   * This method should only be called when no retention policy binded to project yet.
   * @param policy Create Retention Policy successfully.
   */
  postRetentions(policy: RetentionPolicy): __Observable<null> {
    return this.postRetentionsResponse(policy).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is used to update description of the repository.
   * @param params The `ProductsService.PutRepositoriesRepoNameParams` containing the following parameters:
   *
   * - `repo_name`: The name of repository which will be deleted.
   *
   * - `description`: The description of the repository.
   */
  putRepositoriesRepoNameResponse(params: ProductsService.PutRepositoriesRepoNameParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.description;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/repositories/${params.repoName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is used to update description of the repository.
   * @param params The `ProductsService.PutRepositoriesRepoNameParams` containing the following parameters:
   *
   * - `repo_name`: The name of repository which will be deleted.
   *
   * - `description`: The description of the repository.
   */
  putRepositoriesRepoName(params: ProductsService.PutRepositoriesRepoNameParams): __Observable<null> {
    return this.putRepositoriesRepoNameResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint let user delete a repository with name.
   * @param repo_name The name of repository which will be deleted.
   */
  deleteRepositoriesRepoNameResponse(repoName: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/repositories/${repoName}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint let user delete a repository with name.
   * @param repo_name The name of repository which will be deleted.
   */
  deleteRepositoriesRepoName(repoName: string): __Observable<null> {
    return this.deleteRepositoriesRepoNameResponse(repoName).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Retruns the details of the specified scanner registration.
   * @param registration_id The scanner registration identifer.
   * @return The details of the scanner registration.
   */
  getScannersRegistrationIdResponse(registrationId: string): __Observable<__StrictHttpResponse<ScannerRegistration>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/scanners/${registrationId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ScannerRegistration>;
      })
    );
  }
  /**
   * Retruns the details of the specified scanner registration.
   * @param registration_id The scanner registration identifer.
   * @return The details of the scanner registration.
   */
  getScannersRegistrationId(registrationId: string): __Observable<ScannerRegistration> {
    return this.getScannersRegistrationIdResponse(registrationId).pipe(
      __map(_r => _r.body as ScannerRegistration)
    );
  }

  /**
   * Update project member relationship
   * @param params The `ProductsService.PutProjectsProjectIdMembersMidParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `mid`: Member ID.
   *
   * - `role`:
   */
  putProjectsProjectIdMembersMidResponse(params: ProductsService.PutProjectsProjectIdMembersMidParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    __body = params.role;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.projectId}/members/${params.mid}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Update project member relationship
   * @param params The `ProductsService.PutProjectsProjectIdMembersMidParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `mid`: Member ID.
   *
   * - `role`:
   */
  putProjectsProjectIdMembersMid(params: ProductsService.PutProjectsProjectIdMembersMidParams): __Observable<null> {
    return this.putProjectsProjectIdMembersMidResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get the project member information
   * @param params The `ProductsService.GetProjectsProjectIdMembersMidParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `mid`: The member ID
   *
   * @return Project member retrieved successfully.
   */
  getProjectsProjectIdMembersMidResponse(params: ProductsService.GetProjectsProjectIdMembersMidParams): __Observable<__StrictHttpResponse<ProjectMemberEntity>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/members/${params.mid}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProjectMemberEntity>;
      })
    );
  }
  /**
   * Get the project member information
   * @param params The `ProductsService.GetProjectsProjectIdMembersMidParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `mid`: The member ID
   *
   * @return Project member retrieved successfully.
   */
  getProjectsProjectIdMembersMid(params: ProductsService.GetProjectsProjectIdMembersMidParams): __Observable<ProjectMemberEntity> {
    return this.getProjectsProjectIdMembersMidResponse(params).pipe(
      __map(_r => _r.body as ProjectMemberEntity)
    );
  }

  /**
   * @param params The `ProductsService.DeleteProjectsProjectIdMembersMidParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `mid`: Member ID.
   */
  deleteProjectsProjectIdMembersMidResponse(params: ProductsService.DeleteProjectsProjectIdMembersMidParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/projects/${params.projectId}/members/${params.mid}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `ProductsService.DeleteProjectsProjectIdMembersMidParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `mid`: Member ID.
   */
  deleteProjectsProjectIdMembersMid(params: ProductsService.DeleteProjectsProjectIdMembersMidParams): __Observable<null> {
    return this.deleteProjectsProjectIdMembersMidResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint adds the selected available ldap users to harbor based on related configuration parameters from the system. System will try to guess the user email address and realname, add to harbor user information.
   * If have errors when import user, will return the list of importing failed uid and the failed reason.
   * @param uid_list The uid listed for importing. This list will check users validity of ldap service based on configuration from the system.
   */
  postLdapUsersImportResponse(uidList: LdapImportUsers): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = uidList;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/ldap/users/import`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint adds the selected available ldap users to harbor based on related configuration parameters from the system. System will try to guess the user email address and realname, add to harbor user information.
   * If have errors when import user, will return the list of importing failed uid and the failed reason.
   * @param uid_list The uid listed for importing. This list will check users validity of ldap service based on configuration from the system.
   */
  postLdapUsersImport(uidList: LdapImportUsers): __Observable<null> {
    return this.postLdapUsersImportResponse(uidList).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for downloading a default root certificate.
   */
  getSysteminfoGetcertResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systeminfo/getcert`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for downloading a default root certificate.
   */
  getSysteminfoGetcert(): __Observable<null> {
    return this.getSysteminfoGetcertResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Update hard limits of the specified quota
   * @param params The `ProductsService.PutQuotasIdParams` containing the following parameters:
   *
   * - `id`: Quota ID
   *
   * - `hard`: The new hard limits for the quota
   */
  putQuotasIdResponse(params: ProductsService.PutQuotasIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.hard;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/quotas/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Update hard limits of the specified quota
   * @param params The `ProductsService.PutQuotasIdParams` containing the following parameters:
   *
   * - `id`: Quota ID
   *
   * - `hard`: The new hard limits for the quota
   */
  putQuotasId(params: ProductsService.PutQuotasIdParams): __Observable<null> {
    return this.putQuotasIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get the specified quota
   * @param id Quota ID
   * @return Successfully retrieved the quota.
   */
  getQuotasIdResponse(id: number): __Observable<__StrictHttpResponse<Quota>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/quotas/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Quota>;
      })
    );
  }
  /**
   * Get the specified quota
   * @param id Quota ID
   * @return Successfully retrieved the quota.
   */
  getQuotasId(id: number): __Observable<Quota> {
    return this.getQuotasIdResponse(id).pipe(
      __map(_r => _r.body as Quota)
    );
  }

  /**
   * This endpoint add an immutable tag rule to the project
   * @param params The `ProductsService.PostProjectsProjectIdImmutabletagrulesParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `immutabletagrule`:
   */
  postProjectsProjectIdImmutabletagrulesResponse(params: ProductsService.PostProjectsProjectIdImmutabletagrulesParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.immutabletagrule;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects/${params.projectId}/immutabletagrules`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint add an immutable tag rule to the project
   * @param params The `ProductsService.PostProjectsProjectIdImmutabletagrulesParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `immutabletagrule`:
   */
  postProjectsProjectIdImmutabletagrules(params: ProductsService.PostProjectsProjectIdImmutabletagrulesParams): __Observable<null> {
    return this.postProjectsProjectIdImmutabletagrulesResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint returns the immutable tag rules of a project
   * @param project_id Relevant project ID.
   * @return List project immutable tag rules successfully.
   */
  getProjectsProjectIdImmutabletagrulesResponse(projectId: number): __Observable<__StrictHttpResponse<Array<ImmutableTagRule>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${projectId}/immutabletagrules`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ImmutableTagRule>>;
      })
    );
  }
  /**
   * This endpoint returns the immutable tag rules of a project
   * @param project_id Relevant project ID.
   * @return List project immutable tag rules successfully.
   */
  getProjectsProjectIdImmutabletagrules(projectId: number): __Observable<Array<ImmutableTagRule>> {
    return this.getProjectsProjectIdImmutabletagrulesResponse(projectId).pipe(
      __map(_r => _r.body as Array<ImmutableTagRule>)
    );
  }

  /**
   * This endpoint let user update policy.
   * @param params The `ProductsService.PutReplicationPoliciesIdParams` containing the following parameters:
   *
   * - `policy`: The replication policy model.
   *
   * - `id`: policy ID
   */
  putReplicationPoliciesIdResponse(params: ProductsService.PutReplicationPoliciesIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.policy;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/replication/policies/${params.id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint let user update policy.
   * @param params The `ProductsService.PutReplicationPoliciesIdParams` containing the following parameters:
   *
   * - `policy`: The replication policy model.
   *
   * - `id`: policy ID
   */
  putReplicationPoliciesId(params: ProductsService.PutReplicationPoliciesIdParams): __Observable<null> {
    return this.putReplicationPoliciesIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint let user get replication policy by specific ID.
   * @param id policy ID
   * @return Get the replication policy successfully.
   */
  getReplicationPoliciesIdResponse(id: number): __Observable<__StrictHttpResponse<ReplicationPolicy>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/replication/policies/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ReplicationPolicy>;
      })
    );
  }
  /**
   * This endpoint let user get replication policy by specific ID.
   * @param id policy ID
   * @return Get the replication policy successfully.
   */
  getReplicationPoliciesId(id: number): __Observable<ReplicationPolicy> {
    return this.getReplicationPoliciesIdResponse(id).pipe(
      __map(_r => _r.body as ReplicationPolicy)
    );
  }

  /**
   * Delete the replication policy specified by ID.
   * @param id Replication policy ID
   */
  deleteReplicationPoliciesIdResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/replication/policies/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Delete the replication policy specified by ID.
   * @param id Replication policy ID
   */
  deleteReplicationPoliciesId(id: number): __Observable<null> {
    return this.deleteReplicationPoliciesIdResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for user to create a new registry.
   * @param registry New created registry.
   */
  postRegistriesResponse(registry: Registry): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registry;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/registries`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for user to create a new registry.
   * @param registry New created registry.
   */
  postRegistries(registry: Registry): __Observable<null> {
    return this.postRegistriesResponse(registry).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint let user list filtered registries by name, if name is nil, list returns all registries.
   * @param name Registry's name.
   * @return List registries successfully.
   */
  getRegistriesResponse(name?: string): __Observable<__StrictHttpResponse<Array<Registry>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (name != null) __params = __params.set('name', name.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/registries`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Registry>>;
      })
    );
  }
  /**
   * This endpoint let user list filtered registries by name, if name is nil, list returns all registries.
   * @param name Registry's name.
   * @return List registries successfully.
   */
  getRegistries(name?: string): __Observable<Array<Registry>> {
    return this.getRegistriesResponse(name).pipe(
      __map(_r => _r.body as Array<Registry>)
    );
  }

  /**
   * Create project member relationship, the member can be one of the user_member and group_member,  The user_member need to specify user_id or username. If the user already exist in harbor DB, specify the user_id,  If does not exist in harbor DB, it will SearchAndOnBoard the user. The group_member need to specify id or ldap_group_dn. If the group already exist in harbor DB. specify the user group's id,  If does not exist, it will SearchAndOnBoard the group.
   * @param params The `ProductsService.PostProjectsProjectIdMembersParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `project_member`:
   */
  postProjectsProjectIdMembersResponse(params: ProductsService.PostProjectsProjectIdMembersParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.projectMember;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/projects/${params.projectId}/members`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Create project member relationship, the member can be one of the user_member and group_member,  The user_member need to specify user_id or username. If the user already exist in harbor DB, specify the user_id,  If does not exist in harbor DB, it will SearchAndOnBoard the user. The group_member need to specify id or ldap_group_dn. If the group already exist in harbor DB. specify the user group's id,  If does not exist, it will SearchAndOnBoard the group.
   * @param params The `ProductsService.PostProjectsProjectIdMembersParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `project_member`:
   */
  postProjectsProjectIdMembers(params: ProductsService.PostProjectsProjectIdMembersParams): __Observable<null> {
    return this.postProjectsProjectIdMembersResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get all project member information
   * @param params The `ProductsService.GetProjectsProjectIdMembersParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `entityname`: The entity name to search.
   *
   * @return Get project members successfully.
   */
  getProjectsProjectIdMembersResponse(params: ProductsService.GetProjectsProjectIdMembersParams): __Observable<__StrictHttpResponse<Array<ProjectMemberEntity>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.entityname != null) __params = __params.set('entityname', params.entityname.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${params.projectId}/members`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProjectMemberEntity>>;
      })
    );
  }
  /**
   * Get all project member information
   * @param params The `ProductsService.GetProjectsProjectIdMembersParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `entityname`: The entity name to search.
   *
   * @return Get project members successfully.
   */
  getProjectsProjectIdMembers(params: ProductsService.GetProjectsProjectIdMembersParams): __Observable<Array<ProjectMemberEntity>> {
    return this.getProjectsProjectIdMembersResponse(params).pipe(
      __map(_r => _r.body as Array<ProjectMemberEntity>)
    );
  }

  /**
   * This endpoint is for enable/disable quota. When quota is disabled, no resource require/release in image/chart push and delete.
   * @param switcher undefined
   */
  putInternalSwitchquotaResponse(switcher: QuotaSwitcher): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = switcher;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/internal/switchquota`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for enable/disable quota. When quota is disabled, no resource require/release in image/chart push and delete.
   * @param switcher undefined
   */
  putInternalSwitchquota(switcher: QuotaSwitcher): __Observable<null> {
    return this.putInternalSwitchquotaResponse(switcher).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for modifying system configurations that only provides for admin user.
   * @param configurations The configuration map can contain a subset of the attributes of the schema, which are to be updated.
   */
  putConfigurationsResponse(configurations: Configurations): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = configurations;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/configurations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for modifying system configurations that only provides for admin user.
   * @param configurations The configuration map can contain a subset of the attributes of the schema, which are to be updated.
   */
  putConfigurations(configurations: Configurations): __Observable<null> {
    return this.putConfigurationsResponse(configurations).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint is for retrieving system configurations that only provides for admin user.
   * @return Get system configurations successfully. The response body is a map.
   */
  getConfigurationsResponse(): __Observable<__StrictHttpResponse<ConfigurationsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/configurations`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ConfigurationsResponse>;
      })
    );
  }
  /**
   * This endpoint is for retrieving system configurations that only provides for admin user.
   * @return Get system configurations successfully. The response body is a map.
   */
  getConfigurations(): __Observable<ConfigurationsResponse> {
    return this.getConfigurationsResponse().pipe(
      __map(_r => _r.body as ConfigurationsResponse)
    );
  }

  /**
   * Test the OIDC endpoint, the setting of the endpoint is provided in the request.  This API can only be called by system admin.
   * @param endpoint Request body for OIDC endpoint to be tested.
   */
  postSystemOidcPingResponse(endpoint: {url?: string, verify_cert?: boolean}): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = endpoint;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/system/oidc/ping`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Test the OIDC endpoint, the setting of the endpoint is provided in the request.  This API can only be called by system admin.
   * @param endpoint Request body for OIDC endpoint to be tested.
   */
  postSystemOidcPing(endpoint: {url?: string, verify_cert?: boolean}): __Observable<null> {
    return this.postSystemOidcPingResponse(endpoint).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Pings scanner adapter to test endpoint URL and authorization settings.
   * @param settings A scanner registration settings to be tested.
   */
  postScannersPingResponse(settings: ScannerRegistrationSettings): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = settings;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/scanners/ping`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Pings scanner adapter to test endpoint URL and authorization settings.
   * @param settings A scanner registration settings to be tested.
   */
  postScannersPing(settings: ScannerRegistrationSettings): __Observable<null> {
    return this.postScannersPingResponse(settings).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Trigger a scan targeting the artifact identified by the repo_name and tag.
   * @param params The `ProductsService.PostRepositoriesRepoNameTagsTagScanParams` containing the following parameters:
   *
   * - `tag`: Tag name
   *
   * - `repo_name`: Repository name
   */
  postRepositoriesRepoNameTagsTagScanResponse(params: ProductsService.PostRepositoriesRepoNameTagsTagScanParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/repositories/${params.repoName}/tags/${params.tag}/scan`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Trigger a scan targeting the artifact identified by the repo_name and tag.
   * @param params The `ProductsService.PostRepositoriesRepoNameTagsTagScanParams` containing the following parameters:
   *
   * - `tag`: Tag name
   *
   * - `repo_name`: Repository name
   */
  postRepositoriesRepoNameTagsTagScan(params: ProductsService.PostRepositoriesRepoNameTagsTagScanParams): __Observable<null> {
    return this.postRepositoriesRepoNameTagsTagScanResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This API is for retrieving general system info, this can be called by anonymous request.
   * @return Get general info successfully.
   */
  getSysteminfoResponse(): __Observable<__StrictHttpResponse<GeneralInfo>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/systeminfo`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GeneralInfo>;
      })
    );
  }
  /**
   * This API is for retrieving general system info, this can be called by anonymous request.
   * @return Get general info successfully.
   */
  getSysteminfo(): __Observable<GeneralInfo> {
    return this.getSysteminfoResponse().pipe(
      __map(_r => _r.body as GeneralInfo)
    );
  }

  /**
   * This endpoint lets user search repositories accompanying with relevant project ID and repo name. Repositories can be sorted by repo name, creation_time, update_time in either ascending or descending order.
   * @param params The `ProductsService.GetRepositoriesParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `sort`: Sort method, valid values include: 'name', '-name', 'creation_time', '-creation_time', 'update_time', '-update_time'. Here '-' stands for descending order.
   *
   * - `q`: Repo name for filtering results.
   *
   * - `page_size`: The size of per page, default is 10, maximum is 100.
   *
   * - `page`: The page number, default is 1.
   *
   * - `label_id`: The ID of label used to filter the result.
   *
   * @return Get repositories successfully.
   */
  getRepositoriesResponse(params: ProductsService.GetRepositoriesParams): __Observable<__StrictHttpResponse<Array<Repository>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.projectId != null) __params = __params.set('project_id', params.projectId.toString());
    if (params.sort != null) __params = __params.set('sort', params.sort.toString());
    if (params.q != null) __params = __params.set('q', params.q.toString());
    if (params.pageSize != null) __params = __params.set('page_size', params.pageSize.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.labelId != null) __params = __params.set('label_id', params.labelId.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/repositories`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Repository>>;
      })
    );
  }
  /**
   * This endpoint lets user search repositories accompanying with relevant project ID and repo name. Repositories can be sorted by repo name, creation_time, update_time in either ascending or descending order.
   * @param params The `ProductsService.GetRepositoriesParams` containing the following parameters:
   *
   * - `project_id`: Relevant project ID.
   *
   * - `sort`: Sort method, valid values include: 'name', '-name', 'creation_time', '-creation_time', 'update_time', '-update_time'. Here '-' stands for descending order.
   *
   * - `q`: Repo name for filtering results.
   *
   * - `page_size`: The size of per page, default is 10, maximum is 100.
   *
   * - `page`: The page number, default is 1.
   *
   * - `label_id`: The ID of label used to filter the result.
   *
   * @return Get repositories successfully.
   */
  getRepositories(params: ProductsService.GetRepositoriesParams): __Observable<Array<Repository>> {
    return this.getRepositoriesResponse(params).pipe(
      __map(_r => _r.body as Array<Repository>)
    );
  }

  /**
   * This endpoint is for user to get the log of one task.
   * @param params The `ProductsService.GetReplicationExecutionsIdTasksTaskIdLogParams` containing the following parameters:
   *
   * - `task_id`: The task ID.
   *
   * - `id`: The execution ID.
   */
  getReplicationExecutionsIdTasksTaskIdLogResponse(params: ProductsService.GetReplicationExecutionsIdTasksTaskIdLogParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/replication/executions/${params.id}/tasks/${params.taskId}/log`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for user to get the log of one task.
   * @param params The `ProductsService.GetReplicationExecutionsIdTasksTaskIdLogParams` containing the following parameters:
   *
   * - `task_id`: The task ID.
   *
   * - `id`: The execution ID.
   */
  getReplicationExecutionsIdTasksTaskIdLog(params: ProductsService.GetReplicationExecutionsIdTasksTaskIdLogParams): __Observable<null> {
    return this.getReplicationExecutionsIdTasksTaskIdLogResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Delete the label from the image specified by the repo_name and tag.
   * @param params The `ProductsService.DeleteRepositoriesRepoNameTagsTagLabelsLabelIdParams` containing the following parameters:
   *
   * - `tag`: The tag of the image.
   *
   * - `repo_name`: The name of repository.
   *
   * - `label_id`: The ID of label.
   */
  deleteRepositoriesRepoNameTagsTagLabelsLabelIdResponse(params: ProductsService.DeleteRepositoriesRepoNameTagsTagLabelsLabelIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/repositories/${params.repoName}/tags/${params.tag}/labels/${params.labelId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Delete the label from the image specified by the repo_name and tag.
   * @param params The `ProductsService.DeleteRepositoriesRepoNameTagsTagLabelsLabelIdParams` containing the following parameters:
   *
   * - `tag`: The tag of the image.
   *
   * - `repo_name`: The name of repository.
   *
   * - `label_id`: The ID of label.
   */
  deleteRepositoriesRepoNameTagsTagLabelsLabelId(params: ProductsService.DeleteRepositoriesRepoNameTagsTagLabelsLabelIdParams): __Observable<null> {
    return this.deleteRepositoriesRepoNameTagsTagLabelsLabelIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Get the metadata of the specified scanner registration, including the capabilities and customzied properties.
   * @param registration_id The scanner registration identifier.
   * @return The metadata of the specified scanner adapter
   */
  getScannersRegistrationIdMetadataResponse(registrationId: string): __Observable<__StrictHttpResponse<ScannerAdapterMetadata>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/scanners/${registrationId}/metadata`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ScannerAdapterMetadata>;
      })
    );
  }
  /**
   * Get the metadata of the specified scanner registration, including the capabilities and customzied properties.
   * @param registration_id The scanner registration identifier.
   * @return The metadata of the specified scanner adapter
   */
  getScannersRegistrationIdMetadata(registrationId: string): __Observable<ScannerAdapterMetadata> {
    return this.getScannersRegistrationIdMetadataResponse(registrationId).pipe(
      __map(_r => _r.body as ScannerAdapterMetadata)
    );
  }

  /**
   * This endpoint is for syncing all repositories of registry with database.
   */
  postInternalSyncregistryResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/internal/syncregistry`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * This endpoint is for syncing all repositories of registry with database.
   */
  postInternalSyncregistry(): __Observable<null> {
    return this.postInternalSyncregistryResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * This endpoint returns last trigger information of project webhook policy.
   * @param project_id Relevant project ID.
   * @return Test webhook connection successfully.
   */
  getProjectsProjectIdWebhookLasttriggerResponse(projectId: number): __Observable<__StrictHttpResponse<Array<WebhookLastTrigger>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/projects/${projectId}/webhook/lasttrigger`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<WebhookLastTrigger>>;
      })
    );
  }
  /**
   * This endpoint returns last trigger information of project webhook policy.
   * @param project_id Relevant project ID.
   * @return Test webhook connection successfully.
   */
  getProjectsProjectIdWebhookLasttrigger(projectId: number): __Observable<Array<WebhookLastTrigger>> {
    return this.getProjectsProjectIdWebhookLasttriggerResponse(projectId).pipe(
      __map(_r => _r.body as Array<WebhookLastTrigger>)
    );
  }
}

module ProductsService {

  /**
   * Parameters for putUsersUserIdCliSecret
   */
  export interface PutUsersUserIdCliSecretParams {

    /**
     * User ID
     */
    userId: number;

    /**
     * JSON object that includes the new secret
     */
    inputSecret: {secret?: string};
  }

  /**
   * Parameters for postChartrepoRepoChartsNameVersionLabels
   */
  export interface PostChartrepoRepoChartsNameVersionLabelsParams {

    /**
     * The chart version
     */
    version: string;

    /**
     * The project name
     */
    repo: string;

    /**
     * The chart name
     */
    name: string;

    /**
     * The label being marked to the chart version
     */
    label: Label;
  }

  /**
   * Parameters for getChartrepoRepoChartsNameVersionLabels
   */
  export interface GetChartrepoRepoChartsNameVersionLabelsParams {

    /**
     * The chart version
     */
    version: string;

    /**
     * The project name
     */
    repo: string;

    /**
     * The chart name
     */
    name: string;
  }

  /**
   * Parameters for getUsersSearch
   */
  export interface GetUsersSearchParams {

    /**
     * Username for filtering results.
     */
    username: string;

    /**
     * The size of per page.
     */
    pageSize?: number;

    /**
     * The page number, default is 1.
     */
    page?: number;
  }

  /**
   * Parameters for getLabels
   */
  export interface GetLabelsParams {

    /**
     * The label scope. Valid values are g and p. g for global labels and p for project labels.
     */
    scope: string;

    /**
     * Relevant project ID, required when scope is p.
     */
    projectId?: number;

    /**
     * The size of per page.
     */
    pageSize?: number;

    /**
     * The page nubmer.
     */
    page?: number;

    /**
     * The label name.
     */
    name?: string;
  }

  /**
   * Parameters for getRepositoriesRepoNameTagsTagManifest
   */
  export interface GetRepositoriesRepoNameTagsTagManifestParams {

    /**
     * Tag name
     */
    tag: string;

    /**
     * Repository name
     */
    repoName: string;

    /**
     * The version of manifest, valid value are "v1" and "v2", default is "v2"
     */
    version?: string;
  }

  /**
   * Parameters for getRegistriesIdNamespace
   */
  export interface GetRegistriesIdNamespaceParams {

    /**
     * The registry ID.
     */
    id: number;

    /**
     * The name of namespace.
     */
    name?: string;
  }

  /**
   * Parameters for getChartrepoRepoChartsName
   */
  export interface GetChartrepoRepoChartsNameParams {

    /**
     * The project name
     */
    repo: string;

    /**
     * The chart name
     */
    name: string;
  }

  /**
   * Parameters for deleteChartrepoRepoChartsName
   */
  export interface DeleteChartrepoRepoChartsNameParams {

    /**
     * The project name
     */
    repo: string;

    /**
     * The chart name
     */
    name: string;
  }

  /**
   * Parameters for postRepositoriesRepoNameTagsTagLabels
   */
  export interface PostRepositoriesRepoNameTagsTagLabelsParams {

    /**
     * The tag of the image.
     */
    tag: string;

    /**
     * The name of repository.
     */
    repoName: string;

    /**
     * Only the ID property is required.
     */
    label: Label;
  }

  /**
   * Parameters for getRepositoriesRepoNameTagsTagLabels
   */
  export interface GetRepositoriesRepoNameTagsTagLabelsParams {

    /**
     * The tag of the image.
     */
    tag: string;

    /**
     * The name of repository.
     */
    repoName: string;
  }

  /**
   * Parameters for getProjectsProjectIdWebhookJobs
   */
  export interface GetProjectsProjectIdWebhookJobsParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * The policy ID.
     */
    policyId: number;
  }

  /**
   * Parameters for putProjectsProjectIdImmutabletagrulesId
   */
  export interface PutProjectsProjectIdImmutabletagrulesIdParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * Immutable tag rule ID.
     */
    id: number;
    immutabletagrule?: ImmutableTagRule;
  }

  /**
   * Parameters for deleteProjectsProjectIdImmutabletagrulesId
   */
  export interface DeleteProjectsProjectIdImmutabletagrulesIdParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * Immutable tag rule ID.
     */
    id: number;
  }

  /**
   * Parameters for postProjectsProjectIdRobots
   */
  export interface PostProjectsProjectIdRobotsParams {

    /**
     * Request body of creating a robot account.
     */
    robot: RobotAccountCreate;

    /**
     * Relevant project ID.
     */
    projectId: number;
  }

  /**
   * Parameters for getRepositoriesRepoNameTagsTagScanUuidLog
   */
  export interface GetRepositoriesRepoNameTagsTagScanUuidLogParams {

    /**
     * the scan unique identifier
     */
    uuid: string;

    /**
     * Tag name
     */
    tag: string;

    /**
     * Repository name
     */
    repoName: string;
  }

  /**
   * Parameters for getLogs
   */
  export interface GetLogsParams {

    /**
     * Username of the operator.
     */
    username?: string;

    /**
     * The name of tag
     */
    tag?: string;

    /**
     * The name of repository
     */
    repository?: string;

    /**
     * The size of per page, default is 10, maximum is 100.
     */
    pageSize?: number;

    /**
     * The page number, default is 1.
     */
    page?: number;

    /**
     * The operation
     */
    operation?: string;

    /**
     * The end timestamp
     */
    endTimestamp?: string;

    /**
     * The begin timestamp
     */
    beginTimestamp?: string;
  }

  /**
   * Parameters for postChartrepoRepoProv
   */
  export interface PostChartrepoRepoProvParams {

    /**
     * The project name
     */
    repo: string;

    /**
     * The provance file
     */
    prov: Blob;
  }

  /**
   * Parameters for putProjectsProjectIdMetadatasMetaName
   */
  export interface PutProjectsProjectIdMetadatasMetaNameParams {

    /**
     * The ID of project.
     */
    projectId: number;

    /**
     * The name of metadat.
     */
    metaName: string;
  }

  /**
   * Parameters for getProjectsProjectIdMetadatasMetaName
   */
  export interface GetProjectsProjectIdMetadatasMetaNameParams {

    /**
     * Project ID for filtering results.
     */
    projectId: number;

    /**
     * The name of metadat.
     */
    metaName: string;
  }

  /**
   * Parameters for deleteProjectsProjectIdMetadatasMetaName
   */
  export interface DeleteProjectsProjectIdMetadatasMetaNameParams {

    /**
     * The ID of project.
     */
    projectId: number;

    /**
     * The name of metadat.
     */
    metaName: string;
  }

  /**
   * Parameters for getRetentionsIdExecutionsEidTasks
   */
  export interface GetRetentionsIdExecutionsEidTasksParams {

    /**
     * Retention ID.
     */
    id: number;

    /**
     * Retention execution ID.
     */
    eid: number;
  }

  /**
   * Parameters for deleteRepositoriesRepoNameLabelsLabelId
   */
  export interface DeleteRepositoriesRepoNameLabelsLabelIdParams {

    /**
     * The name of repository.
     */
    repoName: string;

    /**
     * The ID of label.
     */
    labelId: number;
  }

  /**
   * Parameters for putRetentionsId
   */
  export interface PutRetentionsIdParams {
    policy: RetentionPolicy;

    /**
     * Retention ID.
     */
    id: number;
  }

  /**
   * Parameters for postProjectsProjectIdWebhookPoliciesTest
   */
  export interface PostProjectsProjectIdWebhookPoliciesTestParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * Only property "targets" needed.
     */
    policy: WebhookPolicy;
  }

  /**
   * Parameters for getUsers
   */
  export interface GetUsersParams {

    /**
     * Username for filtering results.
     */
    username?: string;

    /**
     * The size of per page.
     */
    pageSize?: number;

    /**
     * The page number, default is 1.
     */
    page?: number;

    /**
     * Email for filtering results.
     */
    email?: string;
  }

  /**
   * Parameters for getRetentionsIdExecutionsEidTasksTid
   */
  export interface GetRetentionsIdExecutionsEidTasksTidParams {

    /**
     * Retention execution ID.
     */
    tid: number;

    /**
     * Retention ID.
     */
    id: number;

    /**
     * Retention execution ID.
     */
    eid: number;
  }

  /**
   * Parameters for getProjectsProjectIdLogs
   */
  export interface GetProjectsProjectIdLogsParams {

    /**
     * Relevant project ID
     */
    projectId: number;

    /**
     * Username of the operator.
     */
    username?: string;

    /**
     * The name of tag
     */
    tag?: string;

    /**
     * The name of repository
     */
    repository?: string;

    /**
     * The size of per page, default is 10, maximum is 100.
     */
    pageSize?: number;

    /**
     * The page number, default is 1.
     */
    page?: number;

    /**
     * The operation
     */
    operation?: string;

    /**
     * The end timestamp
     */
    endTimestamp?: string;

    /**
     * The begin timestamp
     */
    beginTimestamp?: string;
  }

  /**
   * Parameters for putUsergroupsGroupId
   */
  export interface PutUsergroupsGroupIdParams {

    /**
     * Group ID
     */
    groupId: number;
    usergroup?: UserGroup;
  }

  /**
   * Parameters for getQuotas
   */
  export interface GetQuotasParams {

    /**
     * Sort method, valid values include:
     * 'hard.resource_name', '-hard.resource_name', 'used.resource_name', '-used.resource_name'.
     * Here '-' stands for descending order, resource_name should be the real resource name of the quota.
     */
    sort?: string;

    /**
     * The reference id of quota.
     */
    referenceId?: string;

    /**
     * The reference type of quota.
     */
    reference?: string;

    /**
     * The size of per page, default is 10, maximum is 100.
     */
    pageSize?: number;

    /**
     * The page number, default is 1.
     */
    page?: number;
  }

  /**
   * Parameters for postChartrepoRepoCharts
   */
  export interface PostChartrepoRepoChartsParams {

    /**
     * The project name
     */
    repo: string;

    /**
     * The chart file
     */
    chart: Blob;

    /**
     * The provance file
     */
    prov?: Blob;
  }

  /**
   * Parameters for putProjectsProjectId
   */
  export interface PutProjectsProjectIdParams {

    /**
     * Selected project ID.
     */
    projectId: number;

    /**
     * Updates of project.
     */
    project: ProjectReq;
  }

  /**
   * Parameters for getUsersCurrentPermissions
   */
  export interface GetUsersCurrentPermissionsParams {

    /**
     * Get permissions of the scope
     */
    scope?: string;

    /**
     * If true, the resources in the response are relative to the scope,
     * eg for resource '/project/1/repository' if relative is 'true' then the resource in response will be 'repository'.
     */
    relative?: boolean;
  }

  /**
   * Parameters for putLabelsId
   */
  export interface PutLabelsIdParams {

    /**
     * The updated label json object.
     */
    label: Label;

    /**
     * Label ID
     */
    id: number;
  }

  /**
   * Parameters for putProjectsProjectIdWebhookPoliciesPolicyId
   */
  export interface PutProjectsProjectIdWebhookPoliciesPolicyIdParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * The id of webhook policy.
     */
    policyId: number;

    /**
     * All properties needed except "id", "project_id", "creation_time", "update_time".
     */
    policy: WebhookPolicy;
  }

  /**
   * Parameters for getProjectsProjectIdWebhookPoliciesPolicyId
   */
  export interface GetProjectsProjectIdWebhookPoliciesPolicyIdParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * The id of webhook policy.
     */
    policyId: number;
  }

  /**
   * Parameters for deleteProjectsProjectIdWebhookPoliciesPolicyId
   */
  export interface DeleteProjectsProjectIdWebhookPoliciesPolicyIdParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * The id of webhook policy.
     */
    policyId: number;
  }

  /**
   * Parameters for getProjects
   */
  export interface GetProjectsParams {

    /**
     * The project is public or private.
     */
    public?: boolean;

    /**
     * The size of per page, default is 10, maximum is 100.
     */
    pageSize?: number;

    /**
     * The page number, default is 1.
     */
    page?: number;

    /**
     * The name of project owner.
     */
    owner?: string;

    /**
     * The name of project.
     */
    name?: string;
  }

  /**
   * Parameters for postProjectsProjectIdMetadatas
   */
  export interface PostProjectsProjectIdMetadatasParams {

    /**
     * Selected project ID.
     */
    projectId: number;

    /**
     * The metadata of project.
     */
    metadata: ProjectMetadata;
  }

  /**
   * Parameters for getLdapGroupsSearch
   */
  export interface GetLdapGroupsSearchParams {

    /**
     * Ldap group name
     */
    groupname?: string;

    /**
     * The LDAP group DN
     */
    groupdn?: string;
  }

  /**
   * Parameters for putProjectsProjectIdRobotsRobotId
   */
  export interface PutProjectsProjectIdRobotsRobotIdParams {

    /**
     * The ID of robot account.
     */
    robotId: number;

    /**
     * Request body of enable/disable a robot account.
     */
    robot: RobotAccountUpdate;

    /**
     * Relevant project ID.
     */
    projectId: number;
  }

  /**
   * Parameters for getProjectsProjectIdRobotsRobotId
   */
  export interface GetProjectsProjectIdRobotsRobotIdParams {

    /**
     * The ID of robot account.
     */
    robotId: number;

    /**
     * Relevant project ID.
     */
    projectId: number;
  }

  /**
   * Parameters for deleteProjectsProjectIdRobotsRobotId
   */
  export interface DeleteProjectsProjectIdRobotsRobotIdParams {

    /**
     * The ID of robot account.
     */
    robotId: number;

    /**
     * Relevant project ID.
     */
    projectId: number;
  }

  /**
   * Parameters for getRepositoriesRepoNameTagsTag
   */
  export interface GetRepositoriesRepoNameTagsTagParams {

    /**
     * Tag of the repository.
     */
    tag: string;

    /**
     * Relevant repository name.
     */
    repoName: string;
  }

  /**
   * Parameters for deleteRepositoriesRepoNameTagsTag
   */
  export interface DeleteRepositoriesRepoNameTagsTagParams {

    /**
     * Tag of a repository.
     */
    tag: string;

    /**
     * The name of repository which will be deleted.
     */
    repoName: string;
  }

  /**
   * Parameters for putUsersUserId
   */
  export interface PutUsersUserIdParams {

    /**
     * Registered user ID
     */
    userId: number;

    /**
     * Only email, realname and comment can be modified.
     */
    profile: UserProfile;
  }

  /**
   * Parameters for getReplicationPolicies
   */
  export interface GetReplicationPoliciesParams {

    /**
     * The size of per page.
     */
    pageSize?: number;

    /**
     * The page nubmer.
     */
    page?: number;

    /**
     * The replication policy name.
     */
    name?: string;
  }

  /**
   * Parameters for postRetentionsIdExecutions
   */
  export interface PostRetentionsIdExecutionsParams {

    /**
     * Retention ID.
     */
    id: number;
    action: {dry_run?: boolean};
  }

  /**
   * Parameters for putUsersUserIdSysadmin
   */
  export interface PutUsersUserIdSysadminParams {

    /**
     * Registered user ID
     */
    userId: number;

    /**
     * Toggle a user to admin or not.
     */
    hasAdminRole: HasAdminRole;
  }

  /**
   * Parameters for putUsersUserIdPassword
   */
  export interface PutUsersUserIdPasswordParams {

    /**
     * Registered user ID.
     */
    userId: number;

    /**
     * Password to be updated, the attribute 'old_password' is optional when the API is called by the system administrator.
     */
    password: Password;
  }

  /**
   * Parameters for postProjectsProjectIdWebhookPolicies
   */
  export interface PostProjectsProjectIdWebhookPoliciesParams {

    /**
     * Relevant project ID
     */
    projectId: number;

    /**
     * Properties "targets" and "event_types" needed.
     */
    policy: WebhookPolicy;
  }

  /**
   * Parameters for deleteChartrepoRepoChartsNameVersionLabelsId
   */
  export interface DeleteChartrepoRepoChartsNameVersionLabelsIdParams {

    /**
     * The chart version
     */
    version: string;

    /**
     * The project name
     */
    repo: string;

    /**
     * The chart name
     */
    name: string;

    /**
     * The label ID
     */
    id: number;
  }

  /**
   * Parameters for getReplicationExecutions
   */
  export interface GetReplicationExecutionsParams {

    /**
     * The trigger mode.
     */
    trigger?: string;

    /**
     * The execution status.
     */
    status?: string;

    /**
     * The policy ID.
     */
    policyId?: number;

    /**
     * The page size.
     */
    pageSize?: number;

    /**
     * The page.
     */
    page?: number;
  }

  /**
   * Parameters for postChartrepoCharts
   */
  export interface PostChartrepoChartsParams {

    /**
     * The chart file
     */
    chart: Blob;

    /**
     * The provance file
     */
    prov?: Blob;
  }

  /**
   * Parameters for postRepositoriesRepoNameLabels
   */
  export interface PostRepositoriesRepoNameLabelsParams {

    /**
     * The name of repository.
     */
    repoName: string;

    /**
     * Only the ID property is required.
     */
    label: Label;
  }

  /**
   * Parameters for getChartrepoRepoChartsNameVersion
   */
  export interface GetChartrepoRepoChartsNameVersionParams {

    /**
     * The chart version
     */
    version: string;

    /**
     * The project name
     */
    repo: string;

    /**
     * The chart name
     */
    name: string;
  }

  /**
   * Parameters for deleteChartrepoRepoChartsNameVersion
   */
  export interface DeleteChartrepoRepoChartsNameVersionParams {

    /**
     * The chart version
     */
    version: string;

    /**
     * The project name
     */
    repo: string;

    /**
     * The chart name
     */
    name: string;
  }

  /**
   * Parameters for postRepositoriesRepoNameTags
   */
  export interface PostRepositoriesRepoNameTagsParams {

    /**
     * Request to give source image and target tag.
     */
    request: RetagReq;

    /**
     * Relevant repository name.
     */
    repoName: string;
  }

  /**
   * Parameters for getRepositoriesRepoNameTags
   */
  export interface GetRepositoriesRepoNameTagsParams {

    /**
     * Relevant repository name.
     */
    repoName: string;

    /**
     * A label ID.
     */
    labelId?: string;

    /**
     * Bool value indicating whether return detailed information of the tag, such as vulnerability scan info, if set to false, only tag name is returned.
     */
    detail?: boolean;
  }

  /**
   * Parameters for patchRetentionsIdExecutionsEid
   */
  export interface PatchRetentionsIdExecutionsEidParams {

    /**
     * Retention ID.
     */
    id: number;

    /**
     * Retention execution ID.
     */
    eid: number;

    /**
     * The action, only support "stop" now.
     */
    action: {action?: string};
  }

  /**
   * Parameters for putRegistriesId
   */
  export interface PutRegistriesIdParams {

    /**
     * Updates registry.
     */
    repoTarget: PutRegistry;

    /**
     * The registry's ID.
     */
    id: number;
  }

  /**
   * Parameters for putRepositoriesRepoName
   */
  export interface PutRepositoriesRepoNameParams {

    /**
     * The name of repository which will be deleted.
     */
    repoName: string;

    /**
     * The description of the repository.
     */
    description: RepositoryDescription;
  }

  /**
   * Parameters for putProjectsProjectIdMembersMid
   */
  export interface PutProjectsProjectIdMembersMidParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * Member ID.
     */
    mid: number;
    role?: RoleRequest;
  }

  /**
   * Parameters for getProjectsProjectIdMembersMid
   */
  export interface GetProjectsProjectIdMembersMidParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * The member ID
     */
    mid: number;
  }

  /**
   * Parameters for deleteProjectsProjectIdMembersMid
   */
  export interface DeleteProjectsProjectIdMembersMidParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * Member ID.
     */
    mid: number;
  }

  /**
   * Parameters for putQuotasId
   */
  export interface PutQuotasIdParams {

    /**
     * Quota ID
     */
    id: number;

    /**
     * The new hard limits for the quota
     */
    hard: QuotaUpdateReq;
  }

  /**
   * Parameters for postProjectsProjectIdImmutabletagrules
   */
  export interface PostProjectsProjectIdImmutabletagrulesParams {

    /**
     * Relevant project ID.
     */
    projectId: number;
    immutabletagrule?: ImmutableTagRule;
  }

  /**
   * Parameters for putReplicationPoliciesId
   */
  export interface PutReplicationPoliciesIdParams {

    /**
     * The replication policy model.
     */
    policy: ReplicationPolicy;

    /**
     * policy ID
     */
    id: number;
  }

  /**
   * Parameters for postProjectsProjectIdMembers
   */
  export interface PostProjectsProjectIdMembersParams {

    /**
     * Relevant project ID.
     */
    projectId: number;
    projectMember?: ProjectMember;
  }

  /**
   * Parameters for getProjectsProjectIdMembers
   */
  export interface GetProjectsProjectIdMembersParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * The entity name to search.
     */
    entityname?: string;
  }

  /**
   * Parameters for postRepositoriesRepoNameTagsTagScan
   */
  export interface PostRepositoriesRepoNameTagsTagScanParams {

    /**
     * Tag name
     */
    tag: string;

    /**
     * Repository name
     */
    repoName: string;
  }

  /**
   * Parameters for getRepositories
   */
  export interface GetRepositoriesParams {

    /**
     * Relevant project ID.
     */
    projectId: number;

    /**
     * Sort method, valid values include: 'name', '-name', 'creation_time', '-creation_time', 'update_time', '-update_time'. Here '-' stands for descending order.
     */
    sort?: string;

    /**
     * Repo name for filtering results.
     */
    q?: string;

    /**
     * The size of per page, default is 10, maximum is 100.
     */
    pageSize?: number;

    /**
     * The page number, default is 1.
     */
    page?: number;

    /**
     * The ID of label used to filter the result.
     */
    labelId?: number;
  }

  /**
   * Parameters for getReplicationExecutionsIdTasksTaskIdLog
   */
  export interface GetReplicationExecutionsIdTasksTaskIdLogParams {

    /**
     * The task ID.
     */
    taskId: number;

    /**
     * The execution ID.
     */
    id: number;
  }

  /**
   * Parameters for deleteRepositoriesRepoNameTagsTagLabelsLabelId
   */
  export interface DeleteRepositoriesRepoNameTagsTagLabelsLabelIdParams {

    /**
     * The tag of the image.
     */
    tag: string;

    /**
     * The name of repository.
     */
    repoName: string;

    /**
     * The ID of label.
     */
    labelId: number;
  }
}

export { ProductsService }
