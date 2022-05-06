import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-tlogin',
  templateUrl: './tlogin.component.html',
  styleUrls: ['./tlogin.component.css']
})
export class TloginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private _api:ApiService, private http:HttpClient) { }

  private token:any;
  public  codigoTienda:any;
  public  tiendaName:any;
  public  tienda:any
  public code: any;
  public messageError:any;
  user:any;
  id:any;
  data:any;
  error:any;
  show=false;

  ngOnInit(): void {
    // this.codigoTienda = this.route.snapshot.paramMap.get('id');
    // console.log(this.codigoTienda);
  }


  doLogin(){
   
    this._api.getTokenC().subscribe((data)=>{  
      this.token= data
     // console.log(this.token.token);
      let header = {
        method: "GET",
        headers: { Authorization: `Bearer ${this.token.token}`}
      }
      this._api.doLogin(this.codigoTienda,this.code,header).subscribe((data)=>{ 
       // console.log(data);
        this.data = data;
       // console.log(this.data[0]);
        this.tienda= this.data[0].nombre
        this.id = this.data[0].id
        localStorage.setItem('codigo_tienda',this.codigoTienda);
        localStorage.setItem('tienda',this.tienda);
        this.router.navigate(['canje']);
      },(error) => {
       // console.log(error.error)
        this.messageError = error.error;
      });

    });

  }



}
