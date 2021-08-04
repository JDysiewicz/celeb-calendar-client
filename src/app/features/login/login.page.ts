import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { ApiError } from 'src/app/shared/models/ApiError.model';
import { LoginForm } from './types';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage {
  isSubmitting = false;
  formErrorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(formValues: LoginForm) {
    this.isSubmitting = true;

    return this.authService.signIn(formValues).subscribe(
      (response) => {
        this.authService.user.next(response);
        this.isSubmitting = false;
        alert(`Welcome, ${this.authService.user.getValue()?.username}`);
        this.router.navigate(['/calendar']);
      },
      (error) => {
        const errorObj = new ApiError(
          error.status,
          error.error.errors.detail,
          error
        );
        errorObj.processError();
        this.isSubmitting = false;
        if (errorObj.getCode == 401) {
          this.formErrorMessage = errorObj.getMessage;
        }
      }
    );
  }
}
