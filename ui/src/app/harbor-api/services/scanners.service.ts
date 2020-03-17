/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProjectScanner } from '../models/project-scanner';
import { ScannerRegistrationReq } from '../models/scanner-registration-req';
import { ScannerRegistration } from '../models/scanner-registration';
import { IsDefault } from '../models/is-default';
@Injectable({
  providedIn: 'root',
})
class ScannersService extends __BaseService {
  static readonly putProjectsProjectIdScannerPath = '/projects/{project_id}/scanner';
  static readonly postScannersPath = '/scanners';
  static readonly putScannersRegistrationIdPath = '/scanners/{registration_id}';
  static readonly deleteScannersRegistrationIdPath = '/scanners/{registration_id}';
  static readonly patchScannersRegistrationIdPath = '/scanners/{registration_id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Set one of the system configured scanner registration as the indepndent scanner of the specified project.
   * @param params The `ScannersService.PutProjectsProjectIdScannerParams` containing the following parameters:
   *
   * - `project_id`: The project identifier.
   *
   * - `payload`:
   */
  putProjectsProjectIdScannerResponse(params: ScannersService.PutProjectsProjectIdScannerParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.payload;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/projects/${params.projectId}/scanner`,
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
   * Set one of the system configured scanner registration as the indepndent scanner of the specified project.
   * @param params The `ScannersService.PutProjectsProjectIdScannerParams` containing the following parameters:
   *
   * - `project_id`: The project identifier.
   *
   * - `payload`:
   */
  putProjectsProjectIdScanner(params: ScannersService.PutProjectsProjectIdScannerParams): __Observable<null> {
    return this.putProjectsProjectIdScannerResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Creats a new scanner registration with the given data.
   * @param registration A scanner registration to be created.
   */
  postScannersResponse(registration: ScannerRegistrationReq): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registration;
    let req = new HttpRequest<any>(
      'POST',
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
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Creats a new scanner registration with the given data.
   * @param registration A scanner registration to be created.
   */
  postScanners(registration: ScannerRegistrationReq): __Observable<null> {
    return this.postScannersResponse(registration).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Updates the specified scanner registration.
   * @param params The `ScannersService.PutScannersRegistrationIdParams` containing the following parameters:
   *
   * - `registration_id`: The scanner registration identifier.
   *
   * - `registration`: A scanner registraiton to be updated.
   */
  putScannersRegistrationIdResponse(params: ScannersService.PutScannersRegistrationIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.registration;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/scanners/${params.registrationId}`,
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
   * Updates the specified scanner registration.
   * @param params The `ScannersService.PutScannersRegistrationIdParams` containing the following parameters:
   *
   * - `registration_id`: The scanner registration identifier.
   *
   * - `registration`: A scanner registraiton to be updated.
   */
  putScannersRegistrationId(params: ScannersService.PutScannersRegistrationIdParams): __Observable<null> {
    return this.putScannersRegistrationIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Deletes the specified scanner registration.
   * @param registration_id The scanner registration identifier.
   * @return Deleted successfully and return the deleted registration
   */
  deleteScannersRegistrationIdResponse(registrationId: string): __Observable<__StrictHttpResponse<ScannerRegistration>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
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
   * Deletes the specified scanner registration.
   * @param registration_id The scanner registration identifier.
   * @return Deleted successfully and return the deleted registration
   */
  deleteScannersRegistrationId(registrationId: string): __Observable<ScannerRegistration> {
    return this.deleteScannersRegistrationIdResponse(registrationId).pipe(
      __map(_r => _r.body as ScannerRegistration)
    );
  }

  /**
   * Set the specified scanner registration as the system default one.
   * @param params The `ScannersService.PatchScannersRegistrationIdParams` containing the following parameters:
   *
   * - `registration_id`: The scanner registration identifier.
   *
   * - `payload`:
   */
  patchScannersRegistrationIdResponse(params: ScannersService.PatchScannersRegistrationIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.payload;
    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/scanners/${params.registrationId}`,
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
   * Set the specified scanner registration as the system default one.
   * @param params The `ScannersService.PatchScannersRegistrationIdParams` containing the following parameters:
   *
   * - `registration_id`: The scanner registration identifier.
   *
   * - `payload`:
   */
  patchScannersRegistrationId(params: ScannersService.PatchScannersRegistrationIdParams): __Observable<null> {
    return this.patchScannersRegistrationIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module ScannersService {

  /**
   * Parameters for putProjectsProjectIdScanner
   */
  export interface PutProjectsProjectIdScannerParams {

    /**
     * The project identifier.
     */
    projectId: number;
    payload: ProjectScanner;
  }

  /**
   * Parameters for putScannersRegistrationId
   */
  export interface PutScannersRegistrationIdParams {

    /**
     * The scanner registration identifier.
     */
    registrationId: string;

    /**
     * A scanner registraiton to be updated.
     */
    registration: ScannerRegistrationReq;
  }

  /**
   * Parameters for patchScannersRegistrationId
   */
  export interface PatchScannersRegistrationIdParams {

    /**
     * The scanner registration identifier.
     */
    registrationId: string;
    payload: IsDefault;
  }
}

export { ScannersService }
