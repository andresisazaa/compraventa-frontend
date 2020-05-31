import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    NavComponent,
    LoadingComponent,
    BackButtonComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavComponent,
    LoadingComponent,
    BackButtonComponent,
    HomeComponent,
    HeaderComponent
  ],
})
export class SharedModule { }
