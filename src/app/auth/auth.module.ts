import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routes';

@NgModule({
  declarations: [SignUpComponent, LoginComponent, AuthComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, AuthRoutingModule],
})
export class AuthModule {}
