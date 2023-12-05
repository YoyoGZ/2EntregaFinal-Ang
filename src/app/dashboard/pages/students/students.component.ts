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
    ) {this.students$ = this.studentsService.getStudents()};
    

  addStudent() : void {
    this.matDialog
    .open(StudentsDialogComponent).afterClosed().subscribe({
      next: (v) =>{
        if (!!v) {
            this.students$ =  this.studentsService.createStudent({
            id: v.id,
            name: v.name,
            lastName: v.lastName,
            course: v.course,
            email: v.email,
          })
        }
      }
    });
  };

  onDeleteStudent(studentId: number): void {
    if (confirm('Está seguro de Eliminar a este Estudiante ?? ')) {
      this.students$ = this.studentsService.deleteStudent(studentId)
    }
  };

  onEditStudent(student: Student): void {
    this.matDialog.open(StudentsDialogComponent, {
      data: student,})
      .afterClosed().subscribe({
        next: (result) => {if(!!result)
          {this.students$ = this.studentsService.editStudent(student.id, result)}
      }
    });
  }
}
