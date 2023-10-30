import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.css']
})
export class CoursesDialogComponent {

  nameControl = new FormControl();
  iniDateControl = new FormControl();
  finalDateControl = new FormControl();

  courseForm = new FormGroup ({
    name:  this.nameControl,
    iniDate: this.iniDateControl,
    finalDate:  this.finalDateControl, 
  });
  
  constructor(private matDialogRef: MatDialogRef<CoursesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public course?: Course,
    ) {};


  onSubmit():  void {
    if (this.courseForm.invalid) {
      this.courseForm.markAllAsTouched();
    } else{
      this.matDialogRef.close(this.courseForm.value);
    }
  }
}
