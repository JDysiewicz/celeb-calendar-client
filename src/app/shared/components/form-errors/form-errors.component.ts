import { Component, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { FormError } from 'src/app/types';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
})
export class FormErrorsComponent implements OnInit {
  @Input() errorObj: ValidationErrors;
  @Input() errors: FormError[];
  constructor() {}

  ngOnInit(): void {}
}
