import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { UserQuiz } from '../models/UserQuiz.model';

@Injectable({
  providedIn: 'root'
})
export class UserQuizService {

  constructor(
    private httpSvc: HttpService,
  ) { }

  async createUserQuiz(userQuiz: UserQuiz): Promise<UserQuiz> {
    try {
      const url = `${this.httpSvc.apiRoot}/user-quiz`;
      const res = await this.httpSvc.post(url, userQuiz);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async submitForCorrection(userQuiz: UserQuiz): Promise<UserQuiz> {
    try {
      const url = `${this.httpSvc.apiRoot}/user-quiz/check`;
      const res = await this.httpSvc.post(url, userQuiz);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchUserQuizzes(): Promise<UserQuiz[]> {
    try {
      const url = `${this.httpSvc.apiRoot}/user-quiz?all=true`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchMyUserQuizzes(): Promise<UserQuiz[]> {
    try {
      const url = `${this.httpSvc.apiRoot}/user-quiz`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchUserQuizById(id): Promise<UserQuiz> {
    try {
      const url = `${this.httpSvc.apiRoot}/user-quiz/${id}`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updateUserQuiz(userQuiz: UserQuiz): Promise<UserQuiz> {
    try {
      delete userQuiz.createdAt;
      delete userQuiz.updatedAt;
      const url = `${this.httpSvc.apiRoot}/user-quiz/${userQuiz._id}`;
      const res = await this.httpSvc.put(url, userQuiz);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async deleteUserQuiz(id: any): Promise<void> {
    try {
      const url = `${this.httpSvc.apiRoot}/user-quiz/${id}`;
      const res = await this.httpSvc.delete(url, {});
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }
}
