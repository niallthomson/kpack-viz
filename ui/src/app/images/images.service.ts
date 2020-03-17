import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Image } from './image';
import { RawImage } from './raw-image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getImages() : Observable<Image[]> {
    return this.http.get<Image[]>("/api/images")
  }

  getRawImage(tag : string) : Observable<RawImage> {
    return this.http.get<RawImage>("/api/rawImage?tag="+encodeURIComponent(tag))
  }
}
