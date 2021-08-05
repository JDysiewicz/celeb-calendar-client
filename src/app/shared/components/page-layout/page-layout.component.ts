import { Component } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  template: `
    <div class="section columns is-centered">
      <div class="container column is-full">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class PageLayoutComponent {
  constructor() {}
}
