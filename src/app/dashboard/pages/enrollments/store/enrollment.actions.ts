import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const EnrollmentActions = createActionGroup({
  source: 'Enrolment',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: unknown }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
  }
});
