import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './../home/home.component';
import { SigninComponent } from './../signin/signin.component';
import { SignupComponent } from './../signup/signup.component';
import { ForgetPasswordComponent } from './../forget-password/forget-password.component';
import { AboutUsComponent } from '../about-us/about-us.component';

const routes: Routes = [
{
  path: 'home', component: HomeComponent,
  children:[
    { pathMatch: 'full', path: 'signin', component: SigninComponent},
    { pathMatch: 'full', path: 'signup', component: SignupComponent},
    { pathMatch: 'full', path: 'home', component: HomeComponent},
    { pathMatch: 'full', path: 'forgetpassword', component: ForgetPasswordComponent},
    { pathMatch: 'full', path: 'about-us', component: AboutUsComponent},
    { pathMatch: 'full', path: '**', redirectTo: '' }
  ]
},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRouterModule { }
