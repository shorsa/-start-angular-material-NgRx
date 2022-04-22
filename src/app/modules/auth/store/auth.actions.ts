import { createAction, props } from '@ngrx/store';
import { AuthState } from '.';


const EXAMPLE_NAME = '[AUTH] example';
export const example = createAction(EXAMPLE_NAME, props<{ payload: any }>());

const EXAMPLE_NAME_SUCCESS = '[AUTH][API] example Success';
export const exampleSuccess = createAction(EXAMPLE_NAME_SUCCESS, props<{ payload: any }>());
