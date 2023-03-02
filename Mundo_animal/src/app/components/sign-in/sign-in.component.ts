import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/interfaces/client';
import { ErrorService } from 'src/app/services/error-service.service';
import { UserService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
;
  name: string ='';
  last_name :string= '';
  rol:string= "cliente";
  address: string='';
  phone:string='';
  email:string='';
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService
  ) {}
  addUser() {
    // Validamos que el usuario ingrese valores
    if (
      this.name ==''||
      this.last_name ==''||
      this.address==''||
      this.phone==''||
      this.email==''||
      this.username == '' ||
      this.password == '' ||
      this.confirmPassword == '' 
    ) {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // Validamos que las password sean iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('Las passwords ingresadas son distintas', 'Error');
      return;
    }

    // Creamos el objeto
    const client: Client = {
      name :this.name,
      last_name: this.last_name,
      rol:this.rol,
      address:this.address,
      phone: this.phone,
      email:this.email,
      username: this.username,
      password: this.password,
    };

    this.loading = true;
    this._userService.signIn(client).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(
          `El usuario ${this.username} fue registrado con exito con el rol de ${this.rol}`,
          'Usuario registrado'
        );
        this.router.navigate(['/login']);
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      },
    });
  }
  ngOnInit(): void {}
}
