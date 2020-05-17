import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';

const loginRoutes: Routes = [
  {
    path: 'login',
    component: BaseComponent,
    children: [
        {
            path: '',
            component: LoginComponent
        },
        {
            path: 'register',
            component: RegisterComponent
        },
        {
            path: 'forgot',
            component: ForgotComponent
        }
    ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }