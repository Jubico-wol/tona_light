import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor( private _api: ApiService, private router: Router ) { }
  canActivate(): boolean{

    //service for app
    // if(this._api.isLoggedIn()){
    //   return true;
    // }else{
    //   this.router.navigate(['']);
    //   return false;
    // }


    // service for tiendas
    if(this._api.isCodeIn()){
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }


  }
  
}
