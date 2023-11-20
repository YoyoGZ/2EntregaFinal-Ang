import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEnrolment from './enrollment.reducer';

export const selectEnrolmentState = createFeatureSelector<fromEnrolment.State>(
  fromEnrolment.enrolmentFeatureKey
);
