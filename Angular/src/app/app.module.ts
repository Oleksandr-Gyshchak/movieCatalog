import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';


import { MessagesService } from './shared/services/messages.service';

import { FilmCatalogModule } from './film-catalog/film-catalog.module';
import { SearchComponent } from './search/search.component';
import { AlertsComponent } from './alerts/alerts.component';
import { CONFIG_API, configApi } from './shared/services/services/config.api';


@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        SearchComponent,
        AlertsComponent
    ],
    imports: [
        SharedModule,
        BrowserModule,
        AppRoutingModule,
        FilmCatalogModule,
        BrowserAnimationsModule,
    ],
    providers: [
        MessagesService,

        { provide: CONFIG_API, useValue: configApi }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

