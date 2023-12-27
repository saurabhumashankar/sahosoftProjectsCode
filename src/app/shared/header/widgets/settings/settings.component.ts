import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/Services/cart.service';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { CartItem } from 'src/app/shared/types/cart-item.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  shoppingCartItem: CartItem[] = [];

  constructor(private _cartService: CartService, public _productService: ProductsService ,private _translate: TranslateService) { }

  ngOnInit(): void {
    this._cartService.getItems().subscribe(res => {
      this.shoppingCartItem = res;
    });
  }
  changeLang(language: string) {
    this._translate.use(language);
  }
  removeItem(item: CartItem) {
    this._cartService.removeFromCart(item);
  }
   getTotalAmt() :Observable<number>{
    return this._cartService.getTotalAmout();
  }


}
