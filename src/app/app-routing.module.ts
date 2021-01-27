import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentMethodComponent } from './payment-method/payment-method.component';

const routes: Routes = [
	
	{
		path : "paymentmethod",
		component : PaymentMethodComponent
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
