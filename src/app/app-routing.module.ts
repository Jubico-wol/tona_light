import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard/guard.guard';
import { LoginGuard } from './guard/login.guard';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { FormComponent } from './form/form.component';
import { InicioComponent } from './inicio/inicio.component';
import { TiendaComponent } from './tienda/tienda.component';
import { TloginComponent } from './tlogin/tlogin.component'



const routes: Routes   = [
  // { path: '', component: HomeComponent },
  // { path: 'inicio', component:InicioComponent},
  // { path: 'info', component: InfoComponent, canActivate: [GuardGuard] },
  // { path: 'form', component: FormComponent, canActivate: [GuardGuard] },
 
  { path: 'tienda', component: TloginComponent , canActivate:[LoginGuard]},
  { path: 'canje', component:TiendaComponent, canActivate: [GuardGuard]},
  //{ path: 'canje', component:TiendaComponent},
  { path: '',   redirectTo: '/tienda', pathMatch: 'full' }, 
  { path: '**', component: TloginComponent }, 

  // { path: '**', component: HomeComponent },  
];




@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
