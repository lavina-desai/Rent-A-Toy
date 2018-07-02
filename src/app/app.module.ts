import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

import { SharedMaterialModule } from './shared-material/shared-material.module';
import { AppRouterModule } from './app-router/app-router.module';

import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    ForgetPasswordComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    SharedMaterialModule,
    AppRouterModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
