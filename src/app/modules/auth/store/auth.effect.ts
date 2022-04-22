import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store/src/models';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import * as authActions from './auth.actions';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private readonly authService: AuthService,
  ) { }

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.example),
      switchMap((action: Action & { payload: any }) => {
        return this.authService.signIn(action.payload)
          .pipe(
            map((data: any) => {
              return authActions.exampleSuccess({ payload: data });
            }),
            catchError(error => {
              return of({ error: JSON.stringify(error) });
            })
          );
      })
    )
  });

}
