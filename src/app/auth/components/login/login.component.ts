import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { User } from 'src/app/core/models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  email: string;
  password: string;
  imageUrl: string;

  constructor(
    private authSvc: AuthService,
    private toastSvc: ToastService,
    private router: Router,
    private ref: ChangeDetectorRef
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
    if (this.imageUrl) {
      try {
        const res: User = await this.authSvc.login(this.email, this.password, this.imageUrl);
        if (!res) { throw new Error('Login failed'); }
        // this.toastSvc.success('Logged in');
        this.router.navigate(['/home']);
      } catch (error) {
        this.toastSvc.error(error.message);
      }
    }
  }

  imageChanged(data) {
    this.imageUrl = data;
    this.ref.detectChanges();
  }

}
