import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Question } from '../models/Question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private httpSvc: HttpService,
  ) { }

  async createQuestion(question: Question): Promise<Question> {
    try {
      const url = `${this.httpSvc.apiRoot}/questions`;
      const res = await this.httpSvc.post(url, question);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchQuestions(): Promise<Question[]> {
    try {
      const url = `${this.httpSvc.apiRoot}/questions`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updateQuestion(question: Question): Promise<Question> {
    try {
      const url = `${this.httpSvc.apiRoot}/questions/${question._id}`;
      const res = await this.httpSvc.put(url, question);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async deleteQuestion(id: any): Promise<void> {
    try {
      const url = `${this.httpSvc.apiRoot}/questions/${id}`;
      const res = await this.httpSvc.delete(url, {});
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }
}
