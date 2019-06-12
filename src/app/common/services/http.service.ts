import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ResponseBody } from '../models/ResponseBody.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  };

  constructor(private http: HttpClient) { }

  async get(url: string, requestParams: object): Promise<any> {
    try {
      const params: string = new HttpParams(requestParams).toString();
      const res = await this.http.get<ResponseBody>(`${url}?${params}`, this.httpOptions).toPromise();
      if (!!res.error) { throw new Error(res.error); }
      return res.result.value;
    } catch (error) {
      return error;
    }
  }

  async post(url: string, requestBody: object): Promise<any> {
    try {
      const params: string = new HttpParams(requestBody).toString();
      const res = await this.http.post<ResponseBody>(`${url}`, requestBody, this.httpOptions).toPromise();
      if (!!res.error) { throw new Error(res.error); }
      return res.result.value;
    } catch (error) {
      (!!error.msg) ? error.message = error.msg : error.msg = error.message;
      return error;
    }
  }

  async delete(url: string, requestBody: object): Promise<any> {
    try {
      const params: string = new HttpParams(requestBody).toString();
      const options = { ...this.httpOptions, body: params };
      const res = await this.http.delete<ResponseBody>(`${url}`, options).toPromise();
      if (!!res.error) { throw new Error(res.error); }
      return res.result.value;
    } catch (error) {
      (!!error.msg) ? error.message = error.msg : error.msg = error.message;
      return error;
    }
  }
}
