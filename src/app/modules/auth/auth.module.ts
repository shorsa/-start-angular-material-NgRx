import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';


const MATERIAL = [

];

@NgModule({
  declarations: [
  ],
  imports: [
    MATERIAL,
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
