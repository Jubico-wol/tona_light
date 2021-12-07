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
  // public zoom: number;


  constructor() {
    this.markers = [];
    // this.zoom = 8;
   }
dep:any;
muni:any;
tienda:any;
tent:any;
municipalidades:any;
  ngOnInit(): void {
    this.dep= departamentos;
    this.muni = municipios;
    this.tent = tiendas;

console.log(this.dep)

  }



  onChange(deviceValue:any) {
  let id = deviceValue.target.value;
  let muni;  
   // console.log(deviceValue.target.value);
  let array = this.muni.find((item:{muniId:any})=> item.muniId == id );
  muni = array.allMuni ;
 // console.log(muni);
  this.municipalidades = muni;
}

onChange2(deviceValue:any) {
  let id = deviceValue.target.value;
  let tienda;  
   console.log(id);
  let array = this.tent.find((item:{tiendaId:any})=> item.tiendaId == id );
  tienda = array.allTiendas ;
 
  this.tienda = tienda;
  console.log(this.tienda);
  
}

center = {lat:12.865416, lng:-85.207229};
zoom = 8;
display?: google.maps.LatLngLiteral;


pos:any;
viewLocation(val:any){
  console.log(val)
  this.pos = val;
  // this.zoom = 14
// navigator.geolocation.watchPosition(poss=>{
//   console.log(poss)
//   this.pos = poss
// }) ;
}

























 

}




