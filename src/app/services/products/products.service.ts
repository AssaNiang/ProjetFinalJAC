import { Injectable } from '@angular/core';
import { Product, PRODUCTS } from 'src/app/mocks/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  //retourne la liste de tous les produits
  getProducts():Product[]{
    return PRODUCTS;
  }
  //retourne un produit par id
  getProduct(id:number): Product | undefined{
    return PRODUCTS.find(product=>product.id ===id);
  }
}
