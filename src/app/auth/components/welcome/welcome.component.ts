import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { User } from 'src/app/core/models/User.model';

import { FaceRecognitionService } from '../../../core/services/face-recognition.service';
import { FaceRecognitionResponse } from '../../../core/models/Face.model';
import { CameraService } from '../../../core/services/camera.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  providers: [FaceRecognitionService, CameraService],
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;

  faceApiResponse: Observable<FaceRecognitionResponse>;
  subscriptionKey: string;
  imageString = '';

  constructor(
    private authSvc: AuthService,
    private toastSvc: ToastService,
    private router: Router,
    private faceRecognitionService: FaceRecognitionService,
    private cameraService: CameraService

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

  processImage() {
    if (!this.subscriptionKey) {
      return;
    }

    this.faceApiResponse = this.cameraService.getPhoto().pipe(
      switchMap((base64Image: string) => {
        this.imageString = base64Image;
        return this.faceRecognitionService.scanImage(
          this.subscriptionKey,
          base64Image
        );
      })
    );

    console.log(this.faceApiResponse);
  }

}
