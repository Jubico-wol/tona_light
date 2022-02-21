import { Component, OnInit } from '@angular/core';
import departamentos from '../../assets/json/departamentos.json';
import municipios from '../../assets/json/municipios.json';
import tiendas from '../../assets/json/tiendas.json';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  public markers: any[];
  

  constructor() {
    this.markers = [];
   }

dep:any;
muni:any;
tienda:any;
tent:any;
municipalidades:any;
showTable=false;

  ngOnInit(): void {
    this.dep= departamentos;
    this.muni = municipios;
    this.tent = tiendas;
  }

center = {lat:12.865416, lng:-85.207229};
zoom = 8;
display?: google.maps.LatLngLiteral;


  onChange(deviceValue:any) {
  let id = deviceValue.target.value;
  let muni;  

  let array = this.muni.find((item:{muniId:any})=> item.muniId == id );
  muni = array.allMuni ;

  this.municipalidades = muni;
  this.showTable = false;
}




onChange2(deviceValue:any) {
  let id = deviceValue.target.value;
  let tienda;  

  let array = this.tent.find((item:{tiendaId:any})=> item.tiendaId == id );
  tienda = array.allTiendas ;
 
  this.tienda = tienda;

  this.showTable = true;
}


pos:any;
viewLocation(val:any){
  this.pos = val;
  this.center= this.pos;
  this.zoom= 18
}

























 

}




