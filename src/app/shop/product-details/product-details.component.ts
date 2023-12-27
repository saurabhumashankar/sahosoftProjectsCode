import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/shared/Services/cart.service';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { WhislistService } from 'src/app/shared/Services/whislist.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true
  };

  slideNavConfig = {
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1
    
    ,
    asNavFor: '.product-slick',
    arrows: false,
    dots: false,
    focusOnSelect: true
  }
product : Product ;
products : Product[] = [];
counter : number = 1;
selectedSize : string = "";

  constructor(private _route: ActivatedRoute, private router: Router, public _productService: ProductsService,
    private _cartService: CartService, private _wishlist: WhislistService) {
    this._route.params.subscribe(params => {
      let id = params['id'];

      this._productService.getProduct(parseInt(id)).subscribe(res => {
        this.product =res;

        console.log("this.product =>", this.product.pictures[1]);
        

      })
    });
  }

  ngOnInit(): void {

  }
changeSize(size : string){
  this.selectedSize =size ;
}
increment(){
  this.counter +=1;
}
decrement(){
  if(this.counter >1){
  this.counter -=1;
}
}
addToCart(){
  this._cartService.addToCart(this.product , this.counter);
}
addToWishlist(){
  this._wishlist.addToWishlist(this.product);
}
buyNow(){
  if(this.counter>0){
    if(!this._cartService.hasProduct(this.product)){
    this._cartService.addToCart(this.product ,this.counter);
    }
    this.router.navigate(['/home/checkout'])
  }
}
}
