import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AplicacionComponent } from './pages/aplicacion/aplicacion.component';
import { ListUserComponent } from './pages/list-user/list-user.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./services/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./core/interceptor";
import { LoginModule } from "./pages/login/login.module";
import { TutorialScreenComponent } from './components/tutorial/tutorial-screen/tutorialscreen.component';
import { TutorialListComponent } from './components/tutorial/tutorial-list/tutoriallist.component';
import { ImgCacheModule } from 'ng-imgcache';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListUserComponent,
    AplicacionComponent,
		TutorialScreenComponent,
		TutorialListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImgCacheModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
