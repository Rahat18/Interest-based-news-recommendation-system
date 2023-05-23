import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { MainAppComponent } from './main-app/main-app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TrendingComponent } from './components/trending/trending.component';
import { WeeklyTopComponent } from './components/weekly-top/weekly-top.component';
import { RecentComponent } from './components/recent/recent.component';
import { WhatYouLoveComponent } from './components/what-you-love/what-you-love.component';
import { ForYouComponent } from './components/for-you/for-you.component';
import { SingleContentComponent } from './pages/single-content/single-content.component';
import { ContainerComponent } from './pages/container/container.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule } from './ng-antd.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { TokenInterceptorService } from './utils/token-interceptor.service';
import { SearchNewsComponent } from './pages/search-news/search-news.component';
import { UpdateUserComponent } from './pages/update-user/update-user.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    MainAppComponent,
    HeaderComponent,
    FooterComponent,
    TrendingComponent,
    WeeklyTopComponent,
    RecentComponent,
    WhatYouLoveComponent,
    ForYouComponent,
    SingleContentComponent,
    ContainerComponent,
    SearchNewsComponent,
    UpdateUserComponent,
    ForgotPasswordComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgZorroAntdModule, BrowserAnimationsModule],
  providers: [{
    // provide: LocationStrategy, useClass: HashLocationStrategy
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
  },
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: NZ_I18N, useValue: en_US },],
  bootstrap: [AppComponent],
})
export class AppModule { }
