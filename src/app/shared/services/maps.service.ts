import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient, private domSanitizer: DomSanitizer) {

  }

  

  loadImage() {
    const url = "http://localhost:1337/https://api.twmaps.ch/v1/maps/servers/en/worlds/en111/topplayers";
    return this.http.get(url, { responseType: 'blob' });
  }
}
