import { Component, OnInit } from '@angular/core';
import { FormVeterinariaService } from 'src/app/services/form-veterinaria.service';
import { Formulario } from 'src/app/interfaces/formveterinaria';

@Component({
  selector: 'app-view-form-veterinarias',
  templateUrl: './view-form-veterinarias.component.html',
  styleUrls: ['./view-form-veterinarias.component.css']
})
export class ViewFormVeterinariasComponent implements OnInit {
 
  forms?: Formulario[];

  ngOnInit(): void {
    this.getForm();
  }
  constructor(private _FormService: FormVeterinariaService){}

  getForm(): void {
    this._FormService.getAllForms().subscribe((forms) => {
      this.forms = forms;
    });
  }
  deleteForm(id: number) {
    this._FormService.deleteForm(id).subscribe(() => {
      this.getForm();
    });
  }
}
