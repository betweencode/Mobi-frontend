import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ValidacionidentidadComponent } from "./pages/validacionidentidad/validacionidentidad.component";


const rutas:Routes = [{
    path:'',children:[
        {path:'validacionidentidad',component:ValidacionidentidadComponent}
    ]
}];

@NgModule({
    imports:[RouterModule.forChild(rutas)]
})
export class validacionIdentidadRoutingModule{

}