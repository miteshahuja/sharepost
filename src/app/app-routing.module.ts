import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginBoxComponent } from './login-box/login-box.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  { path: 'login', component: LoginBoxComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule { }




