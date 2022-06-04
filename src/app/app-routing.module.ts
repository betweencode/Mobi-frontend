import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacionLayoutComponent } from './layout/autenticacion/autenticacion-layout/autenticacion-layout.component';

const routes: Routes = [
  { path: 'autenticacion', component: AutenticacionLayoutComponent,loadChildren:()=>import('./modules/crearCuenta/crearCuenta.module').then(m=>m.crearCuentaModule)},
  { path: '**', redirectTo: '/autenticacion/crearcuenta', pathMatch: 'full' },
  { path: '', redirectTo: '/autenticacion/crearcuenta', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
