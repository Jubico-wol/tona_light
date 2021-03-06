import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService, public dialog: MatDialog) {}

  ngOnInit(): void {
    // window.location.href ='https://cervezatona.com';
  }

  

  day:any;
  month:any;
  year:any;



  private fecha = new Date();
  private ano = this.fecha.getFullYear();
  private edad:any;


goToInfo(){

  console.log(this.edad)
  this.edad = this.ano - this.year ;
  if( this.day >31 || this.month >12 || this.year >this.ano ){
    this.modal();
  }
  else if(  this.day ==undefined || this.month ==undefined || this.year ==undefined ){
    this.modal();
  }
  else if(  this.day ==null || this.month ==null || this.year ==null ){
    this.modal();
  }
  else if(  this.day <=0 || this.month <=0  || this.year <=0  ){
    this.modal();
  }





  else{
console.log(this.edad)
    if(this.edad >=18){ 
      this.cookieService.set( 'ASkjfwuihJKFH', 'tonia_light_azul', {expires: 0.1, sameSite: 'Lax'});
      this.router.navigate(['info']);
    
    }else{
      this.modal();
    }
  



    }






}




  modal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
    });
  }


}
