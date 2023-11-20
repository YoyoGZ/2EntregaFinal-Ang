import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentActions } from './enrollment.actions';

export const enrollmentFeatureKey = 'enrolment';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,
  on(EnrollmentActions.loadEnrollments, state => state),
  on(EnrollmentActions.loadEnrollmentsSuccess, (state, action) => state),
  on(EnrollmentActions.loadEnrollmentsFailure, (state, action) => state),
);

export const enrolmentFeature = createFeature({
  name: enrollmentFeatureKey,
  reducer,
});

