import { Injectable } from '@angular/core';
import { User } from '../models/User.model';

const users: User[] = require('../../../assets/users.json');

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async login(email: string, password: string): Promise<User> {
    try {
      const user: User = users.find(usr => usr.email === email);
      if (!user) {
        return null;
      } else if (user.password !== password) {
        throw new Error('Invalid password');
      }
      return user;
    } catch (error) {
      throw error;
    }
  }
}
