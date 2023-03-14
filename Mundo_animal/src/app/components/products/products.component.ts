import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/interfaces/cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products ?: Product[];
  quantity:number = 1;
  client_id: number =1;
 

  constructor(private _productService: ProductService, private _CartService: CartService){

  }

  getProducts(){
    this._productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  

  addToCart(product_id: number ){
    
    this._productService.getProduct(product_id).subscribe((data: any) =>{
      
      const cart: Cart={
        id : data.id,
        name_product: data.name,
        quantity: this.quantity,
        image :data.image,
        price: data.price,
        total: 0,
        sub_total:0,
        product_id: product_id,
        client_id: this.client_id

      }
      
      this._CartService.addToCart(cart).subscribe(()=>{

      })

    })

    

  }

}
