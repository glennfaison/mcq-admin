import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { ToastService } from 'src/app/common/services/toast.service';
import { User } from 'src/app/common/models/User.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  email: string;
  password: string;

  constructor(
    private authSvc: AuthService,
    private toastSvc: ToastService,
    private router: Router,
  ) { }

  ngOnInit() {
    const pageTop = document.getElementById('page-top');
    pageTop.classList.add('bg-gradient-primary');
  }
  ngOnDestroy(): void {
    const pageTop = document.getElementById('page-top');
    pageTop.classList.remove('bg-gradient-primary');
  }

  async loginButtonClicked() {
    try {
      const res: User = await this.authSvc.login(this.email, this.password);
      if (!res) { throw new Error('Login failed'); }
      // this.toastSvc.success('Logged in');
      this.router.navigate(['/courses']);
    } catch (error) {
      this.toastSvc.error(error.message);
    }
  }

}
