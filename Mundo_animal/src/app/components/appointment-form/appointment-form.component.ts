import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/interfaces/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  availability?: any[] =[];
  opcionSeleccionado: string  = '0';
  verSeleccion: string = '';
  dayOfWeek: string[] = ['Lunes', 'Martes', 'Miercoles','Jueves', 'Viernes','Sabado', 'Domingo'];
  startTime: string = '';
  endTime: string = '';
  id?:number;
  veterinarianId:number=1

  constructor(private aRouter: ActivatedRoute, private _apopoimentService: AppointmentService){}

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
}

addAppointment(){
  const appointment : Appointment={
    id: this.id = Number(this.aRouter.snapshot.paramMap.get('id')),
    appointmentDate: this.verSeleccion,
    startTime: this.startTime,
    endTime: this.endTime,
    veterinaryId: 1,
    clientId:1
    
  }
  this._apopoimentService.addAvailability(appointment).subscribe(() => {
    
  });
}


}
