import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentsService } from '../../students.service';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styles: [
  ]
})
export class StudentsDialogComponent {
  nameControl = new FormControl();
  lastNameControl = new FormControl();
  emailControl = new FormControl();

  studentForm = new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl, 
  });
  
  constructor(
    private matDialogRef: MatDialogRef<StudentsDialogComponent>,
    private studentsService: StudentsService,

    @Inject(MAT_DIALOG_DATA) 
    private studentId?: number
  ) { if (studentId) {
      this.studentsService.getStudentById(studentId).subscribe({
        next: (s) => {
          if (s) {
            this.studentForm.patchValue(s);
            }
          }
        });
      }
     };

  public get isEditing(): boolean {
    return !!this.studentId;
  };

  onSubmit():  void {
    if (this.studentForm.invalid) {
      this.studentForm.markAllAsTouched();
    } else{
      this.matDialogRef.close(this.studentForm.value);
    }
  };
}
