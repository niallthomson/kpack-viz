import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagesService } from '../images.service';
import { Image } from '../image'
import { BuildsService } from 'src/app/builds/builds.service';
import { Build } from 'src/app/builds/build';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  name : string;
  image : Image;
  builds : Build[] = [];

  constructor(private route : ActivatedRoute, private imagesService : ImagesService, private buildsService : BuildsService) { }

  ngOnInit(): void {
    this.route.url
    .subscribe(urls => {
      this.name = decodeURIComponent(urls[0].path);

      this.imagesService.getImages()
      .subscribe(images => {
        this.image = images.find(image => image.name === this.name);

        if(this.image) {
          this.buildsService.getBuilds()
          .subscribe(builds => {
            this.builds = builds.filter(build => build.image === this.name).sort((a, b) => new Date(b.started).getTime() - new Date(a.started).getTime())
          });
        }
      });
    });
  }

}
