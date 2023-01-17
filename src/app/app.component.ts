import { Component } from '@angular/core';
import { BasketService } from './services/basket/basket.service';
import { VisitedProductsService } from './services/visited-products/visited-products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetFinalJAC';

  constructor(private basketService: BasketService,
    private visitedProducts:VisitedProductsService) {};

  ngOnInit() {
    this.basketService.getBasket();
    this.basketService.getBasketTotalPrice();
    this.basketService.getTotalQuantity();
    this.visitedProducts.getHistory();
    
  }
}
