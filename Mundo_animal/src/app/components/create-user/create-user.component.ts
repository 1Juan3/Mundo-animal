import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/usuario';
import { Vet } from 'src/app/interfaces/vet';
import { ErrorService } from 'src/app/services/error-service.service';
import { UserService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  
  opcionSeleccionado: string  = '0';
  verSeleccion: string = '';
  roles: string[] = ['Veterinaria(empresa)', 'Veterinario(persona)', 'Domiciliario'];
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService){}

  ngOnInit(): void {
  }


  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
}
addUser() {

  // Validamos que el usuario ingrese valores
  if (this.username == '' || this.password == '' || this.confirmPassword == '') {
    this.toastr.error('Todos los campos son obligatorios', 'Error');
    return;
  }

  // Validamos que las password sean iguales
  if (this.password != this.confirmPassword) {
    this.toastr.error('Las passwords ingresadas son distintas', 'Error');
    return;
  }

  switch (this.verSeleccion) {
    case 'Veterinaria(empresa)':
      const vet: User = {
        username: this.username,
        rol: this.verSeleccion,
        password: this.password
      }
      this._userService.registerVet(vet).subscribe({
        next: (v) => {
          this.loading = false;
          this.toastr.success(`El usuario ${this.username} fue registrado con exito con el rol de ${this.verSeleccion}`, 'Usuario registrado');
        },
        error: (e: HttpErrorResponse) => {
          this.loading = false;
          this._errorService.msjError(e);
        }
      });
      break;
    case 'Veterinario(persona)':
      const vete: User = {
        username: this.username,
        rol: this.verSeleccion,
        password: this.password
      }
      this._userService.registerVete(vete).subscribe({
        next: (v) => {
          this.loading = false;
          this.toastr.success(`El usuario ${this.username} fue registrado con exito con el rol de ${this.verSeleccion}`, 'Usuario registrado');
        },
        error: (e: HttpErrorResponse) => {
          this.loading = false;
          this._errorService.msjError(e);
        }
      });
      break;
    case 'Domiciliario':
      const domi: User = {
        username: this.username,
        rol: this.verSeleccion,
        password: this.password
      }
      this._userService.registerDeliver(domi).subscribe({
        next: (v) => {
          this.loading = false;
          this.toastr.success(`El usuario ${this.username} fue registrado con exito con el rol de ${this.verSeleccion}`, 'Usuario registrado');
        },
        error: (e: HttpErrorResponse) => {
          this.loading = false;
          this._errorService.msjError(e);
        }
      });
      break;
    default:
      this.toastr.error("no se pudo crear el usuario");
      break;
  }
}

}
