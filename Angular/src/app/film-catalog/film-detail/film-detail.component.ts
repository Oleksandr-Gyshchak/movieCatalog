import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription, throwError } from 'rxjs';

import { FilmService } from '../../shared/services/services/film.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-films',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})

export class FilmDetailComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  preload: boolean = true;
  error: string;

  filmsList: any;
  // tslint:disable-next-line:no-inferrable-types
  page: number = 1;
  // tslint:disable-next-line:no-inferrable-types
  lastPage: number = 1;

  film: any;
  id: any;

  constructor(
    public filmsService: FilmService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      console.log(this.id)
      this.filmsService.getFilmById(this.id)
        .subscribe(filmItem => {
          if (filmItem) {
            this.film = filmItem.movieItem;
            console.log(this.film);
            this.preload = false;
          }
        });
    });

  }

  getFilmsList(page: number = 1): void {
    this.filmsService.getFilmById(page).subscribe(
      (data: any) => {
        this.saveData(data);
        this.preload = false;
      },
      (err: HttpErrorResponse) => {
        this.error = err.error.status_message;
        console.log('error', err);
      }
    );
  }

  saveData(serverData: any): void {
    this.page = serverData.movieList.page;
    this.lastPage = serverData.movieList.totalPages;
    this.filmsList = serverData.movieList.docs;
  }

}
