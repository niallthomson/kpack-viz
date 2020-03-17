import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './images.component';
import { DetailComponent } from './detail/detail.component';
import { DefaultComponent } from './default/default.component';
import { NgBytesPipeModule } from 'angular-pipes';


@NgModule({
  declarations: [ImagesComponent, DetailComponent, DefaultComponent],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    ClarityModule,
    NgBytesPipeModule,
  ]
})
export class ImagesModule { }
