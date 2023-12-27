import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, map } from 'rxjs';
import { Product } from '../types/product.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  currency: string = 'INR';
  constructor(private _httpClient: HttpClient, private _toastr: ToastrService) { }

  private allProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(environment.BASE_API_PATH + "ProductMaster/GetProductList");
  }
  getProducts(): Observable<Product[]> {
    return this.allProducts();
  }
  getProduct(id: number): Observable<Product> {
    return this.allProducts().pipe(map(item => item.find(p => p.id === id)));
  }
  getProductByCategory(categ : string): Observable<Product[]> {
    return this.allProducts().pipe(map(item => item.filter((p : Product) => {
      if (categ === 'all'){
        return true ;
      }
      return p.category === categ ;
    }) ));
  }
}