import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';
import { Enrollment } from '../models';
import { Course } from '../../courses/models';
import { Student } from '../../students/models';

export const enrollmentFeatureKey = 'enrollment';

export interface State {
  isLoading: boolean; 
  isLoadingDialogOptions:boolean; 
  courseOption: Course[]; studentOption: Student[]; 
  enrollments: Enrollment[]; 
  error: unknown;
}

export const initialState: State = {
  isLoading: false, 
  isLoadingDialogOptions: false,
  courseOption: [],
  studentOption: [], 
  enrollments: [], 
  error: null,
};
export const reducer = createReducer(
// load enrollments
  initialState,
  on(EnrollmentActions.loadEnrollments, state => 
    ({...state, isLoading: true })),

// enrollments success
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, {data}) => 
    ({...state, isLoading:false, enrollments: data})),

// enrollments failure
  on(EnrollmentActions.loadEnrollmentsFailure, (state, {error}) => 
    ({... state, isLoading:false, error })),

// loadenrollmentst Dialog Options
  on(EnrollmentActions.loadEnrollmentsDialogOptions, state => 
    ({...state, isLoadingDialogOptions:true })),

// enrollments Dialog Options success
  on(EnrollmentActions.loadEnrollmentsDialogOptionsSuccess, (state, action) => 
    ({...state,
      courseOption: action.courses,
      studentOption: action.students,
      isLoadingDialogOptions:false })),

// enrollments Dialog Options Failure
  on(EnrollmentActions.loadEnrollmentsDialogOptionsFailure,  (state, action) =>
    ({...state,
      error: action.error,
      isLoadingDialogOptions:false }))
)

export const enrollmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});

