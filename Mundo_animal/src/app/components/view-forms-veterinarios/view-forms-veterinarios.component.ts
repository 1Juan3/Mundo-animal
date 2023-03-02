import { Component, OnInit } from '@angular/core';
import { Record } from 'src/app/interfaces/record';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-view-forms-veterinarios',
  templateUrl: './view-forms-veterinarios.component.html',
  styleUrls: ['./view-forms-veterinarios.component.css']
})
export class ViewFormsVeterinariosComponent implements OnInit{

constructor(private _recordService: RecordService){}
  forms?: Record[];
  ngOnInit(): void {
    this.getForm();
  }

  getForm(){
    this._recordService.getRecords().subscribe((forms) =>{
      this.forms=forms;
    })
  }
  deleteForm(id: number) {
    this._recordService.deleteRecord(id).subscribe(() => {
      this.getForm();
    });
  }

}
