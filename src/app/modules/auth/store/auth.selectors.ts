import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ReducerNodesEnum } from 'src/app/app-store';
import { AuthState } from '.';

const authFeatureSelector = createFeatureSelector<AuthState>(ReducerNodesEnum.auth);

export const userDataSelector = createSelector(authFeatureSelector,
  (state: AuthState) => state.data
);
