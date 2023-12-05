import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Teacher } from '../../models';


@Component({
  selector: 'app-teachers-dialog',
  templateUrl: './teachers-dialog.component.html',
  styleUrls: []
})
export class TeachersDialogComponent {

  teacherForm: FormGroup;
  constructor(
    private  fb: FormBuilder,
    private matDialogRef: MatDialogRef<TeachersDialogComponent>,
    
    @Inject(MAT_DIALOG_DATA) public teacher? : Teacher,

  ) {
      this.teacherForm = this.fb.group({
        name: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.email, Validators.required]],
        course: ['', Validators.required],
      })
        if (this.teacher) {
          this.teacherForm.patchValue(this.teacher);
        } 
    };  

  onSubmit(): void {
    if (this.teacherForm.invalid) {
      this.teacherForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.teacherForm.value);
    }
  };
}