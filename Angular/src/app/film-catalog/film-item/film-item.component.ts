import { Component, EventEmitter, Input, OnInit, Output, ElementRef, ViewChild, SimpleChanges } from '@angular/core';

import { FilmApiService } from '../../shared/services/services/film.api.service';
import { Film } from '../../shared/models/film';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MessagesService } from 'src/app/shared/services/messages.service';



@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film;

  constructor(
    public filmsApiService: FilmApiService,
    public router: Router,
    private msgService: MessagesService
  ) {
  }

  ngOnInit() {
  }

  openFilmById(film: Film) {
    this.router.navigate(['/movie', film.id]);
  }

  getActorsFullName() {
    return this.film.starsList.map(actor => `${actor['firstName']}  ${actor['lastName']}`);
  }

  deleteMovie(film: Film) {
    this.filmsApiService.removeFilm(film.id).subscribe(
      (data: any) => {

        this.msgService.setMessage({
          type: 'success',
          body: `Фильм успешно удален`
        });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      (err: HttpErrorResponse) => {
        this.msgService.setMessage({
          type: 'danger',
          body: err.error || err.error.error
        });

      }
    );

  }
}
