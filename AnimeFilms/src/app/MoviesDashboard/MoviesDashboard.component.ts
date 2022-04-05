import { Component, OnInit } from '@angular/core';
import { AnimeMoviesService } from 'src/app/anime-movies.service';
import { MovieDetail } from '../models/MovieDetail.interface';

@Component({
  selector: 'MoviesDashboard',
  templateUrl: 'MoviesDashboard.component.html',
  styleUrls: ['MoviesDashboard.component.css'],
})
export class AppMoviesDashboardComponent implements OnInit {
  constructor(private animeMoviesService: AnimeMoviesService) {}

  listOfMovies: MovieDetail[] = [];

  ngOnInit(): void {
    this.animeMoviesService
      .getAnimeMovies()
      .subscribe((movie) => (this.listOfMovies = movie));
  }
}
