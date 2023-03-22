import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RoleSesionGuardGuard implements CanActivate {
  constructor(private _CookieService: CookieService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie = this._CookieService.check('token');

    if(!cookie){
      this.router.navigate(['/', 'login'])
      return false;
    }else{
      
      return true
    }
      
    
    
  }
  
}
