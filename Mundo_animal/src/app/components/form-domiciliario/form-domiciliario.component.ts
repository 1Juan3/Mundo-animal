import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { RecordService } from 'src/app/services/record.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormDomiciliario } from 'src/app/interfaces/form-domiciliario';
import { FormDomiciliarioService } from 'src/app/services/form-domiciliario.service';

@Component({
  selector: 'app-form-domiciliario',
  templateUrl: './form-domiciliario.component.html',
  styleUrls: ['./form-domiciliario.component.css']
})
export class FormDomiciliarioComponent {
  form!: FormGroup;
  id?: number;
  selectedFile: File = new File([], '');

  constructor(private _FormDomiciliarioService: FormDomiciliarioService,
    private router: Router,
    private aRouter: ActivatedRoute,
    private fb: FormBuilder){
      this.form = this.fb.group({
        email : ['', Validators.required],
        name : ['', Validators.required],
        last_name: ['', Validators.required],
        hoja_vida: [null],})
        this.id = Number(this.aRouter.snapshot.paramMap.get('id'));
    }

    onFileSelected(event: any) {
      this.selectedFile = <File>event.target.files[0];
      const file = this.selectedFile;
      this.form.patchValue({
        hoja_vida: file
      })
  
    }
    onSubmit() {
    
      const fd = new FormData();
      fd.append('email', this.form.get('email')?.value);
      fd.append('name', this.form.get('name')?.value);
      fd.append('last_name', this.form.get('last_name')?.value);
      fd.append('hoja_vida', this.form.get('hoja_vida')?.value);
      
      this._FormDomiciliarioService.addDomiciliario(fd).subscribe(() => {
    });
    }
}
