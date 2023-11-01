import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { StudentsDetailComponent } from './components/students-detail/students-detail/students-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent,
    StudentsTableComponent,
    StudentsDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class StudentsModule { }
