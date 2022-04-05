import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { AppMoviesDashboardComponent } from './MoviesDashboard/MoviesDashboard.component';
import { AppMoviesDetailsComponent } from './app-movies-details/app-movies-details.component';
import { AppMoviesListComponent } from './app-movies-list/app-movies-list.component';
import { AppSeachComponent } from './app-search/app-search.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    AppMoviesDashboardComponent,
    AppMoviesDetailsComponent,
    AppMoviesListComponent,
    AppSeachComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
