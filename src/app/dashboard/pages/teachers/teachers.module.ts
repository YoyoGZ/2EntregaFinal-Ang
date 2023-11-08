import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { TeachersTableComponent } from './components/teachers-table/teachers-table.component';
import { TeachersDetailComponent } from './components/teachers-detail/teachers-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TeachersDialogComponent } from './components/teachers-dialog/teachers-dialog.component';



@NgModule({
  declarations: [
    TeachersComponent,
    TeachersDialogComponent,
    TeachersTableComponent,
    TeachersDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class TeachersModule { }
