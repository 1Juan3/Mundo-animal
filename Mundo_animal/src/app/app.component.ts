
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  listProducts: Product []=[]
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.getListProducts();
  }
   
  title = 'Mundo_animal';

  
  getListProducts() {

    this.productService.getProducts().subscribe((data: Product[]) => {
      this.listProducts = data;
  
    })
  }

  
}
