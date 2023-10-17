import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconsModule } from './pages/icons/icons.module';
import { FormsModule as FormsPagesModule } from './pages/forms/forms.module';
import { SharedModule } from '../shared/shared.module';
import { UsersModule } from './pages/users/users.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    IconsModule,
    MatToolbarModule,
    FormsPagesModule,
    UsersModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule {}
