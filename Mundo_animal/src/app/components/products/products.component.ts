import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products ?: Product[];

  constructor(private _productService: ProductService){

  }

  getProducts(){
    this._productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
