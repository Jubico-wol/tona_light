import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { GoogleMapsModule } from '@angular/google-maps';

// components

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { FormComponent } from './form/form.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { ModalFormComponent } from './modal-form/modal-form.component';
import { HeaderFormComponent } from './header-form/header-form.component';
import { ModalFormErrorComponent } from './modal-form-error/modal-form-error.component';
import { MapComponent } from './map/map.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderInicioComponent } from './header-inicio/header-inicio.component';
import { TiendaComponent } from './tienda/tienda.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    HeaderComponent,
    FooterComponent,
    InfoComponent,
    FormComponent,
    HeaderInfoComponent,
    FooterInfoComponent,
    ModalFormComponent,
    HeaderFormComponent,
    ModalFormErrorComponent,
    MapComponent,
    InicioComponent,
    HeaderInicioComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
