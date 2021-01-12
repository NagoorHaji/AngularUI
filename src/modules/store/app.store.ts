import { Action, ActionReducerMap } from '@ngrx/store';
import { sampleReducer, SampleState } from './sample/sample.reducer';

/* Feature keys - This key should be used for creating feature selector */
export enum FeatureKeys {
  SAMPLE = 'sampleState'
}

/* App Reducer */
export interface AppState {
  [FeatureKeys.SAMPLE]: SampleState;
}

export const appReducers: ActionReducerMap<AppState> = {
  sampleState: sampleReducer
};

/* Actions */
export enum AppStoreTypes {
  StartAppInitializer = '[AppStore] Start App Initializer',
  FinishAppInitializer = '[AppStore] Finish App Initializer',
}

export class StartAppInitializer implements Action {
  public readonly type = AppStoreTypes.StartAppInitializer;
}

export class FinishAppInitializer implements Action {
  public readonly type = AppStoreTypes.FinishAppInitializer;
}

/* Devtools instrumentation config */
export const appDevToolsOptions = { maxAge: 25, name: 'ESL' };

export type AppActions = StartAppInitializer | FinishAppInitializer;
