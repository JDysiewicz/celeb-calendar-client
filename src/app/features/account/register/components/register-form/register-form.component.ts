import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { MustMatch } from 'src/app/shared/utils/must-match.validator';
import { RegisterFormValeus } from '../../types';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  @Input() isSubmitting: boolean;
  @Input() formErrorMessage: string;
  @Output() register = new EventEmitter<RegisterFormValeus>();
  registerForm: FormGroup;
  submitted = false;
  faUser = faUser;
  faLock = faLock;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9]+$/),
            Validators.minLength(3),
            Validators.maxLength(14),
          ],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(14),
          ],
        ],
        passwordConfirmation: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(14),
          ],
        ],
        accountType: ['fan', [Validators.required]],
        name: [''],
        description: [''],
        followers: [0],
        image: [''],
        birthday: [new Date('1997-09-12')],
      },
      {
        validator: MustMatch('password', 'passwordConfirmation'),
      }
    );
  }

  // Getter for form access
  get f() {
    return this.registerForm.controls;
  }

  showErrors(inputField: string) {
    return this.f[inputField].errors && this.submitted;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.register.emit(this.registerForm.value);
  }
}
