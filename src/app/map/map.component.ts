import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  position = { lat:12.865416, lng:-85.207229 };


  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    zoom: 8,

  }





  map: any;
directionsService = new google.maps.DirectionsService();
directionsDisplay = new google.maps.DirectionsRenderer();
// parque simon bolivar
origin = { lat: 4.658383846282959, lng: -74.09394073486328 };
// Parque la 93
destination = { lat: 4.676802158355713, lng: -74.04825592041016 };




 

}
