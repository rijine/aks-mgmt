import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService, AuthInterceptor, LocalStorageService } from './services';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, AuthGuard, AuthInterceptor, LocalStorageService]
})
export class SharedModule {}
