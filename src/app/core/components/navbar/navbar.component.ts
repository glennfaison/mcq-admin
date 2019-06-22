import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User.model';
import { AuthService } from '../../services/auth.service';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  thisUser: User;

  constructor(
    private core: CoreService,
    private auth: AuthService,
  ) {
    this.fetchThisUser();
  }

  ngOnInit() {
    this.fetchThisUser();
  }

  async fetchThisUser() {
    this.thisUser = await this.core.thisUser;
    if (!this.thisUser) { this.thisUser = await this.auth.getThisUser(); }
  }

}
