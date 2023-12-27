import { Injectable } from '@angular/core';
import { Product } from '../types/product.interface';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  products: any[] = JSON.parse(localStorage.getItem("compateItem")) || [];

  constructor(private _toastr: ToastrService) { }

  getItems(): Observable<Product[]> {
    return of(this.products);
  }

  hasProduct(product: Product): boolean {
    let item = this.products.find((item : Product) => item.id === product.id);
    return item !== undefined;
  }

  addToCompare(product: Product) {
    if (!this.hasProduct(product)) {
      if (this.products.length < 6) {
        this.products.push(product);
        localStorage.setItem("compateItem", JSON.stringify(this.products));
        this._toastr.success("Item has been added to compare list !!", "Compare List");
      } else {
        this._toastr.warning("You can add mixium 6 item in compare list !!", "Compare List");
      }
    } else {
      this._toastr.warning("This item already added in your compare lsit !!", "Compare List");
    }
  }

  removeFromComparelist(item: Product) {
    let index = this.products.indexOf(item);

    if (index > -1) {
      this.products.splice(index, 1);
      localStorage.setItem("compateItem", JSON.stringify(this.products));
    }
  }


}