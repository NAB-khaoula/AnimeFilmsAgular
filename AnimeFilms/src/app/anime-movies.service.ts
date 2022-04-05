import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MovieDetail } from './models/MovieDetail.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeMoviesService {
  constructor(private http: HttpClient) {}

  private animeDataUrl: string = 'https://ghibliapi.herokuapp.com/films';

  //TODO I have to specify the type of the observable returned;
  getAnimeMovies(): Observable<MovieDetail[]> {
    return this.http.get<MovieDetail[]>(this.animeDataUrl);
  }
  getAnimeDetails(id: string | null): Observable<MovieDetail> {
    console.log('get anime details: ', `${this.animeDataUrl}/${id}`);
    return this.http.get<MovieDetail>(`${this.animeDataUrl}/${id}`);
  }
}
