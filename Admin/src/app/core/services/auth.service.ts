import { Injectable } from '@angular/core';

import { getFirebaseBackend } from '../../authUtils';

import { User } from '../models/auth.models';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    user: User;
    private registerUrl: string = environment.baseUrl + "/users/register";
    private loginUrl: string = environment.baseUrl + "/users/login";

    constructor(
        private http: HttpClient
        )
    {}
  // register URL
  registerForm(data: any) {
    return this.http.post(this.registerUrl, data)
  }

  loginForm(data: any) {
    return this.http.post(this.loginUrl, data)
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}

