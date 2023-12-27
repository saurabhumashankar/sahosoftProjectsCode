import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { CollectionBannerComponent } from './home/collection-banner/collection-banner.component';
import { LogoComponent } from './home/logo/logo.component';
import { ParallaxBannerComponent } from './home/parallax-banner/parallax-banner.component';
import { SliderComponent } from './home/slider/slider.component';
import { ProductsSliderComponent } from './home/products-slider/products-slider.component';
import { ProductsTabComponent } from './home/products-tab/products-tab.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CollectionComponent } from './collection/collection.component';
import { NewProductsComponent } from './widgets/new-products/new-products.component';
import { NewCatogryComponent } from './widgets/new-catogry/new-catogry.component';
import { PriceComponent } from './widgets/filter/price/price.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../shared/shared.module';
import { BarRating, BarRatingModule } from 'ngx-bar-rating';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Ng5SliderModule } from 'ng5-slider';
import { BrandComponent } from './widgets/filter/brand/brand.component';
import { ColorComponent } from './widgets/filter/color/color.component';


@NgModule({
  declarations: [
    HomeComponent,
    CollectionBannerComponent,
    LogoComponent,
    ParallaxBannerComponent, 
    ProductsSliderComponent,
    ProductsTabComponent,
    ProductComponent,
    CartComponent,
    WishlistComponent,
    CompareComponent,
    CheckoutComponent,
    SuccessComponent,
    ProductDetailsComponent,
    CollectionComponent,
    NewProductsComponent,
    NewCatogryComponent,
    ColorComponent,
    BrandComponent,
    PriceComponent,
    SliderComponent

  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    SharedModule,
    BarRatingModule,
    InfiniteScrollModule,
    Ng5SliderModule,
    



  ]
})
export class ShopModule { }
