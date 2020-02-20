import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoremPicsumService {
  private url:string = 'https://picsum.photos/seed/picsum/300/200';
  constructor(private http: HttpClient) { }

  getRandomImage(){
    return this.http.get(this.url);
  }
}
