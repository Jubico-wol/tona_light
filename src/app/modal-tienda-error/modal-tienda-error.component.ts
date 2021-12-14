import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-modal-tienda-error',
  templateUrl: './modal-tienda-error.component.html',
  styleUrls: ['./modal-tienda-error.component.css']
})
export class ModalTiendaErrorComponent implements OnInit {

  constructor(   public dialogRef: MatDialogRef<ModalTiendaErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}


export interface DialogData {
  result: any;
}