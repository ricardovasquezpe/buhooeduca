import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';

const loginRoutes: Routes = [
  {
    path: 'dashboard',
    component: BaseComponent,
    children: [
        {
            path: '',
            component: HomeComponent
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
export class DashboardRoutingModule { }