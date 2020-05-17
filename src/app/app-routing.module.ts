import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AplicacionComponent } from './pages/aplicacion/aplicacion.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app/:searchApp', component: AplicacionComponent },
  { path: '404', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }