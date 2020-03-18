import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { BuildsRoutingModule } from './builds-routing.module';
import { BuildsComponent } from './builds.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BuildsComponent, 
  ],
  imports: [
    CommonModule,
    BuildsRoutingModule,
    ClarityModule,
    HttpClientModule,
  ],
  exports: [
    BuildsComponent, 
  ]
})
export class BuildsModule { }
