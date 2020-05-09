import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { BackButtonComponent } from './components/back-button/back-button.component';

@NgModule({
  declarations: [NavComponent, LoadingComponent, BackButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavComponent, LoadingComponent, BackButtonComponent],
})
export class SharedModule {}
