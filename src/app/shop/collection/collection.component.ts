import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/shared/Services/products.service';
import { Product } from 'src/app/shared/types/product.interface';
import * as $ from 'jquery';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  allItem: Product[] = [];
  products: Product[] = [];
  items: Product[] = [];

  isMan: boolean = false;
  finished: boolean = false;

  brands: any[] = [];
  colors: any[] = [];
  brandFilters: any[] = [];
  colorFilters: any[] = [];

  constructor(private route: ActivatedRoute, private _productService: ProductsService) {
    this.route.params.subscribe(params => {
      let category = params['category'];

      if (category === 'men') {
        this.isMan = true;
      } else {
        this.isMan = false;
      }


      this._productService.getProductByCategory(category).subscribe(res => {
        this.allItem = res;
        this.products = res.slice(0, 8);
        this.items = this.products;

        this.getBrands(res);
        this.getColors(res);
      });
    });
  }

  getBrands(products: Product[]) {
    let uniqueBrands = [];  //normal array
    let itemBrands = [];   //object of array

    products.map((product: Product) => {
      if (product.tags) {
        product.tags.map((tag) => {
          let index = uniqueBrands.indexOf(tag);
          if (index === -1) {
            uniqueBrands.push(tag);
          }
        });

      }
    });
    for (let i = 0; i < uniqueBrands.length; i++) {
      itemBrands.push({ brand: uniqueBrands[i] });
    }
    this.brands = itemBrands;

  }
  getColors(products: Product[]) {

    let uniqueColors = [];  //normal array
    let itemColors = [];   //object of array

    products.map((product: Product) => {
      if (product.colors) {
        product.colors.map((color) => {
          let index = uniqueColors.indexOf(color);
          if (index === -1) {
            uniqueColors.push(color);
          }
        });

      }
    });
    for (let i = 0; i < uniqueColors.length; i++) {
      itemColors.push({ color: uniqueColors[i] });
    }
    this.colors = itemColors;
  }

  updateBrandFilter(brands: any) {
    this.brandFilters = brands;

  }

  updateColorFilter(colors: any) {
    this.colorFilters = colors;

  }
  updatePriceFilter(price: any) {
    let filterItems: any[] = [];

    this.products.filter((product: Product) => {
      if (product.price >= price[0] && product.price <= price[1]) {
        filterItems.push(product)
      }
    });

    this.items = filterItems;
  }


  ngOnInit(): void {
  }

  filterItems(): Product[] {
    let itemData = this.items.filter((item: Product) => {

      let Colors: boolean = this.colorFilters.reduce((prev, curr) => {
        if (item.colors) {
          if (item.colors.includes(curr.color)) {
            return true;
          } else {
            return false;
          }
        }
        return true;
      }, true);

      let Brands: boolean = this.brandFilters.reduce((prev, curr) => {
        if (item.tags) {
          if (item.tags.includes(curr)) {
            return true;
          } else {
            return false;
          }
        }
        return true;
      }, true);
      return Colors && Brands;
    });
    return itemData;
  }


  onScroll() {
    let lastKey = this.allItem[this.allItem.length - 1]['id']; //100
    let currentKey = this.products[this.products.length - 1]['id']; //8

    if (lastKey != currentKey) {
      this.finished = false;
    } else {
      this.finished = true;

    }

    let len = this.products.length + 4;
    if (this.products.length < this.allItem.length) {
      for (let i = this.products.length; i < len; i++) {
        if (this.allItem[i] === undefined) {
          return true;
        }
        this.products.push(this.allItem[i]);
      }
    }
    return true;
  }

  changeLayout(colSize: number) {
    if (colSize === 2) {
      $(".product-wrapper-grid").children().children().children().removeClass();
      $(".product-wrapper-grid").children().children().children().addClass("col-xl-6 col-grid-box");

    } else if (colSize === 3) {
      $(".product-wrapper-grid").children().children().children().removeClass();
      $(".product-wrapper-grid").children().children().children().addClass("col-xl-4 col-grid-box");

    } else if (colSize === 4) {
      $(".product-wrapper-grid").children().children().children().removeClass();
      $(".product-wrapper-grid").children().children().children().addClass("col-xl-3 col-grid-box");

    }
    else {
      $(".product-wrapper-grid").children().children().children().removeClass();
      $(".product-wrapper-grid").children().children().children().addClass("col-xl-2 col-grid-box");

    }

  }
}
