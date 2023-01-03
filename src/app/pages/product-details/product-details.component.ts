import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
productP?:Product;
//on créer une fonction pour récupérer les produits ET pour assigner notre âge 404 si un produit n’est pas trouvé
constructor(
  private productService:ProductsService,
  private activatedRoute:ActivatedRoute,
  private router:Router
){}
ngOnInit(){
  this.initProduct();
  console.log('product',this.productP);
}
initProduct(){
  const id =Number(this.activatedRoute.snapshot.paramMap.get('id'));
  const foundProduct=this.productService.getProduct(id);
  if(foundProduct){
    this.productP=foundProduct;
  }else{
    this.router.navigate(['/not-found']);
  }
}
}
