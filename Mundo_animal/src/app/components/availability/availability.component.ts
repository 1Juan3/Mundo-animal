import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AvailabilityService } from 'src/app/services/availability.service'; 
import { Availability } from 'src/app/interfaces/availability';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {
  availability?: any[] =[];
  opcionSeleccionado: string  = '0';
  verSeleccion: string = '';
  dayOfWeek: string[] = ['Lunes', 'Martes', 'Miercoles','Jueves', 'Viernes','Sabado', 'Domingo'];
  startTime: string = '';
  endTime: string = '';
  id?:number;
  veterinarianId:number=1
  constructor( private _availabilityService: AvailabilityService, private aRouter: ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.getAvailability(this.veterinarianId);
  }
  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
}
addAvailability(){
  const disponivilidad : Availability={
    id: this.id = Number(this.aRouter.snapshot.paramMap.get('id')),
    dayOfWeek: this.verSeleccion,
    startTime: this.startTime,
    endTime: this.endTime,
    veterinarianId: 1
  }
  this._availabilityService.addAvailability(disponivilidad).subscribe(() => {
  });
}
getAvailability(veterinarianId: any): void {
  this._availabilityService.getAvailability(veterinarianId).subscribe((data: any) => {
    console.log(data)
    this.availability= data.reverse();
  });
}


}
