import { SampleService } from './sample.service';
import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromActions from './sample.actions';

@Injectable()
export class SampleEffects {
  constructor(
    private actions$: Actions,
    private service: SampleService
  ) {
  }

  @Effect()
  loadSampleData: Observable<Action> = this.actions$.pipe(
    ofType<fromActions.LoadSample>(
      fromActions.SampleActionTypes.LOAD_SAMPLE
    ),
    switchMap((action: fromActions.LoadSample) => {
      return this.service.getSampleData().pipe(
        switchMap((opcodeResponse: any) => opcodeResponse),
        map((testData: any) => new fromActions.LoadSampleSuccess({ samplepayload: testData })),
        catchError(err => of(new fromActions.LoadSampleFailure({ error: err })))
      );
    }
    )
  );
}