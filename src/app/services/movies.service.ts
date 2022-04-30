import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result,Thumbnail,Data, RootObject } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
    PUBLIC_KEY= '8025e3d0f1c5672eb6f9bc796b613b82';
    HASH= '5e8003b410af946e656b6988ed048af7';
    URL_API='https://gateway.marvel.com/v1/public/characters?nameStartsWith=i&ts=1000&apikey='+this.PUBLIC_KEY+'&hash='+this.HASH;

    getAllcharacters(): Observable<any> {
      return this.http.get<Result>(this.URL_API)
    }


    getThumbnail(){
      return this.http.get<Thumbnail>(this.URL_API)
      
    }

    searchCharacter(text:string){
      return this.http.get<RootObject>('https://gateway.marvel.com/v1/public/characters?nameStartsWith='+text+'&ts=1000&apikey=8025e3d0f1c5672eb6f9bc796b613b82&hash=5e8003b410af946e656b6988ed048af7');
    }
                              


    




}
