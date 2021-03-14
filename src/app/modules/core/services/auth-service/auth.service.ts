import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Constant } from '../../../utilities/constant';
import { LoginModel } from '../../../../models/login.model';
import { environment } from 'src/environments/environment';
import { SignupModel } from 'src/app/models/signin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService,
    private router: Router) {}

  public isAuthenticated(): boolean {    const token = localStorage.getItem(Constant.ACCESS_TOKEN);
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(credential: LoginModel) {
    return this.http.post(`${environment.baseUrl}/api/auth/signin`, credential);
  }

  signup(data: SignupModel) {
    return this.http.post(`${environment.baseUrl}/api/auth/signup`, data);
  }

  get token(): string {
    return localStorage.getItem(Constant.ACCESS_TOKEN);
  }

  set token(item) {
    localStorage.setItem(Constant.ACCESS_TOKEN, item);
  }

  get user(): string {
    return localStorage.getItem(Constant.USER);
  }
  set user(item) {
    localStorage.setItem(Constant.USER, item);
  }


}
