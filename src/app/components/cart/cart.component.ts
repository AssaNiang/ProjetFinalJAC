import { Component } from '@angular/core';
import { Product, PRODUCTS } from 'src/app/mocks/products.mock';
import { BasketProduct, BasketService } from 'src/app/services/basket/basket.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  basket: BasketProduct[] = []; 

 



  constructor(public basketService: BasketService) {};

  ngOnInit() {
    this.getbasket();
  }

  getbasket() {
    this.basket = this.basketService.getBasket();
  }
 removeProduct(index: number) {
  this.basketService.removeProduct(index);
  
  this.getbasket();
  
 }

}
