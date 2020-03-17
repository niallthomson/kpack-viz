import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuildsService } from 'src/app/builds/builds.service';
import { Build } from 'src/app/builds/build';
import { ImagesService } from '../images.service';
import { RawImage } from '../raw-image';

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

  constructor(private route : ActivatedRoute, private buildsService : BuildsService, private imageService : ImagesService) { }

  ngOnInit(): void {
    this.log = "";

    this.route.url
    .subscribe(urls => {
      this.image = urls[0].path;
      this.buildNumber = +urls[2].path;

      this.buildsService.getBuilds()
      .subscribe(builds => {
        this.build = builds.find(build => build.image === this.image && build.buildNumber === this.buildNumber);
        console.log(this.build)

        if(this.build.latestImage.length > 0) {
          this.imageService.getRawImage(this.build.tags[1]).subscribe(rawImage => {
            this.rawImage = rawImage;
          });
        }

        this.buildsService.getLogs(this.build.image, this.build.buildNumber).subscribe(logs => {
          this.log = logs;
        });
      });
    });
  }
}
