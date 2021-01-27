import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as PaymentActions from '../payment.actions';
import * as fromPayment from '../payment.selectors';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  CardForm     : FormGroup;
  Tomorrow     : string;

  constructor(
  	private _fb : FormBuilder,
    private _store : Store,
    private _toast : ToastrService
  	) { }

  ngOnInit(): void {
  	this.InitializeForm();
    this._store.dispatch(new PaymentActions.LoadPayments());
    this._store.pipe(select(fromPayment.getPay)).subscribe(data => {
        console.log(data);
    });
    this.getTomorrowDate();
  }


  getTomorrowDate() {
    let currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    let day = currentDate.getDate()
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    let year = currentDate.getFullYear();
    this.Tomorrow = year + "-"+ month + "-" + day;
  }

  InitializeForm () {
  	this.CardForm = this._fb.group({
	  	CardNumber      : ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]],
	  	CardHolder      : ['', [Validators.required, Validators.minLength(2)]],
	  	ExpirationYear  : ['', Validators.required],
	  	SecurityCode    : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
	  	Amount          : ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
  	})
  }


  SubmitForm () {
    if (this.CardForm.status == 'VALID') {
        this._store.dispatch(new PaymentActions.AddCard(this.CardForm.value));
    } else {
      this._toast.error("Please enter valid info");
    }
  }



}
