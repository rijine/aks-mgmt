import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [NavbarComponent, LoadingComponent, SidenavComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, LoadingComponent, SidenavComponent]
})
export class CoreModule {}
