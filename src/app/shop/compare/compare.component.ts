import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/Services/cart.service';
import { CompareService } from 'src/app/shared/Services/compare.service';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  compareListItems: Product[] = [];

  constructor(private _cartService: CartService, public _productService: ProductsService,
    private _compareService: CompareService) { }


  ngOnInit(): void {
    this._compareService.getItems().subscribe(res => {
      this.compareListItems = res;
    });
  }

  removeItem(item: Product) {
    this._compareService.removeFromComparelist(item);
  }

  addToCartFromCompareList(product: Product) {
    this._cartService.addToCart(product);
  }

}

