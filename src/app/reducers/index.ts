import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromPayment from '../payment.reducer';


export interface State {

  [fromPayment.paymentFeatureKey]: fromPayment.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromPayment.paymentFeatureKey]: fromPayment.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
