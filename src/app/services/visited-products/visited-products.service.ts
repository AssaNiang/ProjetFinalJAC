import { Injectable } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { ProductDetailsComponent } from 'src/app/pages/product-details/product-details.component';

@Injectable({
  providedIn: 'root'
})
export class VisitedProductsService {

  constructor() { }

  private createHistory() {
    const newProductVisited = JSON.stringify([]);
    localStorage.setItem('history', newProductVisited);
  }

  getHistory() {
    //on recupere l'history dans localStorage avec getItem avec la clé 'history'
    const historytab = localStorage.getItem('history');
    if (historytab) {

      // on transforme l'history en objet
      return JSON.parse(historytab);

    } else {
      this.createHistory();
      this.getHistory();
    }
  }
  //ajouter le produit à l'historique
  addProductToHistory(product: Product) {
    //recuperation de history(panier)
    const recupHistory = this.getHistory();
    //verifier si le produit est deja dans le panier historique
    const productFromHistory = recupHistory.find((historyProduct: Product) => historyProduct.id === product.id)
    console.log("productFromHistory", productFromHistory);
    
    if (productFromHistory) {
      //chercher l'indexof du produit dans le panier history
      const productHistoryId = recupHistory.indexOf(productFromHistory);
      console.log("productHistoryId", productHistoryId);
      
      //supprime le produit ou on est sur la page de mon history avec l'index
      recupHistory.splice(productHistoryId, 1);
      console.log(recupHistory);
      //push
      recupHistory.push(product);
      // console.log(productFromHistory);
    } else {
      recupHistory.push(product);
    }
    localStorage.setItem('history', JSON.stringify(recupHistory));
    return recupHistory;

  }

}
