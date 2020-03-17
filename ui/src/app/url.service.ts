import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  getBaseUrl() : string {
    var loc = window.location, new_uri;

    if(environment.local) {
      new_uri = "http://localhost:8080"
    }
    else {
      new_uri = ""
    }

    return new_uri;
  }

  getBaseWsUrl() : string {
    var loc = window.location, new_uri;

    if(environment.local) {
      new_uri = "ws://localhost:8080"
    }
    else {
      if (loc.protocol === "https:") {
          new_uri = "wss:";
      } else {
          new_uri = "ws:";
      }

      new_uri += "//" + loc.host;
    }

    return new_uri;
  }
}
