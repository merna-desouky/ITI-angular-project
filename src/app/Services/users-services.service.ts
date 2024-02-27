import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServicesService {

  constructor(private http: HttpClient) { }

  Register(userData: {}): Observable<any> {
    return this.http.post("http://localhost:2024/auth/register", userData, {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    })
  }
  Login(userData: {}): Observable<any> {
    return this.http.post("http://localhost:2024/auth/login", userData, {
      headers: new HttpHeaders({
        accept: 'application/json'
      })
    })
  }
  Logout():void{
    localStorage.clear()
  }

}
