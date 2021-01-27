import { Action } from '@ngrx/store';
import { CardDetail } from './model/card-detail';
import { PaymentActions, PaymentActionTypes } from './payment.actions';


export const paymentFeatureKey = 'paymentState';

export interface State {
	Payment : CardDetail[],
	error   : string;
}

export const initialState: State = {
	Payment : [],
	error   : ""
};

export function reducer(state = initialState, action: PaymentActions): State {
  switch (action.type) {

  	case PaymentActionTypes.LoadPayments : {
  		return {
  			...state
  		}
  	}

  	case PaymentActionTypes.LoadPaymentsSuccess : {
  		return {
  			...state,
  			Payment : action.payload.data,
  			error : ''
  		}
  	}

  	case PaymentActionTypes.LoadPaymentsFailure : {
  		return {
  			...state,
  			Payment: [],
  			error: action.payload.error
  		}
  	}


    case PaymentActionTypes.AddCard : {
      return {
        ...state
      }
    }

    case PaymentActionTypes.AddCardSuccess : {
      return {
        ...state,
        Payment : action.payload.data,
        error : ''
      }
    }

    case PaymentActionTypes.AddCardFailure : {
      return {
        ...state,
        Payment : [],
        error : ''
      }
    }

    default:
      return state;
  }
}
