import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';

export interface Role {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styles: []
})

export class UsersDialogComponent {
  userForm: FormGroup;
    constructor(
      private  fb: FormBuilder,
      private matDialogRef: MatDialogRef<UsersDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public user? : User,
      ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
      role: ['', Validators.required],
      token: ['', Validators.required]
    })
   
    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  };

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else{
      this.matDialogRef.close(this.userForm.value);
    }
  };
  
}
