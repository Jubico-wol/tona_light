import { Component, OnInit } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalTiendaErrorComponent } from '../modal-tienda-error/modal-tienda-error.component';
import { ModalTiendaSuccessComponent } from '../modal-tienda-success/modal-tienda-success.component';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor( private _api:ApiService, private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }


  ngOnInit(): void {}

  data:any;
  error:any;
  success:any;
  result:any;
  message:any;

  modalError(obj:any){
    let result = obj
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(ModalTiendaErrorComponent, {
      data:{ result: result},
      width: '600px'
    });
  }

  modalSuccess(obj:any){
    let result = obj
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(ModalTiendaSuccessComponent, {
      data:{ result: result},
      width: '600px'
    });
  }
  private token:any;
  public  codigoTienda:any;
  public  tiendaName:any;
  public  tienda:any
  cui:any;
  codigo:any;
  id:any;
  messageError:any;
  status:any;
  err:any;
  msg:any;
  simpleAlert(msg:any){  
    Swal.fire(msg);  
  }  
sendInfo(){

  this.codigoTienda = localStorage.getItem('codigo_tienda');

  this._api.getTokenC().subscribe((data)=>{  
   
    this.token= data
    //console.log(this.token.token);
   
    let header = {
      method: "POST",
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      headers: { Authorization: `Bearer ${this.token.token}`}
    }

    let obje =
      {
        cui:    this.cui,
        codigo: this.codigo,
        tienda: this.codigoTienda
      }
    
     this._api.sendCanje(obje,header).subscribe((data)=>{
      
      //console.log(data);
    
      this.data = data;
      this.status = this.data.staus
      this.msg = this.data.msg
      this.cui="";
      this.codigo="";

      //console.log("mesaje"+this.msg)
      if(this.status=200){
        //this.modalSuccess(this.msg);
        this.simpleAlert(this.msg)
      }
  
      if(this.status==400){
      //  this.modalSuccess(this.msg);
     this.simpleAlert(this.msg)
      }


      
     // this.modalSuccess(this.post)
    },(error) => {
     // console.log(error.error)
      this.messageError = error.error.msg;
      this.cui="";
      this.codigo="";
      this.simpleAlert(this.messageError)
    });


  });

}


}











// VALIDACION CUI NICARAGUA 
export class CuiValidator {
  static validarCedula(control: AbstractControl) : ValidationErrors | null {

      const LETRAS = "ABCDEFGHJKLMNPQRSTUVWXY";
      let cedula = control.value;

      const preFixValid = [
        '001',
        '002',
        '003',
        '004',
        '005',
        '006',
        '007',
        '008',
        '009',
        '041',
        '042',
        '043',
        '044',
        '045',
        '046',
        '047',
        '048',
        '081',
        '082',
        '083',
        '084',
        '085',
        '086',
        '087',
        '088',
        '089',
        '090',
        '091',
        '092',
        '093',
        '121',
        '122',
        '123',
        '124',
        '125',
        '126',
        '127',
        '128',
        '129',
        '130',
        '161',
        '162',
        '163',
        '164',
        '165',
        '166',
        '201',
        '202',
        '203',
        '204',
        '241',
        '242',
        '243',
        '244',
        '245',
        '246',
        '247',
        '281',
        '283',
        '284',
        '285',
        '286',
        '287',
        '288',
        '289',
        '290',
        '291',
        '321',
        '322',
        '323',
        '324',
        '325',
        '326',
        '327',
        '328',
        '329',
        '361',
        '362',
        '363',
        '364',
        '365',
        '366',
        '401',
        '401',
        '402',
        '402',
        '403',
        '403',
        '404',
        '404',
        '405',
        '405',
        '406',
        '406',
        '407',
        '407',
        '408',
        '408',
        '409',
        '409',
        '441',
        '442',
        '443',
        '444',
        '445',
        '446',
        '447',
        '448',
        '449',
        '450',
        '451',
        '452',
        '453',
        '454',
        '481',
        '482',
        '483',
        '484',
        '485',
        '486',
        '487',
        '488',
        '489',
        '490',
        '491',
        '492',
        '493',
        '521',
        '522',
        '523',
        '524',
        '525',
        '526',
        '561',
        '562',
        '563',
        '564',
        '565',
        '566',
        '567',
        '568',
        '569',
        '570',
        '601',
        '602',
        '603',
        '604',
        '605',
        '606',
        '607',
        '608',
        '610',
        '611',
        '612',
        '615',
        '616',
        '619',
        '624',
        '626',
        '627',
        '628',
        '888',
        '001',
        '002',
        '003',
        '004',
        '005',
        '006',
        '007',
        '008',
        '009',
      ];
    
    
      if (cedula == null || cedula.length != 14) cedula = null;
      else cedula = cedula.toUpperCase();
    
      const getPrefijoCedula = () => {
        if (cedula != null) return cedula.substring(0, 3);
        else return null;
      };
    
      const isPrefijoValido = () => {
        const prefijo = getPrefijoCedula();
        if (!prefijo) return false;
        if (!preFixValid.includes(prefijo)) return false;
        const re = new RegExp("^[0-9]{3}$");
        if (prefijo.search(re) == -1) return false;
    
        return true;
      };
    
      const getFechaCedula = () => {
        if (cedula != null) return cedula.substring(3, 9);
        else return null;
      };
    
      const isFechaValida = () => {
        const fecha = getFechaCedula();
    
        if (fecha == null) return false;
    
        const re = new RegExp(
          "^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[012])([0-9]{2})$"
        );
        if (fecha.search(re) == -1) return false;
    
        return true;
      };
    
      const getSufijoCedula = () => {
        if (cedula != null) return cedula.substring(9, 14);
        else return null;
      };
    
      const isSufijoValido = () => {
        const sufijo = getSufijoCedula();
    
        if (sufijo == null) return false;
    
        const re = new RegExp("^[0-9]{4}[A-Y]$");
        if (sufijo.search(re) == -1) return false;
    
        return true;
      };
    
      const getCedulaSinLetra = () => {
        if (cedula != null) return cedula.substring(0, 13);
        else return null;
      };
    
      const getPosicionLetra = () => {
        let posicionLetra = 0;
        const cedulaSinLetra = getCedulaSinLetra();
        let numeroSinLetra = 0;
    
        if (cedulaSinLetra == null) return -1;
    
        numeroSinLetra = cedulaSinLetra;
    
        posicionLetra = numeroSinLetra - Math.floor(numeroSinLetra / 23.0) * 23;
    
        return posicionLetra;
      };
    
      const calcularLetra = () => {
        var posicionLetra = getPosicionLetra();
    
        if (posicionLetra < 0 || posicionLetra >= LETRAS.length) return "?";
    
        return LETRAS.charAt(posicionLetra);
      };
    
      const getLetraCedula = () => {
        if (!!cedula) return cedula.substring(13, 14);
        else return null;
      };
    
      const isLetraValida = () => {
        let letraValida = null;
        var letra = getLetraCedula();
        if (letra == null) return false;
    
        letraValida = calcularLetra();
        return letraValida == letra;
      };
    
      const isCedulaValida = () => {
        if (!isPrefijoValido()) return false;
        if (!isFechaValida()) return false;
        if (!isSufijoValido()) return false;
        if (!isLetraValida()) return false;
        return true;
      };
      const res = isCedulaValida();

    if(res == false){
        return {validarCedula: true}
    }

    return null;

  }
}



