import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard/guard.guard';

import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { FormComponent } from './form/form.component';

const routes: Routes   = [
  { path: '', component: HomeComponent },
  { path: 'info', component: InfoComponent, canActivate: [GuardGuard] },
  { path: 'form', component: FormComponent, canActivate: [GuardGuard] },
  { path: '',   redirectTo: '/', pathMatch: 'full' }, 
  { path: '**', component: HomeComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
