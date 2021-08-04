import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-icon',
  template: `
    <span class="icon is-small is-left">
      <fa-icon [icon]="icon"></fa-icon>
    </span>
  `,
})
export class IconComponent {
  @Input() icon: IconDefinition;
  constructor() {}
}
