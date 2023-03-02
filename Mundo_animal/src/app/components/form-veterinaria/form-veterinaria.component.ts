import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { FormVeterinariaService } from 'src/app/services/form-veterinaria.service';
import { Formulario } from 'src/app/interfaces/formveterinaria';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-veterinaria',
  templateUrl: './form-veterinaria.component.html',
  styleUrls: ['./form-veterinaria.component.css']
})
export class FormVeterinariaComponent implements OnInit {

  id?: number;
  toastr: any;
form = new FormGroup ({
  email: new FormControl('', Validators.required),
  razon_social: new FormControl('', Validators.required),
  representante_legal: new FormControl('', Validators.required)
})
  
  constructor(
    private _FormService: FormVeterinariaService,
    private router: Router,
    private aRouter: ActivatedRoute,
    private fb: FormBuilder
  ){


  }

  ngOnInit(): void {

  }

  sendForm(fb : any ){
const formulario: Formulario= {
  id:fb.id,
  email:fb.email,
  razon_social:fb.razon_social,
  representante_legal:fb.razon_social
}
console.log(formulario)
this._FormService.newForm(formulario).subscribe(() => {
  this.router.navigate(['/']);
});
  }

}
