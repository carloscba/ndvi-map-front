import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormLoginComponent } from './components/form-login/form-login.component';

import { routing } from './app.routing';

import { LoginService } from './services/login.service';
import { ProfilesService } from './services/profiles.service';
import { LotesService } from './services/lotes.service';

import { IndexComponent } from './routes/index/index.component';
import { LoginComponent } from './routes/login/login.component';
import { DashboardComponent } from './routes/dashboard/dashboard.component';
import { LotesComponent } from './routes/lotes/lotes.component';
import { LoteListComponent } from './components/lote-list/lote-list.component';
import { LoteFormComponent } from './components/lote-form/lote-form.component';
import { LotesNewComponent } from './routes/lotes/lotes-new.component';

import { AgmCoreModule } from 'angular-google-maps-src/src/core';

@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    IndexComponent,
    LoginComponent,
    DashboardComponent,
    LotesComponent,
    LoteListComponent,
    LoteFormComponent,
    LotesNewComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule, 
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvzWscengQ1ItOtYVWjldACDm7jBH3o7I'
    })    
  ],
  providers: [
    LoginService,
    ProfilesService,
    LotesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
