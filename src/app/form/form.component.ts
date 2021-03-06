import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import { ModalFormErrorComponent} from '../modal-form-error/modal-form-error.component';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _api: ApiService, public dialog: MatDialog) { this.contactForm = this.createForm(); }

  ngOnInit(): void {
  }


  public contactForm: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private onlyNumbers: any = /[0-9\+\-\ ]/;


  get Nombre()    { return this.contactForm.get('Nombre') as FormControl; } 
  get Apellido()  { return this.contactForm.get('Apellido'); }
  get Email()     { return this.contactForm.get('Email') as FormControl; }
  get telefono()  { return this.contactForm.get('telefono') as FormControl; }
  get CUI()       { return this.contactForm.get('CUI') as FormControl; }
  get check()     { return this.contactForm.get('check') as FormControl; }


  // this.loginForm = fb.group({
  //   cb: [false, Validators.required],
  // //cb: ['',Validators.required] - this will also work.

  // });
  createForm() {
    return new FormGroup({
      Nombre:     new FormControl('', [Validators.required, Validators.minLength(3)]),
      Apellido:   new FormControl('', [Validators.required, Validators.minLength(3)]),
      Email:      new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      CUI:        new FormControl('', [Validators.required, Validators.minLength(14), CuiValidator.validarCedula]),
      telefono:   new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.onlyNumbers)]),
      check:      new FormControl('',[Validators.required])
    });
  }

  data: any;
  result: any;
  success: any;
  err: any;
  error: any;
  code:any;
  checked = false;
  terms:any;

  onSendForm(): void {

    if(this.checked == false){
      this.terms = false;

    }
    if(this.checked == true){
      this.terms = true;
        if (this.contactForm.valid) {
          this.contactForm.value
          this.data = this.contactForm.value;
          this._api.postForm(this.data).subscribe(data=>{
            this.data = data;
            this.error = this.data.result;
            this.code = this.data.codigo
            if(this.error){
              this.modalError();
            } else{ 
              this.modal(this.code);
            }
          })
        }
    }

  


  }


  modal(obj:any){
    let codigo = obj
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(ModalFormComponent, {
      data:{ code: codigo},
      width: '100%',
    });
  }


// modal(obj:any){
//   let codigo = obj
//   const dialogConfig = new MatDialogConfig();
//   dialogConfig.disableClose = true;
//   const dialogRef = this.dialog.open(ModalFormComponent, {
//     data:{ code: codigo},
//     width: '745px',
//   });
// }

modalError(){

  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  const dialogRef = this.dialog.open(ModalFormErrorComponent, {
    width: '600px',
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



