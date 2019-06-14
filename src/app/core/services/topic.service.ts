import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Topic } from '../models/Topic.model';

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(
    private httpSvc: HttpService,
  ) { }

  async createTopic(topic: Topic): Promise<Topic> {
    try {
      const url = `${this.httpSvc.apiRoot}/topics`;
      const res = await this.httpSvc.post(url, topic);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchTopics(): Promise<Topic[]> {
    try {
      const url = `${this.httpSvc.apiRoot}/topics`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updateTopic(topic: Topic): Promise<Topic> {
    try {
      delete topic.createdAt;
      delete topic.updatedAt;
      const url = `${this.httpSvc.apiRoot}/topics/${topic._id}`;
      const res = await this.httpSvc.put(url, topic);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async deleteTopic(id: any): Promise<void> {
    try {
      const url = `${this.httpSvc.apiRoot}/topics/${id}`;
      const res = await this.httpSvc.delete(url, {});
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }
}
