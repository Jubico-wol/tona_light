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
  data:any;
  error:any;
  show=false;

  ngOnInit(): void {

   
    this.codigoTienda = this.route.snapshot.paramMap.get('id');
    console.log(this.codigoTienda);
    
    this._api.getTokenC().subscribe((data)=>{  
      this.token= data
      console.log(this.token.token);
      this.getTienda(this.token.token);
    });

    
  }





  getTienda(token:any){ 

      let header = {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`}
      }
 
      this._api.getTienda(this.codigoTienda,header).subscribe((data)=>{
        console.log(data);
        this.data = data;
        this.tiendaName = this.data[0].nombre
        console.log(this.tiendaName);
        this.show=true;
      },(error) => {
        this.show=false;
        console.log(error.error)
        this.error = error.error;
      });

  }





  public code: any;
  public messageError:any;
  user:any;


  getEmployee(){
  
  console.log(this.codigoTienda)
  console.log(this.code);
 

    if(this.code){
      this._api.getTokenC().subscribe((data)=>{  
        this.token= data
        let header = {
          method: "GET",
          headers: { Authorization: `Bearer ${this.token.token}`}
        }
        this._api.getEmployee(this.codigoTienda, this.code ,header).subscribe((data)=>{
          console.log(data);
          this.data = data;
          console.log(this.data[0]);
          this.user= this.data[0]
           //localStorage.setItem('token',this.token.token);
          localStorage.setItem('user',this.user.nombre+this.user.apellido);
          localStorage.setItem('codigo_tienda', this.codigoTienda);
          this.router.navigate(['canje']);
        
        },(error) => {
          console.log(error.error)
          this.messageError = error.error;
        });
    
      });
    }else{
      this.messageError = "Código de empleado no encontrado";
    }

 



    


  }

  goToForm(){
   this.getEmployee();
  }



}
