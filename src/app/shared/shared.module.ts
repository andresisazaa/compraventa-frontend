import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    NavComponent,
    LoadingComponent,
    BackButtonComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [NavComponent, LoadingComponent, BackButtonComponent, HomeComponent],
})
export class SharedModule {}
