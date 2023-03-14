import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Cart } from '../../interfaces/cart'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit  {
  itemCard?: Cart[];

  subTotals: number[] = [];
  quantityValue: number= 1;
  preci?: number;
  total: number = 0;

  

  constructor(private _cartService: CartService, private _productService: ProductService, private aRouter: ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this._cartService.getCartItems().subscribe((itemCard)=>{
      this.itemCard= itemCard;


    });
  }

  addItem(id: number ){

    this._cartService.updateAdd(id, this.quantityValue).subscribe(()=>{

    })
  }
  resItem(id: number ){
    this._cartService.updateRes(id, this.quantityValue).subscribe(()=>{

    })
  }




  calculateTotal() {

    this.total = 0;
    for (let i = 0; i < this.itemCard!.length; i++) {
      this.total += this.itemCard![i].quantity * this.itemCard![i].price;
    }
    return this.total;
  }


  onQuantityChange() {
    this.total = this.calculateTotal();

  }
}
