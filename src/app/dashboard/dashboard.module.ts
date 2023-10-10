import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { IconsModule } from './pages/icons/icons.module';
import { FormsModule as FormsPagesModule } from './pages/forms/forms.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    IconsModule,
    MatToolbarModule,
    MatIconModule,
    FormsPagesModule,
    
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule {}
