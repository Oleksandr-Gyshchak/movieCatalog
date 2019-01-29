import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FilmItemComponent } from './film-item/film-item.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { SharedModule } from '../shared/shared.module';
import { CONFIG_API, configApi } from '../shared/services/services/config.api';

import { SearchMovieComponent } from './searchBlock/searchMovie/searchMovie.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { NewMovieItemComponent } from './new-movie-item/new-movie-item.component';
import { FilmlistImportComponent } from './filmlist-import/filmlist-import.component';




@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    FilmsListComponent,
    FilmItemComponent,
    SearchMovieComponent,
    FilmDetailComponent,
    NewMovieItemComponent,
    FilmlistImportComponent
  ],
  providers: [
    {
      provide: CONFIG_API, useValue: configApi
    }
  ]
})
export class FilmCatalogModule {
}
