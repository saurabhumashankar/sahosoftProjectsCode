import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/Services/order.service';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { Order } from 'src/app/shared/types/order.interface';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {
orderDetails : Order ;
  constructor(private _orderService : OrderService ,public productService : ProductsService) { }

  ngOnInit(): void {
  
  this.orderDetails = this._orderService.getOrderDetails();
  }

}
