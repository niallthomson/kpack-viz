import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
import { Image } from '../image';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images : Image[] = [];

  constructor(private imagesService : ImagesService) { }

  ngOnInit(): void {
    this.imagesService.getImages()
      .subscribe(images => {
        this.images = images
      });
  }

}
