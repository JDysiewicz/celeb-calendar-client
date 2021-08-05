import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-title',
  template: ` <h1 class="title is-2 has-text-centered">{{ title }}</h1> `,
})
export class PageTitleComponent {
  @Input() title: string;

  constructor() {}
}
