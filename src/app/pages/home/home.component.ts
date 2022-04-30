import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   movielist:Movie[] = [];
   textSearch:string = "";
   loading:boolean = false;


  constructor(private service:MoviesService) { }

  ngOnInit(): void {
    this.service.getDataMovies()
    .subscribe(resp=>{
      console.log(resp.Search)
      this.movielist = resp.Search;
    })
  }
  
  onClickSearch(){
    this.loading = true;
    console.log("click en busqueda:"+this.textSearch);
    
    setTimeout(()=>{
      this.service.searchDataMovie(this.textSearch)
    .subscribe(resp=>{
      this.loading = false;
      console.log(resp.Search);
      if(resp.Search){
        this.movielist = resp.Search;
      }else{
        this.movielist = [];

      }
    })
    },2500);

    
  }

      
  
  
  



}
