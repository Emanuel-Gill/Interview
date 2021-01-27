import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { CardDetail } from '../model/card-detail';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url='http://localhost:4000/'

   constructor(private http:HttpClient) { }

  addCard(newCustom:CardDetail):Observable<CardDetail>{
    return this.http.post<CardDetail>(this.url+'payment/add',newCustom)
  }

  GetCardList(){
    return this.http.get(this.url+'payment/get')
  }

}
