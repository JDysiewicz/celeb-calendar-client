import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-celeb-page-header',
  templateUrl: './celeb-page-header.component.html',
})
export class CelebPageHeaderComponent implements OnInit {
  @Input() month: string;
  @Input() day: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.month, this.day);
  }
}
