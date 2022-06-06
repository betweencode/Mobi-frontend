import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { ACCIONES_MODALARCHIVOS, ObjetoEmitidoModalArchivos } from 'src/app/core/modelos/objetoemitido';

@Component({
  selector: 'app-modal-seleccionar-archivos',
  templateUrl: './modal-seleccionar-archivos.component.html',
  styleUrls: ['./modal-seleccionar-archivos.component.scss']
})
export class ModalSeleccionarArchivosComponent implements OnInit {
  @Output() salida:EventEmitter<ObjetoEmitidoModalArchivos> = new EventEmitter<ObjetoEmitidoModalArchivos>();
  public cantidadfotos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  public elegirFoto:boolean = false;
  public seleccionado = -1;

  constructor() { }

  ngOnInit(): void {
  }

  public cancelar(){
    this.salida.emit({type:ACCIONES_MODALARCHIVOS.CANCELAR});
  }

  public visualizarFotoSeleccionada(item:any){
      this.elegirFoto = true;
      this.seleccionado = item;
  }

  public seleccionaFoto(){
    this.elegirFoto = false;
  }

}
