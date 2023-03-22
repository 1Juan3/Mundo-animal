import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/usuario';
import { ErrorService } from 'src/app/services/error-service.service';
import { UserService } from 'src/app/services/usuarios.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';
  roles: string[] = [
    "Cliente",
    'Veterinaria(empresa)',
    'Veterinario(persona)',
    'Domiciliario',
  ];
  username: string = '';
  password: string = '';
  loading: boolean = false;

  constructor(
    private toastr: ToastrService,
    private _userService: UserService,
    private router: Router,
    private _errorService: ErrorService,
    private _CookieService: CookieService
  ) {}

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
  }

  login() {
    // Validamos que el usuario ingrese datos
    if (this.username == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    // Creamos el body
    const user: User = {
      username: this.username,
      rol: this.verSeleccion,
      password: this.password,
    };

    this.loading = true;

    this._userService.login(user).subscribe({
      next: (token) => {
        const tokens = token;
        localStorage.setItem('token', token);
        this._CookieService.set('token',token);
        this.router.navigate(['/listProduct']);
        
      },
      error: (e: HttpErrorResponse) => {
        this._errorService.msjError(e);
        this.loading = false;
      },
    });
  }

  ngOnInit(): void {}
}
