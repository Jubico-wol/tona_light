import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard/guard.guard';
import { LoginGuard } from './guard/login.guard';
import { TiendaComponent } from './tienda/tienda.component';
import { TloginComponent } from './tlogin/tlogin.component'


const routes: Routes   = [
  { path:'', component: TloginComponent , canActivate:[LoginGuard]},
  { path:'canje', component:TiendaComponent, canActivate: [GuardGuard]},
  { path:'', redirectTo:'/', pathMatch: 'full'},
  { path: '**', redirectTo:  '/' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
