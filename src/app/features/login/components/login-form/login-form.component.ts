import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginForm } from '../../types';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Input() formErrorMessage: string;
  @Input() isSubmitting: boolean;
  @Output() formSubmit = new EventEmitter<LoginForm>();

  loginForm: FormGroup;
  submitted = false;

  faUser = faUser;
  faLock = faLock;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  showErrors(inputField: string) {
    return this.f[inputField].errors && this.submitted;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.formSubmit.emit(this.loginForm.value);
  }
}
