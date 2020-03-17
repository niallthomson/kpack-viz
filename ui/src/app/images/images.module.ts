import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './images/images.component';
import { ClarityModule } from '@clr/angular';
import { DetailComponent } from './detail/detail.component';
import { BuildComponent } from './build/build.component';
import { NgBytesPipeModule } from 'angular-pipes';


@NgModule({
  declarations: [ImagesComponent, DetailComponent, BuildComponent],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    ClarityModule,
    NgBytesPipeModule,
  ]
})
export class ImagesModule { }
