import { Injectable } from '@angular/core';
import { User } from '../models/User.model';
import { HttpService } from './http.service';
import { CoreService } from './core.service';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpSvc: HttpService,
    private core: CoreService,
    private router: Router
  ) { }

  async register(user: User): Promise<void> {
    try {
      const url = `${this.httpSvc.apiRoot}/auth/signup`;
      const res = await this.httpSvc.post(url, user, false);
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const url = `${this.httpSvc.apiRoot}/auth/login`;
      const res = await this.httpSvc.post(url, { email, password }, false);
      if (!!res.error) { throw res; }
      const { user, jwt } = res;
      this.httpSvc.accessToken = jwt;
      localStorage.setItem('mcq-jwt', jwt);
      localStorage.setItem('mcq-user', user);
      this.core.thisUser = user;
      return user;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    localStorage.removeItem('mcq-user');
    localStorage.removeItem('mcp-jwt');
    this.router.navigate(['login']);
  }

  async getThisUser(): Promise<User> {
    try {
      const url = `${this.httpSvc.apiRoot}/auth/me`;
      const res = await this.httpSvc.get(url, {}, false);
      if (!!res.error) { throw res; }
      this.core.thisUser = res;
      return res;
    } catch (error) {
      throw error;
    }
  }
}
