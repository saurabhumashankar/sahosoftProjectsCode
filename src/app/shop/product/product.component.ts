import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/Services/cart.service';
import { CompareService } from 'src/app/shared/Services/compare.service';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { WhislistService } from 'src/app/shared/Services/whislist.service';
import { Product } from 'src/app/shared/types/product.interface';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  variantImage: string
  constructor(public _productService: ProductsService, private _cartService: CartService, private _whislist: WhislistService, private _compareService: CompareService) { }

  ngOnInit(): void {
    this.variantImage = this.product.variants.length > 0 ? this.product.variants[0].images : '';
  }
  changeVariant(img: string) {
    this.variantImage = img;
  }

  addToCart() {
    this._cartService.addToCart(this.product);
  }

  addToWhislist() {
    this._whislist.addToWishlist(this.product);
  }

  addToCompare() {
    this._compareService.addToCompare(this.product);
  }

}