import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/interfaces/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products ?: Product[];
  cartItems?: Cart[]=[];
  quantity:number = 1;
  client_id: number =1;
  total?:number;
 
  constructor(private _productService: ProductService, private _CartService: CartService, private router: Router,){

  }

  getProducts(){
    this._productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  addToCart(product: Product) {
    // Obtener los productos existentes del carrito
    const token = localStorage.getItem('token')
    const items = localStorage.getItem('cartItems');
    // if(token){

    
    if (items) {
      this.cartItems = JSON.parse(items);
    }
  
    // Buscar si ya existe el producto en el carrito
    const existingProduct = this.cartItems?.find(item => item.id_product === product.id);
    if (existingProduct) {
      // Si el producto ya existe en el carrito, actualizamos la propiedad 'quantity'
      existingProduct.quantity = (existingProduct.quantity ?? 0) + 1;
      existingProduct.sub_total = (existingProduct.price ?? 0) * existingProduct.quantity;

      existingProduct.client_id = 1;

      this.total = this.cartItems?.reduce((acc, item) => acc + (item.sub_total ?? 0), 0);
      
    } else {
      // Si el producto no existe en el carrito, lo agregamos con cantidad 1 y sub_total igual al precio
      // this.cartItems?.push({...product, quantity: 1, id_remision: 1,  sub_total: (product.price ?? 0)});
      const newCardItems: any ={
        id_product: product.id,
        name: product.name,
        price: product.price,
        quantity:1,
        image: product.image,
        sub_total:product.price,
        total: this.total,
        id_remision: 1,
        client_id:1

      }
      this.cartItems?.push(newCardItems);
    
      
      
    }
     // Calcular el total del carrito
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
    console.log(this.cartItems)
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  // }else{
  //   this.router.navigate(['/login'])
  // }
}
}
