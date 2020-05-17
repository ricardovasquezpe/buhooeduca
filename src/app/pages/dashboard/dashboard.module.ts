import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
​
@NgModule({
	declarations: [
		BaseComponent,
		HomeComponent
	],
	imports: [
		CommonModule,
		DashboardRoutingModule
	],
})
​
export class DashboardModule { }