import { Component } from '@angular/core';
import { Teacher } from './models';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { TeachersService } from './teachers.service';
import { TeachersDialogComponent } from './components/teachers-dialog/teachers-dialog.component';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  
  teachers$: Observable<Teacher[]>;

  constructor(
    private teachersService: TeachersService,
    private matDialog: MatDialog,
    ) {this.teachers$ = this.teachersService.getTeachers();}

  addTeacher() : void {
    this.matDialog
    .open(TeachersDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) =>{
        if (!!v) {
          this.teachers$ =  this.teachersService.createTeacher({
            id: new Date().getTime(),
            name: v.name,
            lastName: v.lastName,
            role: v.role,
            course: v.course,
            email: v.email,
          })
        }
      }
    });
  }

  onDeleteTeacher(teacherId : number): void {
    this.teachers$ = this.teachersService.deleteTeacher(teacherId)
  }

  onEditTeacher(teacherId: number): void {
    this.matDialog.open(TeachersDialogComponent, {
      data:teacherId,
    });
  }
}
