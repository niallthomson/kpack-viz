import { Component, OnInit } from '@angular/core';
import { BuildsService } from './builds.service';
import { Build } from './build';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit {
  sub: any;
  buildMap : Map<string, Build>;
  builds : Build[] = [];

  constructor(private buildsService : BuildsService) { }

  ngOnInit() {
    this.buildMap = new Map<string, Build>();
    
    this.buildsService.getBuilds()
    .subscribe(builds => {
      this.setBuilds(builds);

      builds.forEach((build : Build) => {
        this.buildMap.set(build.id, build);
      })

      this.sub = this.buildsService.watchBuilds()
      .subscribe(build => {
        console.log(build)

        this.buildMap.set(build.id, build);

        let builds = new Array<Build>();

        this.buildMap.forEach((value: Build, key: string) => {
          builds.push(value)
        });

        this.setBuilds(builds)
      });
    });
  }

  setBuilds(builds : Build[]) {
    this.builds = builds.sort((a, b) => new Date(b.started).getTime() - new Date(a.started).getTime()).slice(0, 10)
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
