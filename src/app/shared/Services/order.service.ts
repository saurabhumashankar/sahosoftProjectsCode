import { Injectable } from '@angular/core';
import { Order } from '../types/order.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private orderDetails :Order ;

  constructor(private router :Router) { }

  setOrderDetails (obj : Order){
    this.orderDetails = obj ;
    this.router.navigate(["/home/chechout/success"]);
  }
  getOrderDetails() : Order {
    return this.orderDetails;
  }
}
