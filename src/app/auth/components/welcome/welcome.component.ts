import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { User } from 'src/app/core/models/User.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;

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

  passwordsAreValid(): boolean {
    return this.password === this.repeatPassword;
  }

  formIsValid(): boolean {
    return !!this.firstName && !!this.lastName && this.passwordsAreValid();
  }

  async registerButtonClicked() {
    try {
      const user: User = { firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password } as User;
      await this.authSvc.register(user);
      // this.toastSvc.success('Logged in');
      this.router.navigate(['/login']);
    } catch (error) {
      this.toastSvc.error(error.message);
    }
  }

}
