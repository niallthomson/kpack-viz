import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../harbor-api/services/products.service';
import { DetailedTag } from '../harbor-api/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  
  rawName: string;
  name: string;
  tags: DetailedTag[];

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.url
    .subscribe(urls => {
      this.rawName = urls[0].path;
      this.name = decodeURIComponent(this.rawName);
      
      this.getTags();
    });
  }

  getTags(): void {
    this.productsService.getRepositoriesRepoNameTags({
      repoName: this.name,
    }).pipe(
      map(tags => tags.sort((a, b) => new Date(b["push_time"]).getTime() - new Date(a["push_time"]).getTime()))
    ).subscribe(tags => {
      this.tags = tags
    });
  }

}
