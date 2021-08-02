import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { ApiError } from 'src/app/core/models/apiError.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  faUser = faUser;
  faLock = faLock;
  submitted = false;
  isSubmitting = false;
  formErrorMessage = '';

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.isSubmitting = true;

    // TODO on sign in redirect to calendar page
    return this.authService.signIn(this.loginForm.value).subscribe(
      (response) => {
        this.loginForm.reset();
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

  // DELETE THIS; ONLY HERE FOR CHECKING COOKIES
  check() {
    return this.authService.check().subscribe(
      (response) => console.log('RES', response),
      (error) => console.log('ERR', error)
    );
  }

  showErrors(inputField: string) {
    return this.f[inputField].errors && this.submitted;
  }
}
