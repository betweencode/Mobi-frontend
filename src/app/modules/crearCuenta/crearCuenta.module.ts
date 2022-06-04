import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { crearCuentaRoutingModule } from "./crearCuenta-routing.module";
import { CrearcuentaComponent } from './pages/crearcuenta/crearcuenta.component';
import { OtpComponent } from './pages/otp/otp.component';
import { HeaderComponent } from './pages/header/header.component';
import { FormularioCrearcuentaComponent } from './pages/formulario-crearcuenta/formulario-crearcuenta.component';
import { FormularioOtpComponent } from './pages/formulario-otp/formulario-otp.component';

@NgModule({
    declarations:[
    CrearcuentaComponent,
    OtpComponent,
    HeaderComponent,
    FormularioCrearcuentaComponent,
    FormularioOtpComponent
  ],
    imports:[CommonModule,crearCuentaRoutingModule]
})
export class crearCuentaModule{

}