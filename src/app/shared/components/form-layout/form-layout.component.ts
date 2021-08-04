import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-layout',
  template: `
    <div class="section columns is-centered">
      <div class="container column is-one-third">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class FormLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
