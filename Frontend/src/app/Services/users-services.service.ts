declare var google: any;

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersServicesService {
  router = inject(Router);
  constructor(private http: HttpClient) {}

  Register(userData: {}): Observable<any> {
    return this.http.post('http://localhost:2024/auth/register', userData, {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
    });
  }

  Login(userData: {}): Observable<any> {
    return this.http.post('http://localhost:2024/auth/login', userData, {
      headers: new HttpHeaders({
        accept: 'application/json',
      }),
    });
  }

  Logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  GoogleLogOut(): void {
    google.accounts.id.disableAutoSelect();
  }

  checkIfFavorite(movieName: {}): Observable<any> {
    return this.http.post(
      `http://localhost:2024/user/check-favourite`,
      movieName
    );
  }
}
