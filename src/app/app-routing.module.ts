import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';

const routes: Routes = [
  {
    path       : '',
    pathMatch  : 'full',
    redirectTo : '/customer/sign-up',
    data       : {title: 'Sign-up'}
},{
  path       : 'customer/sign-up',
  pathMatch  : 'full',
  component  : SignUpComponent,
},{
  path       : 'customer/sign-in',
  pathMatch  : 'full',
  component  : SignInComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
