import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, Product } from 'src/app/mocks/products.mock';
import { ProductsService } from 'src/app/services/products/products.service';


@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent {
  category?:Product[]=[];
  constructor(
    private productService:ProductsService,
    private activatedRoute:ActivatedRoute
    ){}
    ngOnInit(){
      this.initCategory();
      console.log('product',this.category);
    }
    initCategory(){
      const category =this.activatedRoute.snapshot.paramMap.get('category');
      if(!category) return;
      const foundProduct = this.productService.getCategoryProduct(category);
      this.category = foundProduct;
    }
    
  }
  
  
  
  