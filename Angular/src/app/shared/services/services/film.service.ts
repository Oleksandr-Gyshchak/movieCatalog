import { Injectable, Inject } from '@angular/core';
import { Observable, throwError, Subject, ReplaySubject, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { FilmApiService } from './film.api.service';
import { Film } from '../../models/film';


@Injectable({
  providedIn: 'root'
})

export class FilmService {
  constructor(
    private filmApiService: FilmApiService
  ) {
  }

  getFilmList(page: number): Observable<Film> {
    return this.filmApiService.getFilms(page);
  }

  searchFilm(query: string, page?: number): Observable<Film> {
    return this.filmApiService.searchFilm(query, page);
  }


  getFilmById(id: any): Observable<any> {
    return this.filmApiService.getFilmById(id);
  }



}
