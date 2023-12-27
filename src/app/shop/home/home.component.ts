import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this._productsService.getProducts().subscribe(res => {
      this.products = res;
    });
  }


}
