import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { ToastService } from 'src/app/common/services/toast.service';

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
      const res = await this.authSvc.login(this.email, this.password);
      if (!res) { throw new Error('Invalid username or password'); }
      this.toastSvc.success('Logged in');
    } catch (error) {
      this.toastSvc.error(error.message);
    }
  }

}
