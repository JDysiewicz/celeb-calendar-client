import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    IconComponent,
  ],
})
export class SharedModule {}
