import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  implements OnInit{
  products!: FormGroup;
  loading: boolean = false;
  operacion: string = 'Agregar';
  id ?: number;
  product: Product = new Product();
  selectedFile: File = new File([], '');
  toastr: any;
  veterinaria_id:number = 1;
  
  constructor(private productService: ProductService,
              private router: Router,
              private http: HttpClient,
              private aRouter: ActivatedRoute,
              private fb: FormBuilder){
                this.products= this.fb.group({
                  name: ['', Validators.required],
                  description: ['', Validators.required],
                  price: [null, Validators.required],
                  stock: [null, Validators.required] ,
                  image:[null],
                  veterinaria_id: [null]})
                  
                  this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
                  console.log(this.id)
                }
  ngOnInit(): void {
    this.products.patchValue({
      veterinaria_id: this.veterinaria_id // asigna el valor de veterinaria_id al campo veterinaria_id del formulario
    });
    if (this.id !== undefined && this.id !== null && this.id !== 0) {
      this.operacion = 'Editar ';
      this.getProduct(this.id);
    }
  }



  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const file = this.selectedFile;
    this.products.patchValue({
      image: file
    })

  }


  onSubmit() {
    
    const fd = new FormData();
    fd.append('name', this.products.get('name')?.value);
    fd.append('description', this.products.get('description')?.value);
    fd.append('price', this.products.get('price')?.value);
    fd.append('stock', this.products.get('stock')?.value);
    fd.append('image', this.products.get('image')?.value);
    fd.append('veterinaria_id',this.products.get('veterinaria_id')?.value);
    
    
    
    //esto es para editar
    if(this.id!==0){
      this.operacion = 'Editar ';
      this.product.id= this.id
      this.productService.updateProduct(this.id!, fd).subscribe(() => {
        console.log(fd)
        this.toastr.info(`El producto ${this.product.name} fue actualizado con exito`, 'Producto actualizado');
        this.router.navigate(['/listProduct']);
      })
    }else{
      this.productService.addProduct(fd).subscribe(() => {
        this.router.navigate(['/listProduct']);
      });

    }
  }
editProduct(productId: number) {
  const product = this.products.value.find((p: { id: number; }) => p.id === productId);
  // Abre la modal de edición con los datos del producto
}


getProduct(id: number){
  this.loading=true;
  this.productService.getProduct(id).subscribe((data: Product) =>{
    this.loading=false;
    console.log(data)
    this.products.setValue({
      name : data.name,
      description : data.description,
      price : data.price,
      stock: data.stock,
      image : data.image
    })
  })
}

}
