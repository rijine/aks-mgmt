import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [NavbarComponent, LoadingComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, LoadingComponent]
})
export class CoreModule {}
