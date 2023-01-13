import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { BasketComponent } from './pages/basket/basket.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryProductsComponent } from './pages/category-products/category-products.component';
import { VisitedProductComponent } from './components/visited-product/visited-product.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AllCategoriesComponent,
    ProductDetailsComponent,
    BasketComponent,
    PaymentComponent,
    NotFoundComponent,
    CategoryProductsComponent,

    VisitedProductComponent,

    PaymentFormComponent,
     CartComponent,
     CounterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
