import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.css']
})
export class HeaderFormComponent implements OnInit {

  constructor(private _api:ApiService) { }
user:any
show=false;
  ngOnInit(): void {

    if (localStorage.length > 0) {
        this.user = localStorage.getItem('tienda');
        this.show = true;
      } else {
        this.show = false;
      }    
  }



  logOut(){
    this._api.logOut();
  }


}
