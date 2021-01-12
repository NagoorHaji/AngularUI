import { Action } from '@ngrx/store';

export enum SampleActionTypes {
  LOAD_SAMPLE = '[App component] Load Sample',
  LOAD_SAMPLE_SUCCESS = '[DCS API] Load Sample success',
  LOAD_SAMPLE_FAILURE = '[DCS API] Load Sample failure'
}

export class LoadSample implements Action {
  readonly type: string = SampleActionTypes.LOAD_SAMPLE;

  constructor() {
  }
}

export class LoadSampleSuccess implements Action {
  readonly type = SampleActionTypes.LOAD_SAMPLE_SUCCESS;

  constructor(public payload: { samplepayload: any }) {
  }
}

export class LoadSampleFailure implements Action {
  readonly type = SampleActionTypes.LOAD_SAMPLE_FAILURE;

  constructor(public payload: { error: string }) {
  }
}


export type SampleActions =
  | LoadSample
  | LoadSampleSuccess
  | LoadSampleFailure;