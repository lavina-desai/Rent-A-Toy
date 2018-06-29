import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { SigninComponent } from './../signin/signin.component';
import { SignupComponent } from './../signup/signup.component';

const routes: Routes = [
    { pathMatch: 'full', path: 'signin',component: SigninComponent},
    { pathMatch: 'full', path: 'signup', component: SignupComponent},
    { pathMatch: 'full', path: 'home', component: HomeComponent},
    { pathMatch: 'full', path: '', redirectTo: '/signin' }
 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule { }
