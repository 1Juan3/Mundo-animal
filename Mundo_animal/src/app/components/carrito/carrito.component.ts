import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Cart } from '../../interfaces/cart'
import { Router } from '@angular/router';
import { Factures } from 'src/app/interfaces/factures';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit  {
  itemCard?: Cart[];
  id_remisiones: Cart[] = [];
  remision_id?:number;
  cartItems :any[]=[];
  sub_total?:number
  total: number=0 ;
  remision?: Cart;
  

  constructor(private _cartService: CartService, private _productService: ProductService, private router: Router, private actualizar: ChangeDetectorRef){
    
  }

  ngOnInit(): void {
    this.getCartItems();
    
  
  }

  getCartItems() {
    const items = localStorage.getItem('cartItems');
    if (items) {
      this.cartItems = JSON.parse(items);
      this.total = this.cartItems.reduce((acc, item) => acc + (item.sub_total ?? 0), 0);
      
    }
    return this.cartItems;
  }

  sumCart(product: Cart) {
    // Buscamos si ya existe el producto en el carrito
    const existingProduct = this.cartItems?.find(item => item.id_product === product.id_product);
    if (existingProduct) {
      // Si el producto ya existe en el carrito, actualizamos la propiedad 'quantity'
      existingProduct.quantity = (existingProduct.quantity ?? 0) + 1;
      existingProduct.sub_total = (existingProduct.price ?? 0) * existingProduct.quantity;
      this.total = this.cartItems.reduce((acc, item) => acc + (item.sub_total ?? 0), 0);
      
    } else {
      // Si el producto no existe en el carrito, lo agregamos con cantidad 1 y sub_total igual al precio
      this.cartItems.push({...product, quantity: 1, sub_total: (product.price ?? 0)});
    }
    
    // Actualizamos el total
    let total = 0;
    if(this.cartItems){
    for (const item of this.cartItems) {
      total += item.sub_total ?? 0;
    }
    
    // Actualizar la propiedad 'total' en cada objeto de producto en el carrito
    for (const item of this.cartItems) {
      item.total = total;
    }
  }
    
    
    // Guardamos los elementos del carrito en localStorage
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  
  resCart(product: Cart) {
    const existingProduct = this.cartItems?.find(item => item.id_product === product.id_product);
  
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity ?? 0) - 1;
      existingProduct.sub_total = (existingProduct.price ?? 0) * (existingProduct.quantity ?? 0);
      this.total = this.cartItems.reduce((acc, item) => acc + (item.sub_total ?? 0), 0);
      if (existingProduct.quantity <= 0) {
        const index = this.cartItems.findIndex(x => x.id_product === existingProduct.id_product);
        if (index !== -1) {
          this.cartItems.splice(index, 1);
        }
      }
    }
  
    // Actualizamos el total del carrito


    let total = 0;
    if(this.cartItems){
    for (const item of this.cartItems) {
      total += item.sub_total ?? 0;
    }
    
    // Actualizar la propiedad 'total' en cada objeto de producto en el carrito
    for (const item of this.cartItems) {
      item.total = total;
    }
  }
  
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
  
  
  removeFromCart(product: Cart) {
    // Buscamos el índice del producto en el carrito
    const productIndex = this.cartItems?.findIndex(item => item.id_product === product.id_product);
  
    if (productIndex !== undefined && productIndex !== -1) {
      // Si el producto está en el carrito, lo eliminamos usando splice()
      this.cartItems.splice(productIndex, 1);
  
      // Actualizamos el total del carrito
      this.total = this.cartItems.reduce((acc, item) => acc + (item.sub_total ?? 0), 0);
  
      // Guardamos los elementos del carrito en localStorage
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }


  // getRemisiones(){
  //   this._cartService.getRemisiones().subscribe((id_remisiones)=>{
  //       this.id_remisiones= id_remisiones
  //       for (let i = 0; i < this.id_remisiones.length; i++) {
  //         this.remision_id = (this.id_remisiones[i].id_remision ?? 0) + 1;
          
  //       }
  //       console.log(this.remision_id)
  //   })
  // }
  

  newRemision(){
  for (let i = 0; i < this.cartItems.length; i++) {

    const item: Cart={
      id_product: this.cartItems[i].id_product,
      name:this.cartItems[i].name,
      price:this.cartItems[i].price,
      quantity: this.cartItems[i].quantity,
      sub_total: this.cartItems[i].sub_total,
      total: this.cartItems[i].total,
      id_remision: 1,
      client_id: 1 
    }
    this._cartService.sendRemision(item).subscribe(()=>{
      console.log(this.cartItems)
      localStorage.clear()
    })
    
  }

    }
    }
                               
  




