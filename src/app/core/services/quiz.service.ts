import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Quiz } from '../models/Quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(
    private httpSvc: HttpService,
  ) { }

  async createQuiz(quiz: Quiz): Promise<Quiz> {
    try {
      const url = `${this.httpSvc.apiRoot}/quizzes`;
      const res = await this.httpSvc.post(url, quiz);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchQuizzes(): Promise<Quiz[]> {
    try {
      const url = `${this.httpSvc.apiRoot}/quizzes`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchQuizById(id): Promise<Quiz> {
    try {
      const url = `${this.httpSvc.apiRoot}/quizzes/${id}`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updateQuiz(quiz: Quiz): Promise<Quiz> {
    try {
      const url = `${this.httpSvc.apiRoot}/quizzes/${quiz._id}`;
      const res = await this.httpSvc.put(url, quiz);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async deleteQuiz(id: any): Promise<void> {
    try {
      const url = `${this.httpSvc.apiRoot}/quizzes/${id}`;
      const res = await this.httpSvc.delete(url, {});
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }
}
