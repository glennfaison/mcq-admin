import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Option } from '../models/Option.model';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  constructor(
    private httpSvc: HttpService,
  ) { }

  async createOption(option: Option): Promise<Option> {
    try {
      const url = `${this.httpSvc.apiRoot}/options`;
      const res = await this.httpSvc.post(url, option);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async fetchOptions(): Promise<Option[]> {
    try {
      const url = `${this.httpSvc.apiRoot}/options`;
      const res = await this.httpSvc.get(url, {});
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async updateOption(option: Option): Promise<Option> {
    try {
      delete option.createdAt;
      delete option.updatedAt;
      const url = `${this.httpSvc.apiRoot}/options/${option._id}`;
      const res = await this.httpSvc.put(url, option);
      if (!!res.error) { throw res; }
      return res;
    } catch (error) {
      throw error;
    }
  }

  async deleteOption(id: any): Promise<void> {
    try {
      const url = `${this.httpSvc.apiRoot}/options/${id}`;
      const res = await this.httpSvc.put(url, {});
      if (!!res.error) { throw res; }
    } catch (error) {
      throw error;
    }
  }
}
