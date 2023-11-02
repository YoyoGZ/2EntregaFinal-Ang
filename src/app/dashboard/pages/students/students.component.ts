import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { Student } from './models';
import { StudentsService } from './students.service';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students$: Observable<Student[]>;

  constructor(
    private studentsService: StudentsService,
    private matDialog: MatDialog,
    ) {
    this.students$ = this.studentsService.getStudents$()
    console.log(studentsService);
    ;
  }

  addStudent() : void {
    this.matDialog
    .open(StudentsDialogComponent)
    .afterClosed()
     .subscribe({
    next: (v) =>{
      if (!!v) {
          this.students$ =  this.studentsService.createStudent$({
          id: new Date().getTime(),
          name: v.name,
          lastName: v.lastName,
          email: v.email,
        })
      }
    }
    });
  };

  OnDeleteStudent(studentId: number): void {
    this.students$ = this.studentsService.deleteStudent$(studentId)
  };

  OnEditStudent(studentId: number): void {
    this.matDialog.open(StudentsDialogComponent, {
      data:studentId,
    });
  }
}
