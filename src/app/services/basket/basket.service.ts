import { Injectable } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from '../products/products.service';


// interface qui correspond à un produit du panier avec deux propriétes product (objet) et quantité
export interface BasketProduct {
  product: Product;
  quantity: number;
}



@Injectable({
  providedIn: 'root'
})
export class BasketService {

  // deux propriétes du service du panier de type number initialisées à 0
  basketTotal: number = 0;
  productQuantity: number = 0 ;

// je mets dans le constructor le service product service
  constructor(private productsService : ProductsService) { }



//Fonction createBasket() pour créer un panier
private createBasket() {
  //je transforme mon panier qui est un objet en chaine de caractères
  const newBasket = JSON.stringify([]);
  //j'enregistre le panier avec setItem (clé, valeur) qui sont tous les deux des string
  localStorage.setItem('basket', newBasket);
}


//Fonction qui transforme le panier en string et l'enregistre
private saveBasket(basket: BasketProduct[]) {
  localStorage.setItem('basket', JSON.stringify(basket));
  this.getBasketTotalPrice();
}


// Fonction getBasket() qui nous permet de recuperer le panier et de le creer si il n'existe pas
getBasket(){
  //on recupere le panier dans localStorage avec getItem avec la clé 'basket'
  const basket = localStorage.getItem('basket');
  //si le panier existe
  if(basket) {
  // on transforme le panier en objet
    return JSON.parse(basket);
  //sinon
  } else {
    // on appelle la fonction creer un panier et on fait une recursivité sur notre fonction getBasket()
    this.createBasket();
    this.getBasket();
  }
}


// Fonction addToBasket() qio prend en parametre un produit de type BasketProduct
addToBasket(basketProduct : BasketProduct) {
  //recuperation du panier
  const basket = this.getBasket();
  // on cherche dans le panier si le produit existe en comparant l'id du panier et id du mock
  const productExists = basket.find((basketProduct: BasketProduct) => basketProduct.product.id === product.product.id); // attendre le mock d'Assa pour regler ce probleme
  //si le produit existe
  if (productExists) {
    // on recupere l'index du produit
    const basketProductId = basket.indexOf(productExists);
    // on incremente la quantité du produit dans la panier
    basket[basketProductId].quantity += basketProductId.quantity;
  } else {
    // sinon on ajoute le produit dans le panier
    basket.push(basketProduct);
  }
  // on enregistre le panier en appelant la fonction saveBasket()
  this.saveBasket(basket);
}


// Fonction pour connaitre le prix total du panier
getBasketTotalPrice(): void {
  // on recupere le panier
  const basket = this.getBasket();
  // on utilise la méthode reduce avec accumulator et current value pour avoir le prix total du panier
  const totalPrice = basket.reduce((accumulator:number, currentValue: BasketProduct) =>{
    // 
    const product = this.productsService.getProduct(currentValue.product.id) 
    // on calcule prix total
    return accumulator + (currentValue.quantity * product!.price);
    // initialisation de l'accumulateur à 0
  },0);
  // on donne la valeur du total du panier à la propriété basketTotal du basket Service
  this.basketTotal = totalPrice;
}


//Fonction pour connaitre la quantité de produit dans le panier
getProductQuantity(): void {
  // on recupere le panier
  const basket = this.getBasket();
  // on calcule le nombre de produits
  const total = basket.reduce((accumulator:number, currentValue: BasketProduct) => {
    return accumulator += currentValue.quantity;
  },0);
  // on assigne la quantité total à la propriété productQuantity du basket service
  this.productQuantity = total;
}


}
