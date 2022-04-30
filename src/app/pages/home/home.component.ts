import { Component, OnInit } from '@angular/core';
import { Result, Thumbnail,Data } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  characters: Result[] = [];
  textSearch: string = '';
  loading: boolean = false;
  thumbnailList: string = '';
  

  constructor(private service: MoviesService) {}
  ngOnInit(): void {  
    this.loading = true;
    setTimeout(() => {
      this.service.getAllcharacters().subscribe((resp) => {
        this.loading = false;
        this.characters = resp.data.results;
        console.log(this.characters);
      })
    }, 1);
  }

  onClickSearch() {
    console.log('busqueda');
    this.loading = true;
    console.log('click en busqueda:' + this.textSearch);

    setTimeout(() => {
    this.service.searchCharacter(this.textSearch).subscribe((resp) => {
        this.loading = false;
        console.log(resp);
        if (resp.data.results.length > 0) {
          
          this.characters = resp.data.results;
        } else {
          this.characters = [];
        }
      });
    }, 2500);
  }
}
