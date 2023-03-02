import { Component, OnInit } from '@angular/core';
import { FormDomiciliario } from 'src/app/interfaces/form-domiciliario';
import { FormDomiciliarioService } from 'src/app/services/form-domiciliario.service';

@Component({
  selector: 'app-view-forms-domiciliario',
  templateUrl: './view-forms-domiciliario.component.html',
  styleUrls: ['./view-forms-domiciliario.component.css']
})
export class ViewFormsDomiciliarioComponent implements OnInit {

  forms?: FormDomiciliario[];
 
 constructor(private _formService: FormDomiciliarioService){}
  ngOnInit(): void {
    this.getForm();
  }
  getForm(){
    this._formService.getDomiciliarios().subscribe((forms) =>{
      this.forms=forms;
    })
  }
  deleteForm(id: number) {
    this._formService.deleteDomiciliario(id).subscribe(() => {
      this.getForm();
    });
  }

}
