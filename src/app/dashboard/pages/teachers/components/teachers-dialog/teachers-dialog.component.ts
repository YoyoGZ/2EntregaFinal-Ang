import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TeachersService } from '../../teachers.service';


@Component({
  selector: 'app-teachers-dialog',
  templateUrl: './teachers-dialog.component.html',
  styleUrls: []
})
export class TeachersDialogComponent {

  nameControl = new FormControl();
  lastNameControl = new FormControl();
  courseControl = new FormControl();
  emailControl = new FormControl();

  teacherForm = new FormGroup ({
    name: this.nameControl,
    lastName: this.lastNameControl,
    course: this.courseControl,
    email: this.emailControl 
  });
  
  constructor(
    private matDialogRef: MatDialogRef<TeachersDialogComponent>,
    private teachersService:  TeachersService,

    @Inject(MAT_DIALOG_DATA) private teacherId?: number
    ) {if (teacherId) {
      this.teachersService.getTeacherById$(teacherId).subscribe({
        next: (t) => {
          if (t) {this.teacherForm.patchValue(t);}
          }
        });
      }
     };

  public get isEditing(): boolean {
    return !!this.teacherId;
  };

  onSubmit():  void {
    if (this.teacherForm.invalid) {
      this.teacherForm.markAllAsTouched();
    } else{
      this.matDialogRef.close(this.teacherForm.value);
    }
  }
}
