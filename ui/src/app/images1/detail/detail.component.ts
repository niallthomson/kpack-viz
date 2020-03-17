import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { ProductsService } from 'src/app/harbor-api/services/products.service';
import { DetailedTag } from '../../harbor-api/models';
import { Manifest } from '../../harbor-api/models';

import { diff } from 'deep-object-diff';
import { forkJoin } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  image: string;
  tag: string;
  bom: any;
  loaded : boolean;
  rawImage: string;
  tags: DetailedTag[];
  diffTag : string;
  diffModel: any[];
  stack: string;
  buildpacks: any;
  size : number;
  pushed : Date;

  constructor(private route : ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.rawImage = <string>this.route.parent.snapshot.params.id;

    this.image = decodeURIComponent(this.rawImage);

    this.route.url
    .subscribe(urls => {
      this.tag = decodeURIComponent(urls[0].path);

      this.getManifest();

      this.getTags();

      this.diffTag = null;
      this.diffModel = [];
    });
  }

  getManifest(): void {
    this.productsService.getRepositoriesRepoNameTagsTag({
      repoName: this.image,
      tag: this.tag,
    }).subscribe(
      tag => {
        let labels = tag["config"]["labels"];

        if(labels.hasOwnProperty("io.buildpacks.build.metadata")) {
          this.size = tag.size;
          this.pushed = new Date(tag["push_time"]);
          this.stack = <string>labels["io.buildpacks.stack.id"];
          let metadata = JSON.parse(labels["io.buildpacks.build.metadata"])

          this.buildpacks = metadata["buildpacks"];
          this.bom = metadata["bom"];

          for(var index in this.bom) {
            let item = this.bom[index];

            if(!item.metadata) {
              item.metadata = {}
            }
            
            if(!item.metadata["licenses"]) {
              item.metadata["licenses"] = []
            }
          }

          this.loaded = true;
        }
        else {
          console.log("Missing it")
        }
      }
    );
  }

  getTags(): void {
    this.productsService.getRepositoriesRepoNameTags({
      repoName: this.image,
    }).pipe(
      map(tags => tags.sort((a, b) => new Date(a["push_time"]).getTime() - new Date(b["push_time"]).getTime()))
    ).subscribe(tags => {
      this.tags = tags
    });
  }

  getManifests(targetTag): void {
    let manifest = this.productsService.getRepositoriesRepoNameTagsTagManifest({
      repoName: this.image,
      tag: this.tag,
    });
    
    let targetManifest = this.productsService.getRepositoriesRepoNameTagsTagManifest({
      repoName: this.image,
      tag: targetTag,
    });

    forkJoin([manifest, targetManifest]).subscribe(results => {
      let bom = this.getBom(results[0])
      let targetBom = this.getBom(results[1])

      let bomDiff = diff(bom, targetBom)
      let diffModel = [];

      for (var key in bomDiff) {
        let bomDiffItem = bomDiff[key]

        let isNew = false;

        if(!bomDiffItem) {
          diffModel.push({
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
            old: isNew ? "" : bom[key]["attributes"][itemKey],
            new: targetBom[key]["attributes"][itemKey],
          });
        }

        diffModelItem["changes"] = changes;

        diffModel.push(diffModelItem);
      } 

      this.diffModel = diffModel;

      console.log(this.diffModel);
    });
  }

  getBom(manifest : Manifest) : object {
    let config = JSON.parse(manifest.config);

    let labels = config["config"]["Labels"];

    if(labels.hasOwnProperty("io.buildpacks.build.metadata")) {
      let metadata = JSON.parse(labels["io.buildpacks.build.metadata"])

      let rawBom = metadata["bom"];

      let bom = {}

      for(var index in rawBom) {
        let rawBomItem = rawBom[index]

        let bomItem = {
          name: rawBomItem["name"],
          present: true,
          attributes: {
            name: rawBomItem["metadata"]["name"] || "",
            version: rawBomItem["version"] || "",
            buildpack: rawBomItem["buildpack"]["id"] || "",
            buildpackVersion: rawBomItem["buildpack"]["version"] || "",
          }
        }

        bom[rawBomItem["name"]] = bomItem;
      }

      return bom;
    }

    return null;
  }

  onClickMe(tag : string) {
    this.diffTag = tag;
    this.getManifests(tag)
  }

}
