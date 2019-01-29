import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CONFIG_API } from './config.api';

@Injectable({
  providedIn: 'root'
})



export class FilmApiService {

  apiURL: String = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    @Inject(CONFIG_API) public configApi
  ) { }

  getFilms(page?: number): Observable<any> {
    return this.http.get(`${this.apiURL}/movie`);
  }

  searchFilm(query: string, page?: number): Observable<any> {
    return this.http.get(`${this.apiURL}/search/global?page=${page}&query=${query}`);
  }
  getFilmById(id: any): Observable<any> {
    return this.http.get(`${this.apiURL}/movie/${id}`);
  }

  removeFilm(id: any): Observable<any> {
    return this.http.delete(`${this.apiURL}/movie/${id}`);
  }

  addMovietoDB(movieObj: any): Observable<any> {
    return this.http.post(`${this.apiURL}/movie`, movieObj);
  }

  sendFileToServer(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.patch(`${this.apiURL}/import`, formData);
  }

}
