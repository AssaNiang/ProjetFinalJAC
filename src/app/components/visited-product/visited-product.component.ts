import { Component } from '@angular/core';
import { Product } from 'src/app/mocks/products.mock';
import { VisitedProductsService } from 'src/app/services/visited-products/visited-products.service';

@Component({
  selector: 'app-visited-product',
  templateUrl: './visited-product.component.html',
  styleUrls: ['./visited-product.component.css']
})
export class VisitedProductComponent {
  historyProducts: Product[] = [];

  constructor(private visitedProducts: VisitedProductsService) { }
  
  ngOnInit() {
    this.historyProducts = this.visitedProducts.getHistory();
  }
}
