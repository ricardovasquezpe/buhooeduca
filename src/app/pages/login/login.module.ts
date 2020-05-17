import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MybuttonComponent } from '../../components/mybutton/mybutton.component';
import { MyinputComponent } from '../../components/myinput/myinput.component';
import { LoginRoutingModule } from './login-routing.module';
​
@NgModule({
	declarations: [
		BaseComponent,
		LoginComponent,
		RegisterComponent,
		ForgotComponent,
		MybuttonComponent,
		MyinputComponent
	],
	imports: [
		CommonModule,
		LoginRoutingModule
	],
})
​
export class LoginModule { }