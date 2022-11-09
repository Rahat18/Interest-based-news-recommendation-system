import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainAppComponent } from './main-app/main-app.component';


const appRoutes:Routes=[
  
  
  {path : 'login' , component: LoginComponent},
  {path : 'main-app' , component: MainAppComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'login',  pathMatch: 'full' }
  
  
];



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MainAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
