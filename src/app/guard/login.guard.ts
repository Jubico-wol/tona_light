import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor( private _api: ApiService, private router: Router ) { }
  canActivate(): boolean{

   

    // service for tiendas
    if(this._api.isCodeOut()){
      this.router.navigate(['canje']);
      return false;
    }else{
      return true;
    }



  }
  
}
