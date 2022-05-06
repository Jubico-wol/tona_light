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


  private url = "https://apiswolgroup.com/tona";
  private username="admin";
  private password="d9QlQ@g%Iser";

  getTokenC(){
    let url = this.url+"/authenticate?username="+this.username+"&password="+this.password;
    return this.http.get(url);
  }




  getTienda(codigo:any,token:any){
    let url =this.url+"/tiendas?codigo=";
    return this.http.get(url+codigo,token);
  }

  getEmployee(tienda:any,code:any,token:any){
    let url = this.url+"/empleados?tienda="+tienda+"&codigo="+code;
    return this.http.get(url,token);
  }

  // sendCanje(cui:any,code:any,tienda:any,token:any){
  //   let url = this.url+"/usuarios?cui="+cui+"&codigo="+code+"&tienda="+tienda;
  //   return this.http.post(url,{"cui":cui,"codigo":code,"tienda":tienda},token);
  // }


  sendCanje(obj:any,token:any){
    let url = this.url+"/usuarios";
    return this.http.post(url,obj,token);
  }

  //https://apiswolgroup.com/tona/usuarios?cui=2675583840101&codigo=432783&tienda=463728


  doLogin(usuario:any, codigo:any, token:any){
    let url = this.url+"/tiendas?usuario="+usuario+"&codigo="+codigo;
    return this.http.get(url,token)
  }



  logOut(){
    //let codigoTienda = localStorage.getItem('codigo_tienda');
    localStorage.clear();
    this.router.navigate(['tienda']);
  }

  //service for tiendas
  isCodeIn(){  return !!localStorage.getItem('codigo_tienda');}
  isCodeOut(){ return localStorage.getItem('codigo_tienda');}


  


}
