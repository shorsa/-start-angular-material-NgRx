import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesConstants } from 'src/app/core/constants';
import { SignInComponent } from './sign-in.component';


const routes: Routes = [
  {
    path: RoutesConstants.INDEX,
    component: SignInComponent
  }
];

const MATERIAL = [

];

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    MATERIAL,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignInModule { }
