import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NavbarComponent,
  ],
})
export class SharedModule {}
