import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Image } from './image';
import { RawImage } from './raw-image';
import { UrlService } from '../url.service';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient, private urlService : UrlService) { }

  getImages() : Observable<Image[]> {
    return this.http.get<Image[]>(this.urlService.getBaseUrl()+"/api/images")
  }

  getRawImage(tag : string) : Observable<RawImage> {
    return this.http.get<RawImage>(this.urlService.getBaseUrl()+"/api/rawImage?tag="+encodeURIComponent(tag))
  }
}
