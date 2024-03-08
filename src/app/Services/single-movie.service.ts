import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class SingleMovieService {
  router = inject(Router);

  constructor(private http: HttpClient) {}
  GetMovieByName(movieName: {}): Observable<any> {
    return this.http.post(
      'http://localhost:2024/movies/movie-name',
      movieName,
      {
        headers: new HttpHeaders({
          accept: 'application/json',
        }),
      }
    );
  }

  checkIfReviewed(movieName: {}): Observable<any> {
    return this.http.post(
      'http://localhost:2024/movies/review-check',
      movieName,
      {
        headers: new HttpHeaders({
          accept: 'application/json',
        }),
      }
    );
  }

  SendReview(review: {}): Observable<any> {
    return this.http.post('http://localhost:2024/movies/add-review', review, {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
    });
  }

  GetReviews(movieName: {}): Observable<any> {
    return this.http.post('http://localhost:2024/movies/reviews', movieName, {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
    });
  }
  GetFavourites(movieName: {}): Observable<any> {
    return this.http.post('http://localhost:2024/movies/reviews', movieName, {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
    });
  }
  AddToFavourites(movieName: {}): Observable<any> {
    return this.http.post(
      'http://localhost:2024/user/add-favourite',
      movieName,
      {
        headers: new HttpHeaders({
          accept: 'application/json',
        }),
      }
    );
  }
  RemoveFromFavourites(movieName: {}): Observable<any> {
    return this.http.post(
      'http://localhost:2024/user/delete-favourite',
      movieName,
      {
        headers: new HttpHeaders({
          accept: 'application/json',
        }),
      }
    );
  }
  CheckFavourites(movieName: {}): Observable<any> {
    return this.http.post(
      'http://localhost:2024/user/check-favourite',
      movieName,
      {
        headers: new HttpHeaders({
          accept: 'application/json',
        }),
      }
    );
  }
}
