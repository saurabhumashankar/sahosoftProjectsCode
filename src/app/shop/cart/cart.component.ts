import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/Services/cart.service';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { CartItem } from 'src/app/shared/types/cart-item.interface';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shoppingCartItem: CartItem[] = [];

  constructor(private _cartService: CartService, public _productService: ProductsService) { }

  ngOnInit(): void {
    this._cartService.getItems().subscribe(res => {
      this.shoppingCartItem = res;
    });
  }

  increment(product: Product, qty: number = 1) {
    console.log( "Hello");
    
    this._cartService.updateToCart(product, qty);
  }

  decrement(product: Product, qty: number = -1) {
    console.log("hii");
    
    this._cartService.updateToCart(product, qty);
  }

  removeItem(item: CartItem) {
    this._cartService.removeFromCart(item);
  }
   getTotalAmt() :Observable<number>{
    return this._cartService.getTotalAmout();
  }

}