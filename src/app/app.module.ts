import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main/main.component';
import { LoginComponent } from './login/login/login.component';
import { MainDetailsComponent } from './main/main-details/main-details.component';
import { MainStartComponent } from './main/main-start/main-start.component';
import { MainListComponent } from './main/main-list/main-list.component';
import { MinorModule } from './minor/minor.module'
import { AlertComponent } from './minor/shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    MainDetailsComponent,
    MainStartComponent,
    MainListComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    AppRoutingModule,
    MinorModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ]
})
export class AppModule { }
