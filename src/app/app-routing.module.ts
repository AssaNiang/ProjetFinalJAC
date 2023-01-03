import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { BasketComponent } from './pages/basket/basket.component';
import { CategoryJacketsComponent } from './pages/category-jackets/category-jackets.component';
import { CategoryPantsComponent } from './pages/category-pants/category-pants.component';
import { CategorySkirtsComponent } from './pages/category-skirts/category-skirts.component';
import { CategoryTshirtsComponent } from './pages/category-tshirts/category-tshirts.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [

{
  path:"",
  component: HomeComponent
},

{
  path:"all-categories",
  component: AllCategoriesComponent
},

{
  path:"category-jackets",
  component: CategoryJacketsComponent
},

{
  path:"category-pants",
  component: CategoryPantsComponent
},


{
  path:"category-skirts",
  component: CategorySkirtsComponent
},

{
  path:"category-tshirts",
  component: CategoryTshirtsComponent
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
  path:"not-found",
  component: NotFoundComponent
},

{
  path:"**",
  redirectTo: "not-found"
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
