import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

import { FilmsListComponent } from './film-catalog/films-list/films-list.component';

import { SearchMovieComponent } from './film-catalog/searchBlock/searchMovie/searchMovie.component';
import { FilmDetailComponent } from './film-catalog/film-detail/film-detail.component';
import { NewMovieItemComponent } from './film-catalog/new-movie-item/new-movie-item.component';
import { FilmlistImportComponent } from './film-catalog/filmlist-import/filmlist-import.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'search',
    children: [
      {
        path: '',
        redirectTo: 'global',
        pathMatch: 'full'
      },
      {
        path: 'global',
        component: SearchMovieComponent
      },

    ]
  },
  {
    path: 'movies',
    component: FilmsListComponent,
  },
  {
    path: 'movie/:id',
    component: FilmDetailComponent,
  },
  {
    path: 'film/add',
    component: NewMovieItemComponent,
  },
  {
    path: 'film/importList',
    component: FilmlistImportComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
