import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, forkJoin, of } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment.local';
import { CreateEnrollmentData, Enrollment } from '../models';
import { Course } from '../../courses/models';
import { Student } from '../../students/models';
import { EnrollmentsDialogComponent } from '../components/enrollments-dialog/enrollments-dialog.component';
import { EnrollmentsRoutingModule } from '../enrollments-routing.module';


@Injectable()
export class EnrollmentEffects {

  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentActions.loadEnrollments),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getEnrollments()
        .pipe(
          map(data => EnrollmentActions.loadEnrollmentsSuccess({ data })),

          catchError(error => of(EnrollmentActions.loadEnrollmentsFailure({ error }))))
      )
    );
  });

  loadEnrollmentsDialogOptions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.loadEnrollmentsDialogOptions),
      concatMap(() => 
        this.getEnrollmentsDialogOptions().pipe(map((resp) =>
          EnrollmentActions.loadEnrollmentsDialogOptionsSuccess(resp)
          ),
          catchError((er) => of(
            EnrollmentActions.loadEnrollmentsDialogOptionsFailure({error: er})))
        )
      )
    )
  );

  createEnrollment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.createEnrollment),
      concatMap((action) => {
        return this.createEnrollment(action.data).pipe (
          map( data => EnrollmentActions.loadEnrollments()),
          catchError((error) => of(EnrollmentActions.createEnrollmentFailure({ error })))
        )
      })
    )
  )

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  createEnrollment(data : CreateEnrollmentData): Observable<Enrollment> {
    return this.httpClient.post<Enrollment>(`${environment.baseUrl}/enrollments`, data )
  }

  getEnrollmentsDialogOptions(): Observable<{
    courses: Course[];
    students: Student[]
  }> {
    return forkJoin([
      this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`),
      this.httpClient.get<Student[]>(`${environment.baseUrl}/students`)
    ]).pipe((map(([courses, students]) => {
        return {
          courses, students
        }
      })
    ))
  };

  getEnrollments(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>
    (`${environment.baseUrl}/enrollments?_expand=course&_expand=student`); 
  }
}
