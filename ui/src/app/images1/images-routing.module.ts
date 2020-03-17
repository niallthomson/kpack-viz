import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImagesComponent } from './images.component';

import { DefaultComponent } from './default/default.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [{ path: ':id', component: ImagesComponent,
children: [
  { path: '', component: DefaultComponent },
  { path: ':tag', component: DetailComponent },
] }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
