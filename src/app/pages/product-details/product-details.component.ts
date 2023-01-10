import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { BasketProduct, BasketService } from 'src/app/services/basket/basket.service';
import { ProductsService } from 'src/app/services/products/products.service';
import { VisitedProductsService } from 'src/app/services/visited-products/visited-products.service';

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
  private basketService: BasketService,
  private visitedProducts:VisitedProductsService,
){}


ngOnInit(){
  this.initProduct();
}
// les produits se mettent dans l'historique une fois que l'on quitte la page 
ngOnDestroy() {
  console.log('DESTROY');
  if(this.productP){
    this.visitedProducts.addProductToHistory(this.productP);
  }
  
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
  //je cree mon basketProduct avec mise a jour de l'objet product et de la quantité
  const basketProduct: BasketProduct = {
    product: this.productP,
    quantity: this.quantity

  }
  this.basketService.addToBasket(basketProduct);
}

}
