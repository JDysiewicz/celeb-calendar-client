import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

@NgModule({
  declarations: [RegisterPage, RegisterFormComponent],
  imports: [SharedModule, RegisterRoutingModule],
})
export class RegisterModule {}
