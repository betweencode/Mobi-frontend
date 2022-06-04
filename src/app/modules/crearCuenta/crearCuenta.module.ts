import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { crearCuentaRoutingModule } from "./crearCuenta-routing.module";
import { CrearcuentaComponent } from './pages/crearcuenta/crearcuenta.component';
import { OtpComponent } from './pages/otp/otp.component';

@NgModule({
    declarations:[
    CrearcuentaComponent,
    OtpComponent
  ],
    imports:[CommonModule,crearCuentaRoutingModule]
})
export class crearCuentaModule{

}