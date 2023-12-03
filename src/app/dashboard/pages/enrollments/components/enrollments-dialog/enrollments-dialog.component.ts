import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from '../../store/enrollment.actions';
import { Observable, take } from 'rxjs';
import { Course } from '../../../courses/models';
import { Student } from '../../../students/models';
import { selectCourseOption, selectStudentOption, selectisLoadingDialogOptions } from '../../store/enrollment.selectors';
import { FormControl, FormGroup } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-enrollments-dialog',
  templateUrl: './enrollments-dialog.component.html',
  styleUrls: ['./enrollments-dialog.component.css']
})
export class EnrollmentsDialogComponent {

  studentIdControl = new FormControl<number | null>(null);
  courseIdControl = new FormControl<number | null>(null);

  newEnrollmentForm = new FormGroup({
    studentId: this.studentIdControl,
    courseId: this.courseIdControl,
  });

  courseOption$ : Observable<Course[]>;
  studentOption$ : Observable<Student[]>;
  isLoading$: Observable<boolean>;


  constructor (private store : Store, 
    private actions$: Actions , 
    private matDialogRef: MatDialogRef<EnrollmentsDialogComponent>) {

    this.store.dispatch(EnrollmentActions.loadEnrollmentsDialogOptions());
    this.isLoading$ = this.store.select(selectisLoadingDialogOptions)
    this.courseOption$ = this.store.select(selectCourseOption);
    this.studentOption$ = this.store.select(selectStudentOption);
    this.actions$.pipe(ofType(EnrollmentActions.loadEnrollments), take(1))
      .subscribe({ next: () => this.matDialogRef.close})
    
  };

  onSubmit(): void {
    this.store.dispatch(EnrollmentActions.createEnrollment(
      {data: this.newEnrollmentForm.getRawValue() }))
  }
}


