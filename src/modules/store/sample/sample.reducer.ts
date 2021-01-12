import produce from 'immer';

import * as fromActions from './sample.actions';

export interface SampleState {
  testData: any;
  loading: boolean,
  loaded: boolean,
  error: string;
}

const initialState: SampleState = {
  testData: {},
  loading: false,
  loaded: false,
  error: ''
};

export function sampleReducer(
  state: SampleState = initialState,
  action: fromActions.SampleActions): SampleState {

  switch (action.type) {
    case fromActions.SampleActionTypes.LOAD_SAMPLE: {
      return produce(state, (draftState: SampleState) => {
        draftState.testData = {};
        draftState.loaded = false;
        draftState.loading = true;
        draftState.error = '';
      });
    }

    case fromActions.SampleActionTypes.LOAD_SAMPLE_SUCCESS: {
      return produce(state, (draftState: SampleState) => {
        draftState.testData = action instanceof fromActions.LoadSampleSuccess ? action.payload.samplepayload : {};
        draftState.loaded = true;
        draftState.loading = false;
        draftState.error = '';
      });
    }

    case fromActions.SampleActionTypes.LOAD_SAMPLE_FAILURE: {
      return produce(state, (draftState: SampleState) => {
        draftState.testData = {};
        draftState.loaded = false;
        draftState.loading = false;
        draftState.error = action instanceof fromActions.LoadSampleFailure ? action.payload.error : '';
      });
    }

    default:
      return state;
  }
}

