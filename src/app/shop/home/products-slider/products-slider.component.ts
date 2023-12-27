import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { Product } from 'src/app/shared/types/product.interface';

@Component({
  selector: 'app-products-slider',
  templateUrl: './products-slider.component.html',
  styleUrls: ['./products-slider.component.scss']
})
export class ProductsSliderComponent implements OnInit {
@Input() products:  Product[] = [];

productSliderConfig: any = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 420,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
};


constructor(private _productsService: ProductsService) { }

ngOnInit(): void {  
  this._productsService.getProducts().subscribe(res => {
    this.products = res;
    // console.log("products List=>", this.products);
  }); 
   
}

}