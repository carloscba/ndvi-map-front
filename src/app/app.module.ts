import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

import { routing } from './app.routing';

import { LoginService } from './services/login.service';
import { ProfilesService } from './services/profiles.service';

import { IndexComponent } from './routes/index/index.component';
import { LoginComponent } from './routes/login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    IndexComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule, 
    routing
  ],
  providers: [
    LoginService,
    ProfilesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
