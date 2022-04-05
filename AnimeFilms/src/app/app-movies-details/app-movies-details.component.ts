import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { AnimeMoviesService } from 'src/app/anime-movies.service';
import { MovieDetail } from '../models/MovieDetail.interface';

@Component({
  selector: 'app-movies-details',
  templateUrl: 'app-movies-details.component.html',
  styleUrls: ['app-movies-details.component.css'],
})
export class AppMoviesDetailsComponent implements OnInit {
  detail?: MovieDetail;
  favoriteItemsID: string = '';
  constructor(
    private route: ActivatedRoute,
    private animeMovieService: AnimeMoviesService
  ) {}

  ngOnInit(): void {
    this.getMovieDetail();
  }

  getMovieDetail() {
    const id = this.route.snapshot.paramMap.get('id');
    return this.animeMovieService.getAnimeDetails(id).subscribe((detail) => {
      this.detail = detail;
    });
  }

  AddToFavorite() {
    if (this.detail) {
      if (this.favoriteItemsID.indexOf(this.detail.id) === -1) {
        this.favoriteItemsID = this.favoriteItemsID.concat(this.detail.id);
        alert('The Item Has been added successfully');
      } else alert('The Item has been added already');
    }
  }
}
