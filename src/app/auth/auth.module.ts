import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
