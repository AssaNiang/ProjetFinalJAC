import { Component } from '@angular/core';
import { Product} from 'src/app/mocks/products.mock';
import { BasketProduct, BasketService } from 'src/app/services/basket/basket.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
count: number = 1;
productP?:Product;
quantity: number = 1;



constructor(private productsService : ProductsService,
  //ajout
  private basketService : BasketService
  )
   { }

decrement() {
  if(this.count>0) {
    this.count--;
  }
}


increment() {
  this.count++;
}

// Ajout Cynthia
addToBasket() {
  //si le produit existe  je ne fais rien
  if(!this.productP) return;
  //je cree mon basketProduct avec mise a jour de l'objet product et de la quantité
  const basketProduct: BasketProduct = {
    product: this.productP,
    quantity: this.quantity

  }
  this.basketService.addToBasket(basketProduct);
}

}





