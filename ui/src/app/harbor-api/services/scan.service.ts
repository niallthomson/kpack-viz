/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Report } from '../models/report';
@Injectable({
  providedIn: 'root',
})
class ScanService extends __BaseService {
  static readonly getRepositoriesRepoNameTagsTagScanPath = '/repositories/{repo_name}/tags/{tag}/scan';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Retrieve the scan report for the artifact identified by the repo_name and tag.
   * @param params The `ScanService.GetRepositoriesRepoNameTagsTagScanParams` containing the following parameters:
   *
   * - `tag`: Tag name
   *
   * - `repo_name`: Repository name
   *
   * - `Accept`: Mimetype in header. e.g: "application/vnd.scanner.adapter.vuln.report.harbor+json; version=1.0"
   *
   * @return The report details of the specified artifact identified by the repo_name and tag.
   */
  getRepositoriesRepoNameTagsTagScanResponse(params: ScanService.GetRepositoriesRepoNameTagsTagScanParams): __Observable<__StrictHttpResponse<Report>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    if (params.Accept != null) __headers = __headers.set('Accept', params.Accept.toString());
    let req = new HttpRequest<any>(
      'GET',
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
        return _r as __StrictHttpResponse<Report>;
      })
    );
  }
  /**
   * Retrieve the scan report for the artifact identified by the repo_name and tag.
   * @param params The `ScanService.GetRepositoriesRepoNameTagsTagScanParams` containing the following parameters:
   *
   * - `tag`: Tag name
   *
   * - `repo_name`: Repository name
   *
   * - `Accept`: Mimetype in header. e.g: "application/vnd.scanner.adapter.vuln.report.harbor+json; version=1.0"
   *
   * @return The report details of the specified artifact identified by the repo_name and tag.
   */
  getRepositoriesRepoNameTagsTagScan(params: ScanService.GetRepositoriesRepoNameTagsTagScanParams): __Observable<Report> {
    return this.getRepositoriesRepoNameTagsTagScanResponse(params).pipe(
      __map(_r => _r.body as Report)
    );
  }
}

module ScanService {

  /**
   * Parameters for getRepositoriesRepoNameTagsTagScan
   */
  export interface GetRepositoriesRepoNameTagsTagScanParams {

    /**
     * Tag name
     */
    tag: string;

    /**
     * Repository name
     */
    repoName: string;

    /**
     * Mimetype in header. e.g: "application/vnd.scanner.adapter.vuln.report.harbor+json; version=1.0"
     */
    Accept?: string;
  }
}

export { ScanService }
