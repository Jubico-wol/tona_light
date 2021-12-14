import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-tienda-success',
  templateUrl: './modal-tienda-success.component.html',
  styleUrls: ['./modal-tienda-success.component.css']
})
export class ModalTiendaSuccessComponent implements OnInit {

  constructor(   public dialogRef: MatDialogRef<ModalTiendaSuccessComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}


export interface DialogData {
  result: any;
}
