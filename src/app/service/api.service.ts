import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private cookieService: CookieService, private http:HttpClient,private router: Router ) { }


  getToken(){
    this.cookieService.get('ASkjfwuihJKFH');
  }
  // service for app
  isLoggedIn(){
    return !!this.cookieService.get('ASkjfwuihJKFH');
  }

  postForm(obj:any){
    let url = "https://solutionsomg.com/api/tonalight";
    return this.http.post(url, obj);
  }

  putCode(obj:any){
    let url = "https://solutionsomg.com/api/tonalight";
    return this.http.put(url,obj);
  }







  // implement tinedas

  private username="admin";
  private password="d9QlQ@g%Iser";

  getTokenC(){
    let url = "http://54.151.5.188/tona/authenticate?username="+this.username+"&password="+this.password;
    return this.http.get(url);
  }

  getTienda(codigo:any,token:any){
    let url ="http://54.151.5.188/tona/tiendas?codigo=";
    return this.http.get(url+codigo,token);
  }

  getEmployee(tienda:any,code:any,token:any){
    let url = "http://54.151.5.188/tona/empleados?tienda="+tienda+"&codigo="+code;
    return this.http.get(url,token);
  }


  sendCanje(cui:any,code:any,tienda:any,token:any){
    let url = "http://54.151.5.188/tona/usuarios?cui="+cui+"&codigo="+code+"&tienda="+tienda;
    return this.http.post(url,token);
  }


  logOut(){
    let codigoTienda = localStorage.getItem('codigo_tienda');
    localStorage.clear();
    this.router.navigate(['tienda/'+codigoTienda]);
  }

  //service for tiendas
  isCodeIn(){ return !!localStorage.getItem('codigo_tienda');}
  isCodeOut(){ return localStorage.getItem('codigo_tienda');}


  


}
