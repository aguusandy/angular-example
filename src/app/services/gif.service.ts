import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService{

  url: string =  `https://api.giphy.com/v1/gifs/random?api_key=xIiCh1C51Gk36FF1aPVae1HgvbFexj33`;

  constructor(private http: HttpClient) { }

  getGif(){
    return this.http.get(this.url);
  }

}
