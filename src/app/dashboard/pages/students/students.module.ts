import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent,
    StudentsTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
