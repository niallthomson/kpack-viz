import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ApiModule } from './harbor-api/api.module';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { NgEncodeURIComponentPipeModule } from 'angular-pipes';
import { BuildsModule } from './builds/builds.module';
import { ImagesModule } from './images/images.module';
import { BuildsComponent } from './builds/builds.component';
import { UrlService } from './url.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DateAgoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    NgEncodeURIComponentPipeModule,
    BuildsModule,
    ImagesModule,
    ApiModule.forRoot({rootUrl: 'https://harbor.demo.aws.paasify.org/api'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
