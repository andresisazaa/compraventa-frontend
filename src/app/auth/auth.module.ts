import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routes';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, AuthRoutingModule],
})
export class AuthModule {}
