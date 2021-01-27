import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './payment.reducer';


const getPaymentFeatureState = createFeatureSelector<State>('paymentState');


export const getPay = createSelector(
	getPaymentFeatureState,
	state => state.Payment
)

export const getError = createSelector(
	getPaymentFeatureState,
	state => state.error
)