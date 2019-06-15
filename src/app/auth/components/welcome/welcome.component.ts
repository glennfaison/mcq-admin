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

  private _firstName: string;
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
    this.getUserName();
  }
  private _lastName: string;
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
    this.getUserName();
  }
  name: string;
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

  getUserName() {
    const space = (this.firstName && this.lastName) ? ' ' : '';
    this.name = (this.firstName || '') + space + (this.lastName || '');
  }

  passwordsAreValid(): boolean {
    return this.password === this.repeatPassword;
  }

  formIsValid(): boolean {
    return !!this.name && this.passwordsAreValid();
  }

  async registerButtonClicked() {
    try {
      const user: User = { firstName: this.name, email: this.email, password: this.password } as User;
      await this.authSvc.register(user);
      // this.toastSvc.success('Logged in');
      this.router.navigate(['/login']);
    } catch (error) {
      this.toastSvc.error(error.message);
    }
  }

}
