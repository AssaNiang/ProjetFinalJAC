import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { BasketProduct, BasketService } from 'src/app/services/basket/basket.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
productP?:Product;
quantity: number = 1;

constructor(
  private productService:ProductsService,
  private activatedRoute:ActivatedRoute,
  private router:Router,
  private basketService: BasketService
){}


ngOnInit(){
  this.initProduct();
  console.log('product',this.productP);
}


//on créer une fonction pour récupérer les produits ET pour assigner notre page 404 si un produit n’est pas trouvé
initProduct(){
  const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  const foundProduct=this.productService.getProduct(id);
  if(foundProduct){
    this.productP=foundProduct;
  }else{
    this.router.navigate(['/not-found']);
  }
}

// Fonction addToBasket()
addToBasket() {
  //si le produit existe  je ne fais rien
  if(!this.productP) return;
  console.log(this.productP);
  //je cree mon basketProduct avec mise a jour de l'objet product et de la quantité
  const basketProduct: BasketProduct = {
    product: this.productP,
    quantity: this.quantity

  }
  this.basketService.addToBasket(basketProduct);
  console.log(basketProduct);
}

}
