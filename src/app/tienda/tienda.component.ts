import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor( private _api:ApiService, private router: Router, private route: ActivatedRoute) { }

  tienda:any;
  ngOnInit(): void {
    this.tienda = this.route.snapshot.paramMap.get('id');
    console.log(this.tienda);
  }


  exchangeCode(){

   console.log(this.tienda)

    // this._api.putCode()



  }



}
