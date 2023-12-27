import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {
  products: Product[] = [];
  sliderProducts = [];

  constructor(public _productService: ProductsService) { }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(res => {
      this.products = res;

      let items = res;
      

      while (items.length > 0) {
        this.sliderProducts.push(items.splice(0, 3));
      }
    });
  }

}
