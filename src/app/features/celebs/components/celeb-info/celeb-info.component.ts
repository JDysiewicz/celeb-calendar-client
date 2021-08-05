import { Component, Input, OnInit } from '@angular/core';
import { Celeb } from 'src/app/types';

@Component({
  selector: 'app-celeb-info',
  templateUrl: './celeb-info.component.html',
  styleUrls: ['./celeb-info.component.css'],
})
export class CelebInfoComponent implements OnInit {
  @Input() celeb: Celeb;
  constructor() {}

  ngOnInit(): void {}
}
