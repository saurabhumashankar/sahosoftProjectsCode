import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/Services/cart.service';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { WhislistService } from 'src/app/shared/Services/whislist.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  wishlistItem: Product[] = [];

  constructor(private _cartService: CartService, public _productService: ProductsService, private _wishlistService: WhislistService) { }

  ngOnInit(): void {
    this._wishlistService.getItems().subscribe(res => {
      this.wishlistItem = res;
      console.log("gg" , res);
      

    });
  }
  removeItem(item: Product) {
    this._wishlistService.removeFromWishlist(item);
  }

  addToCartFromWhislist(product: Product) {
    this._cartService.addToCart(product);
    this._wishlistService.removeFromWishlist(product);
    
    
  }
}