import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainAppComponent } from './main-app/main-app.component';
import { ContainerComponent } from './pages/container/container.component';
import { SingleContentComponent } from './pages/single-content/single-content.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: '', component: MainAppComponent },
      { path: 'news', component: SingleContentComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
