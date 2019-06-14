import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../services/core.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent implements OnInit {

  constructor(
    private core: CoreService,
    private http: HttpService,
  ) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('mcq-jwt');
    this.http.accessToken = null;
    this.core.thisUser = null;
  }

}
