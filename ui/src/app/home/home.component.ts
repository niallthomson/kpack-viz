import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../harbor-api/services/products.service';
import { Repository } from '../harbor-api/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: Repository[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }
}
