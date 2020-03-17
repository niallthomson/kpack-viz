import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { DetailComponent } from './detail/detail.component';
import { BuildComponent } from './build/build.component';


const routes: Routes = [
  { path: '', component: ImagesComponent },
  { path: ':name', component: DetailComponent }, 
  { path: ':name/build/:number', component: BuildComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
