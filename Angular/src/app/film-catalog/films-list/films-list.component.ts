import { Component, OnInit, ViewChild } from '@angular/core';

import { Subscription, throwError } from 'rxjs';

import { FilmService } from '../../shared/services/services/film.service';
import { HttpErrorResponse } from '@angular/common/http';

import { MessagesService } from '../../shared/services/messages.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})

export class FilmsListComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  preload: boolean = true;
  error: string;

  filmsList: any;
  // tslint:disable-next-line:no-inferrable-types
  page: number = 1;
  // tslint:disable-next-line:no-inferrable-types
  lastPage: number = 1;

  filmSubscription: Subscription;



  constructor(
    public filmsService: FilmService,
    private messagesService: MessagesService,
    public router: Router
  ) { }

  ngOnInit() {
    this.getFilmsList();
  }

  getFilmsList(page: number = 1): void {
    this.filmsService.getFilmList(page).subscribe(
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

  getNextPage(page: number): void {
    this.getFilmsList(page);
  }


  navigateCreateMovie() {
    this.router.navigate(['/film/add']);
  }

  navigateImportMovies() {
    this.router.navigate(['/film/importList']);
  }


  /*
  addToFavorite(film: Film): void {
    this.filmsService.favoriteCheck(film).subscribe(
      (data: FavoriteServer) => {
        if (data.status_code === 1) {
          this.messagesService.setMessage({
            type: 'success',
            body: ` Фильм ${film.title}, успешно добавлен в избранное`,
            action: 'success'
          });
        } else if (data.status_code === 13) {
          this.messagesService.setMessage({
            type: 'warning',
            body: ` Фильм ${film.title}, удален из избранного`,
            action: 'warning'
          });
        }
        film.isFavorite = !film.isFavorite;
      },
      (err: HttpErrorResponse) => {
        console.log('error', err);
        this.messagesService.setMessage({
          type: 'warning',
          body: ` ${err.error.status_message}`,
          action: 'warning'
        });
      }
    );
  }

  */

}
