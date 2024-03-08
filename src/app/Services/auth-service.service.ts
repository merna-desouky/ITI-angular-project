import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  token: any;
  constructor() {}

  isLoggedIn(): string | null {
    this.token = localStorage.getItem('token');
    return this.token;
  }

  DecodedToken(token:any):any {
    if (token) {
      let decoded = jwt_decode.jwtDecode(token);
      return decoded;
     
    }else if(this.token){
      let decoded = jwt_decode.jwtDecode(this.token);
      return decoded;
    }else{
      return false;

    }
  }
}
