import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ResponseBody } from '../models/ResponseBody.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  accessToken: any;
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  async get(url: string, requestParams: object, withAuth: boolean): Promise<any> {
    try {
      if (withAuth) { this.options.headers.append('Authorization', `Bearer ${this.accessToken}`); }
      const params: string = new HttpParams(requestParams).toString();
      const res = await this.http.get<ResponseBody>(`${url}?${params}`, this.options).toPromise();
      if (!!res.error) { throw new Error(res.error); }
      return res.result.value;
    } catch (error) {
      return error;
    }
  }

  async post(url: string, requestBody: object, withAuth: boolean): Promise<any> {
    try {
      if (withAuth) { this.options.headers.append('Authorization', `Bearer ${this.accessToken}`); }
      const params: string = new HttpParams(requestBody).toString();
      const res = await this.http.post<ResponseBody>(`${url}`, requestBody, this.options).toPromise();
      if (!!res.error) { throw new Error(res.error); }
      return res.result.value;
    } catch (error) {
      (!!error.msg) ? error.message = error.msg : error.msg = error.message;
      return error;
    }
  }

  async delete(url: string, requestBody: object, withAuth: boolean): Promise<any> {
    try {
      if (withAuth) { this.options.headers.append('Authorization', `Bearer ${this.accessToken}`); }
      const params: string = new HttpParams(requestBody).toString();
      const options = { ...this.options, body: params };
      const res = await this.http.delete<ResponseBody>(`${url}`, options).toPromise();
      if (!!res.error) { throw new Error(res.error); }
      return res.result.value;
    } catch (error) {
      (!!error.msg) ? error.message = error.msg : error.msg = error.message;
      return error;
    }
  }
}
