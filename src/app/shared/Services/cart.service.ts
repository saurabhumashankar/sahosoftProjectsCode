import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of } from 'rxjs';
import { CartItem } from '../types/cart-item.interface';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs-compat';
import { Product } from '../types/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: any[] = JSON.parse(localStorage.getItem('cartItem')) || [];
  cartItem: BehaviorSubject<CartItem[]> = new BehaviorSubject<CartItem[]>([]);

  constructor(private _toastr: ToastrService) { }

  getItems(): Observable<CartItem[]> {
    return of(this.products);
  }
  getTotalAmout(): Observable<number> {
    return this.cartItem.pipe(map(() => {
      return this.products.reduce((total: number, item: CartItem) => {
        return total + (item.product.price * item.quantity)
      }, 0)
    })
    )
  }
  addToCart(product: Product, qty: number = 1) {
    // if product already exist in cartlist (update quality in cartlist)
    let hasItem = this.products.find((item: CartItem, index: number) => {
      if (item.product.id === product.id) {
        let Qty = item.quantity + qty;
        let isStock = this.calculateItemStock(item.product, Qty);
        if (Qty != 0 && isStock) {
          this.products[index].quantity = Qty;
          localStorage.setItem("cartItem", JSON.stringify(this.products));

        }
        return true;
      }
      return false;
    });
    // if product does not  exist in cartlist (update quality in cartlist)
    if (!hasItem) {
      let item: CartItem = {
        product: product,
        quantity: qty

      };
      this.products.push(item);
      localStorage.setItem("cartItem", JSON.stringify(this.products));
      this._toastr.success(' Item has been added to cart || ', "Cartlist");
    }

  }
  updateToCart(product: Product, qty: number) {
    this.products.find((item: CartItem, index: number) => {
      if (item.product.id === product.id) {
        let Qty = item.quantity + qty;
        let isStock = this.calculateItemStock(item.product, Qty);
        
        if (Qty != 0 && isStock) {
          this.products[index].quantity = Qty           
          localStorage.setItem("cartItem", JSON.stringify(this.products));
        }
      }
    });
  }
  calculateItemStock(item: Product, qty: number): boolean {
    let stock = item.stock;
    if (stock < qty) {
      this._toastr.error('You Can not More Item in cartlist(out of stock) || ', "Cartlist");
      return false;
    }
    return true;
  }

  removeFromCart(item: CartItem) {
    let index = this.products.indexOf(item);

    if (index > -1) {
      this.products.splice(index, 1);
      localStorage.setItem("cartItem", JSON.stringify(this.products));

    }
  }
  clearAllItemFromCart() {
    this.products.splice(0, this.products.length);
    localStorage.setItem("cartItem", JSON.stringify(this.products));

  }
  hasProduct(product: Product): boolean {
    let item = this.products.find((item: CartItem) => item.product.id === product.id);
    return item !== undefined;
  }
}

