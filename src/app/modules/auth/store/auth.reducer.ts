import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { AuthState } from '.';
import * as authActions from './auth.actions';

const initialState: AuthState = {
  data: undefined
};

const authReducer: ActionReducer<AuthState, Action> =
  createReducer(
    initialState,
    on(
      authActions.exampleSuccess,
      (state: AuthState, data: any): AuthState =>
        ({ ...state, data })
    ),
  );

export function AuthReducer(state: AuthState, action: Action) {
  return authReducer(state, action);
}
