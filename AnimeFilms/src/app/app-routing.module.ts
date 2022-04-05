import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppMoviesDetailsComponent } from './app-movies-details/app-movies-details.component';
import { AppMoviesDashboardComponent } from './MoviesDashboard/MoviesDashboard.component';

const routes: Routes = [
  {
    path: 'app-movies-details/:id',
    component: AppMoviesDetailsComponent,
  },
  {
    path: 'MoviesDashboard',
    component: AppMoviesDashboardComponent,
  },
  {
    path: '',
    redirectTo: 'MoviesDashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
