import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { CrearcuentaComponent } from "./pages/crearcuenta/crearcuenta.component";
import { OtpComponent } from "./pages/otp/otp.component";

const rutas: Routes = [
    {
        path: '', children: [
            {path: 'crearcuenta', component: CrearcuentaComponent}, 
            {path: 'validacionotp', component: OtpComponent }]
    }
];
@NgModule({
    imports: [RouterModule.forChild(rutas)],
    exports: [RouterModule]
})
export class crearCuentaRoutingModule { }