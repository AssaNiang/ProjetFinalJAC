import { Component } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-category-pants',
  templateUrl: './category-pants.component.html',
  styleUrls: ['./category-pants.component.css']
})
export class CategoryPantsComponent {
  //on recupere notre liste de produits et notre services
  products:Product[]=[];

  constructor(private productService:ProductsService){}
  ngOnInit(){
    this.products=this.productService.getProducts();
  }

}
