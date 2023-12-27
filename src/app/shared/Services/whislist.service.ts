import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../types/cart-item.interface';
import { Observable, of } from 'rxjs';
import { Product } from '../types/product.interface';

@Injectable({
  providedIn: 'root'
})
export class WhislistService {
  products: any[] = JSON.parse(localStorage.getItem("wishlistItem")) || [];

  constructor(private _toastr: ToastrService) { }

  getItems(): Observable<Product[]> {
    return of(this.products);
  }

  hasProduct(product: Product): boolean {
    let item = this.products.find((item: Product) => item.id === product.id);
    return item !== undefined;
  }
  addToWishlist(product: Product) {
    if (!this.hasProduct(product)) {
      this.products.push(product);
      localStorage.setItem("wishlistItem", JSON.stringify(this.products));
      this._toastr.success("Item has been added to wishlist !!", "WishList");
    } else {
      this._toastr.warning("This item already added in your wishlist !!", "WishList");
    }
  }
  removeFromWishlist(item : Product){
    let index = this.products.indexOf(item);

    if(index > -1){
      this.products.splice(index,1);
      localStorage.setItem("wishlistItem", JSON.stringify(this.products));
    }
  }


}