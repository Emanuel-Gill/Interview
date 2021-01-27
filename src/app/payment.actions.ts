import { Action } from '@ngrx/store';
import { CardDetail } from './model/card-detail';
export enum PaymentActionTypes {
  LoadPayments = '[Payment] Load Payments',
  LoadPaymentsSuccess = '[Payment] Load Payments Success',
  LoadPaymentsFailure = '[Payment] Load Payments Failure',
  AddCard = '[Payment] Add Card',
  AddCardSuccess = '[Payment] Add Card Success',
  AddCardFailure = '[Payment] Add Card Failure',
}

export class LoadPayments implements Action {
  readonly type = PaymentActionTypes.LoadPayments;
}

export class LoadPaymentsSuccess implements Action {
  readonly type = PaymentActionTypes.LoadPaymentsSuccess;
  constructor(public payload: { data: CardDetail[] }) { }
}

export class LoadPaymentsFailure implements Action {
  readonly type = PaymentActionTypes.LoadPaymentsFailure;
  constructor(public payload: { error: string }) { }
}

export class AddCard implements Action {
  readonly type = PaymentActionTypes.AddCard;
  constructor(public payload: { data:  CardDetail[] }) { }
}

export class AddCardSuccess implements Action {
  readonly type = PaymentActionTypes.AddCardSuccess;
  constructor(public payload: { data:  CardDetail[] }) { }
}

export class AddCardFailure implements Action {
  readonly type = PaymentActionTypes.AddCardFailure;
  constructor(public payload: { error: string }) { }
}

export type PaymentActions = LoadPayments | LoadPaymentsSuccess | LoadPaymentsFailure | AddCard | AddCardSuccess | AddCardFailure;

