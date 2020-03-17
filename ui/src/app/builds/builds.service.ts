import { Injectable } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { Observable, Observer, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Build } from './build';
import { BuildStage } from './build-stage';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuildsService {

  constructor(private http: HttpClient) { }

  socket: Subject<any>;
  observer: Observer<object>;

  /*static stageNames = ["prepare", "detect", "restore", "analyze", "build", "export", "cache"];

  getBuilds() : Observable<Build> {
    var loc = window.location, new_uri;

    if(environment.local) {
      new_uri = "ws://localhost:8080/api/builds"
    }
    else {
      if (loc.protocol === "https:") {
          new_uri = "wss:";
      } else {
          new_uri = "ws:";
      }
      new_uri += "//" + loc.host;
      new_uri += "/api/builds";
    }
    this.socket = webSocket(new_uri);

    return this.socket.asObservable().pipe(
      map(res => {
        let running = false;

        console.log(res)

        let id = res["metadata"]["name"];

        let labels = res["metadata"]["labels"];
        let image = labels["image.build.pivotal.io/image"];
        let buildNumber = labels["image.build.pivotal.io/buildNumber"];
        let started = new Date(res["metadata"]["creationTimestamp"]);
        let status = "running";

        if(res["status"]["conditions"]) {
          switch (res["status"]["conditions"][0]["status"]) {
            case "True":
              status = "succeeded"
              break;

            case "False":
              status = "error"
              break;
          }
        }

        let build = new Build(id, image, buildNumber, running, started, status);

        if(res["status"]["stepStates"]) {
          res["status"]["stepStates"].forEach(function (stageData, index) {
            let stage = new BuildStage(BuildsService.stageNames[index]);

            if(stageData["terminated"]) {
              if(stageData["terminated"]["reason"] == "Completed") {
                stage.completed(new Date(stageData["terminated"]["startedAt"]));
              }
              else {
                stage.error(new Date(stageData["terminated"]["startedAt"]));
              }
            }
            else if(stageData["running"]) {
              stage.running(new Date(stageData["running"]["startedAt"]));
            }

            build.addStage(stage);
          }); 
        }
        else {
          for (let i = 0; i < 6; i++) {
            build.addStage(new BuildStage(BuildsService.stageNames[i]));
          }
        }

        return build;
      })
    );
  }*/

  getBuilds() : Observable<Build[]> {
    return this.http.get<Build[]>("/api/builds")
  }
  
  getLogs(image : string, build : number) : Observable<string> {
    return this.http.get("/api/logs?image="+image+"&build="+build, {responseType: 'text'})
  }

  private handleError(error) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
        let errMessage = error.error.message;
        return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Socket.io server error');
  }
}
