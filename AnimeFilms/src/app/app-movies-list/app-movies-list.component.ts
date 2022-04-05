import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnimeMoviesService } from '../anime-movies.service';
import { MovieDetail } from '../models/MovieDetail.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: 'app-movies-list.component.html',
  styleUrls: ['app-movies-list.component.css'],
})
export class AppMoviesListComponent implements OnInit {
  constructor(private animeMoviesService: AnimeMoviesService) {}

  MoviesList: MovieDetail[] = [];

  ngOnInit(): void {
    this.animeMoviesService
      .getAnimeMovies()
      .subscribe((movie) => (this.MoviesList = movie));
  }
}
