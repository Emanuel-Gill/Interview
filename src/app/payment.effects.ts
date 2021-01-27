import { Injectable } from '@angular/core';
import { Actions, Effect, ofType  } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import * as PaymentActions from './payment.actions';
import { PaymentService } from './services/payment.service';
import { mergeMap, map, exhaustMap, catchError } from 'rxjs/operators'


@Injectable()
export class PaymentEffects {



  constructor(
  	private actions$: Actions, 
  	private _payment : PaymentService
  ) {}

  // @Effect() purchase$ = this.actions$
  // .pipe(
  // 	ofType(PaymentActions.PaymentActionTypes.LoadPayments),
  // 	mergeMap(
  // 		action => this._payment.GetCardList().pipe(
  // 			map(list => (new PaymentActions.LoadPaymentsSuccess({data : list}))),
	 //        catchError(err => of(new PaymentActions.LoadPaymentsFailure({ error: err })))
  // 		)
  // 	)
  // )


  @Effect() AddCardDetails$ = this.actions$
  .pipe(
  	ofType(PaymentActions.PaymentActionTypes.AddCard),
  	mergeMap(
  		(data) =>  this._payment.addCard(data)
  		.pipe(
  			map(() => new PaymentActions.AddCardSuccess(data)),
  			catchError(err => of(new PaymentActions.AddCardFailure(err)))
  		)
  	)
  )

}
