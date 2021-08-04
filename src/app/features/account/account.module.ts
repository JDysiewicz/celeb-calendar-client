import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { RegisterFormComponent } from './register/components/register-form/register-form.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, LoginFormComponent, RegisterFormComponent],
  imports: [AccountRoutingModule, SharedModule],
})
export class AccountModule {}
