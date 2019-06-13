import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  success(msg) {
    alert(msg);
  }

  error(msg) {
    alert(msg);
  }

  info(msg) {
    alert(msg);
  }
}
