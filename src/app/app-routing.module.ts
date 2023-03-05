import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login/login.component';
import { MainDetailsComponent } from './main/main-details/main-details.component';
import { MainStartComponent } from './main/main-start/main-start.component';
import { MainComponent } from './main/main/main.component';
import { MinorModule } from './minor/minor.module';
import { MinorComponent } from './minor/primary/minor/minor.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard],
    children: [
    { path: '', component: MainStartComponent }, 
    { path: 'main/:id', component: MainDetailsComponent },
    ]
  }, 
  { path: 'minor', component: MinorComponent, canActivate: [AuthGuard] }, 
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
