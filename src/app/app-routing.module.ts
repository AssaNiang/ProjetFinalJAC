import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { BasketComponent } from './pages/basket/basket.component';
import { CategoryProductsComponent } from './pages/category-products/category-products.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaymentSucessComponent } from './pages/payment-sucess/payment-sucess.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [

{
  path:"",
  component: HomeComponent
},


{
  path:"category-products",
  component: AllCategoriesComponent
},
{
  path:"category-products/:category",
  component: CategoryProductsComponent
},


{
  path:"product/:id",
  component: ProductDetailsComponent
},

{
  path:"basket",
  component: BasketComponent
},

{
  path:"payment",
  component: PaymentComponent
},
{
  path:"payment-sucess",
  component: PaymentSucessComponent
},
{
  path:"not-found",
  component: NotFoundComponent
},

{
  path:"**",
  redirectTo: "not-found"
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
