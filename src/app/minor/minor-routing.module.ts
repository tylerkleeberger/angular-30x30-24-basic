import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../login/auth.guard';
import { MinorDetailComponent } from './primary/minor-detail/minor-detail.component';
import { MinorEditComponent } from './primary/minor-edit/minor-edit.component';
import { MinorResolverService } from './primary/minor-resolver.service';
import { MinorStartComponent } from './primary/minor-start/minor-start.component';
import { MinorComponent } from './primary/minor/minor.component';
import { SecondaryEditComponent } from './secondary/secondary-edit/secondary-edit.component';
import { SecondaryComponent } from './secondary/secondary.component';

const routes: Routes = [
  { 
    path: '',
    component: MinorComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', component: MinorStartComponent
      },
      {
        path: 'new', component: MinorEditComponent
      },
      {
        path: ':id',
        component: MinorDetailComponent,
      },
      {
        path: ':id/edit',
        component: MinorEditComponent,
      }
    ]
  },
  { 
    path: 'secondary', 
    component: SecondaryComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'secondary-edit', component: SecondaryEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinorRoutingModule { }
