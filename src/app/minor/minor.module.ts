import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinorRoutingModule } from './minor-routing.module';
import { HeaderComponent } from './header/header.component';
import { MinorComponent } from './primary/minor/minor.component';
import { MinorDetailComponent } from './primary/minor-detail/minor-detail.component';
import { MinorEditComponent } from './primary/minor-edit/minor-edit.component';
import { MinorListComponent } from './primary/minor-list/minor-list.component';
import { MinorItemComponent } from './primary/minor-list/minor-item/minor-item.component';
import { MinorStartComponent } from './primary/minor-start/minor-start.component';
import { AlertComponent } from './shared/alert/alert.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { PlaceholderComponent } from './shared/placeholder/placeholder.component';
import { SecondaryComponent } from './secondary/secondary.component';
import { SecondaryEditComponent } from './secondary/secondary-edit/secondary-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../login/auth.guard';


@NgModule({
  declarations: [
    HeaderComponent,
    MinorComponent,
    MinorDetailComponent,
    MinorEditComponent,
    MinorListComponent,
    MinorItemComponent,
    MinorStartComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderComponent,
    SecondaryComponent,
    SecondaryEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MinorRoutingModule
  ]
})
export class MinorModule { }
