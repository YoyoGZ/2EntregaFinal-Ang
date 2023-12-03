import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateEnrollmentData, Enrollment } from '../models';
import { Course } from '../../courses/models';
import { Student } from '../../students/models';

export const EnrollmentActions = createActionGroup({
  source: 'Enrollment',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
    'Load Enrollments Dialog Options': emptyProps(),
    'Load Enrollments Dialog Options Success': props<{
      courses : Course[];
      students : Student[];}>(),
    'Load Enrollments Dialog Options Failure': props<{ error: unknown }>(),

    'Create Enrollment': props<{data: CreateEnrollmentData }>(),
    'Create Enrollment Failure': props<{ error: unknown }>()
    
 },
});
