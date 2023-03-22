import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RoleVeterinarioGuardGuard implements CanActivate {
  constructor(private _CookieService: CookieService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie = this._CookieService.get('token');
    const rol = jwtDecode(cookie)
  
    if(rol == 'Veterinario(persona)'){
      
      return true;
    }else{
      this.router.navigate(['/', 'Products'])
      return false
    }
      
    
    
  }
  
}
