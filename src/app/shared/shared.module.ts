import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SubirarchivosComponent } from './subirarchivos/subirarchivos.component';
import { ModalSeleccionarArchivosComponent } from './modal-seleccionar-archivos/modal-seleccionar-archivos.component';

@NgModule({
    declarations: [
        SubirarchivosComponent,
        ModalSeleccionarArchivosComponent],
    imports:[CommonModule],
    exports:[SubirarchivosComponent]
})
export class SharedModule{}