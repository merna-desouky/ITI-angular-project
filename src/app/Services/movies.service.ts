import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly URL_DB = "https://api.sampleapis.com/movies/comedy"

  constructor(private readonly myClient: HttpClient) { }
  getAllMovies() {
    return this.myClient.get(this.URL_DB);
  }
  getMovieByID(id: number) {
    return this.myClient.get(`${this.URL_DB}/${id}`);
  }

}
