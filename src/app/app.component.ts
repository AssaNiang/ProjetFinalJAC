import { Component } from '@angular/core';
import { BasketService } from './services/basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetFinalJAC';

  constructor(private basketService: BasketService) {};

  ngOnInit() {
    this.basketService.getBasket();
    this.basketService.getBasketTotalPrice();
    this.basketService.getTotalQuantity();
  }
}
