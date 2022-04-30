import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResult } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
   
    getDataMovies(){
      return this.http.get<ApiResult>('https://www.omdbapi.com/?s=harry&apikey=d4d9c712');
    }

    searchDataMovie(text:string){
      return this.http.get<ApiResult>('https://www.omdbapi.com/?s='+text+'&apikey=d4d9c712');
    }




}
