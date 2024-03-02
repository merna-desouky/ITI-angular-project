import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingServiceService {
  constructor(public http: HttpClient) {}

  getCinemas(movieName: any): Observable<any> {
    let headers = {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
    };
    return this.http.post<any>(
      'http://localhost:2024/reserve/movie-name',
      movieName,
      headers
    );
  }
  getDates(details: {}) {
    let headers = {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
    };
    return this.http.post<any>(
      'http://localhost:2024/reserve/cinema-name/dates',
      details,
      headers
    );
  }
  getTimes(details: {}) {
    let headers = {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
    };
    return this.http.post<any>(
      'http://localhost:2024/reserve//cinema-name/dates/movies/times',
      details,
      headers
    );
  }
  getReservedSeats(details: {}) {
    let headers = {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
    };
    return this.http.post<any>(
      "http://localhost:2024/reserve//reserved-seats",
      details,
      headers
    );
  }
}
