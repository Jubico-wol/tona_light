import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private cookieService: CookieService, private http:HttpClient ) { }


  getToken(){
    this.cookieService.get('ASkjfwuihJKFH');
  }
  isLoggedIn(){
    return !!this.cookieService.get('ASkjfwuihJKFH');
  }


  postForm(obj:any){
    let url = "https://solutionsomg.com/api/tonalight";
    return this.http.post(url, obj);
  }



}
