import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { CategoryPantsComponent } from './pages/category-pants/category-pants.component';
import { CategoryJacketsComponent } from './pages/category-jackets/category-jackets.component';
import { CategorySkirtsComponent } from './pages/category-skirts/category-skirts.component';
import { CategoryTshirtsComponent } from './pages/category-tshirts/category-tshirts.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { BasketComponent } from './pages/basket/basket.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AllCategoriesComponent,
    CategoryPantsComponent,
    CategoryJacketsComponent,
    CategorySkirtsComponent,
    CategoryTshirtsComponent,
    ProductDetailsComponent,
    BasketComponent,
    PaymentComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
