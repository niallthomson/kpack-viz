import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildsService } from 'src/app/builds/builds.service';
import { Build } from 'src/app/builds/build';
import { ImagesService } from '../images.service';
import { RawImage, BomEntry } from '../raw-image';
import {
  default as AnsiUp
} from 'ansi_up';
import { diff } from 'deep-object-diff';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {

  image : string;
  buildNumber : number;
  build : Build;
  rawImage : RawImage;
  log : string;
  buildNumbers : number[] = [];
  diffModel : any[];
  fromBuild: string;
  toBuild: string;

  constructor(private route : ActivatedRoute, private buildsService : BuildsService, private imageService : ImagesService) { }

  ngOnInit(): void {
    this.diffModel = [];
    this.log = "";

    this.fromBuild = "";
    this.toBuild = "";

    this.route.url
    .subscribe(urls => {
      this.image = urls[0].path;
      this.buildNumber = +urls[2].path;

      this.buildsService.getBuilds()
      .subscribe(builds => {
        let imageBuilds = builds.filter(build => build.image === this.image);

        imageBuilds.forEach((build, index) => {
          if(build.buildNumber == this.buildNumber) {
            this.build = build;
            console.log(this.build)

            if(this.build.latestImage.length > 0) {
              this.imageService.getRawImage(this.build.tags[1]).subscribe(rawImage => {
                this.rawImage = rawImage;
              });
            }

            this.buildsService.getLogs(this.build.image, this.build.buildNumber).subscribe(logs => {
              const ansi_up = new AnsiUp();
              this.log = ansi_up.ansi_to_html(logs);
            });
          }
          else {
            this.buildNumbers.push(build.buildNumber);
          }
        });
        
      });
    });
  }

  onDiffSelect(buildNumber : number) {
    this.diffModel = [];
    this.buildsService.getBuilds()
    .subscribe(builds => {
      let selected = builds.find(build => {
        return (build.image === this.build.image && build.buildNumber === buildNumber);
      });

      if(selected) {
        this.imageService.getRawImage(selected.tags[1]).subscribe(rawImage => {
          let from : RawImage, to : RawImage;

          if(selected.buildNumber > this.build.buildNumber) {
            from = this.rawImage;
            to = rawImage;

            this.fromBuild = ""+this.buildNumber;
            this.toBuild = ""+selected.buildNumber;
          }
          else {
            to = this.rawImage;
            from = rawImage;

            this.toBuild = ""+this.buildNumber;
            this.fromBuild = ""+selected.buildNumber;
          }

          let diffableFrom = this.getDiffableBom(from.imageInfo.bom);
          let diffableTo = this.getDiffableBom(to.imageInfo.bom);

          let bomDiff = diff(diffableFrom, diffableTo)

          console.log(bomDiff)

          for (var key in bomDiff) {
            let bomDiffItem = bomDiff[key]
    
            let isNew = false;
    
            if(!bomDiffItem) {
              this.diffModel.push({
                name: key,
                isNew: false,
                isDeleted: true,
                changes: []
              });
    
              continue;
            }
            else if(bomDiffItem.hasOwnProperty("present")) {
              isNew = true;
            }

            let diffModelItem = {
              name: key,
              isNew: isNew,
              changes: []
            };
    
            let changes = [];
              
            for (var itemKey in bomDiffItem["attributes"]) {
              if(itemKey === "name") {
                continue;
              }
              
              changes.push({
                name: itemKey,
                old: isNew ? "" : diffableFrom[key]["attributes"][itemKey],
                new: diffableTo[key]["attributes"][itemKey],
              });
            }
    
            diffModelItem["changes"] = changes;
    
            this.diffModel.push(diffModelItem);
          }
        });
        
      }
    });
  }

  getDiffableBom(entries : BomEntry[]) : any {

    let diffableBom = {}

    entries.forEach((entry, index) => {
      let bomItem = {
        name: entry.name,
        present: true,
        attributes: {
          "Artifact Version": entry.version,
          "Buildpack": entry.buildpack.id,
          "Buildpack Version": entry.buildpack.version
        }
      }

      diffableBom[entry.name] = bomItem;
    });

    return diffableBom;
  }
}
