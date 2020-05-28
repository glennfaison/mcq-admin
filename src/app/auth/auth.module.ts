import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CameraSnapshotComponent } from './components/camera-snapshot/camera-snapshot.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    LoginComponent,
    CameraSnapshotComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class AuthModule { }
