import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureKeys } from '../app.store';
import { SampleState } from './sample.reducer';

/* NgRx Selectors */

/* To select the Sample feature state from the app state */
export const selectSampleFeature = createFeatureSelector<SampleState>(FeatureKeys.SAMPLE);

export const selectTestData = createSelector(
  selectSampleFeature,
  (state: SampleState) => state.testData
);
