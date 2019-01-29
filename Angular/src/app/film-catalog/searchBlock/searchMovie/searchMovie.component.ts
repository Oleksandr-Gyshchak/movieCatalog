import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FilmService } from '../../../shared/services/services/film.service';
import { Film } from '../../../shared/models/film';
import { FavoriteServer } from '../../../shared/models/favoriteServer';
import { HttpErrorResponse } from '@angular/common/http';
import { MessagesService } from '../../../shared/services/messages.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-searchMovie',
  templateUrl: './searchMovie.component.html',
  styleUrls: ['./searchMovie.component.css']
})
export class SearchMovieComponent implements OnInit {
  query: any;
  // tslint:disable-next-line:no-inferrable-types
  preload: boolean = true;

  filmsList: Film;
  page = 1;
  // tslint:disable-next-line:no-inferrable-types
  lastPage: number = 1;

  errors: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public filmsService: FilmService,
    private router: Router,
    private messagesService: MessagesService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe((queryParams: any) => {
        this.errors = '';
        this.query = queryParams['query'];
        this.searchFilms(this.query);
      });
  }

  searchFilms(query: string, page: number = 1): void {
    this.errors = '';
    this.filmsService.searchFilm(query, page).subscribe(
      (data: any) => {
        console.log(data);
        this.saveData(data);
        this.preload = false;
      },
      err => {
        console.log('error', err);
      }
    );
  }

  saveData(serverData: any): void {
    this.page = serverData.searchResult.page;
    this.lastPage = serverData.searchResult.totalPages;
    this.filmsList = serverData.searchResult.docs;
  }

  getMoreItem(page: number): void {
    this.searchFilms(this.query, page);
  }



  isEmptySearchResult(list): boolean {
    return list.length ? false : true;
  }
}
