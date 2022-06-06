import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ACCIONES_MODALARCHIVOS, ObjetoEmitidoModalArchivos } from 'src/app/core/modelos/objetoemitido';

@Component({
  selector: 'app-subirarchivos',
  templateUrl: './subirarchivos.component.html',
  styleUrls: ['./subirarchivos.component.scss']
})
export class SubirarchivosComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    let tamanio = event.target.innerWidth;
    this.isMobile = tamanio < 570;
  }
  @Input() public texto!: String;


  public isMobile: boolean = false;
  public activo:boolean = false;
  public verModal:boolean = false;
  public cargando:boolean = false;
  public subidaCorrecta:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 570;
  }

  public abrirVentana(opcion:string = ""){
    if((this.cargando))return;
    this.activo = !this.activo
    if(this.activo && !this.isMobile){
      this.abrirArchivos();
    }else{
       this.abrirModal(opcion);
    }
  }


  private abrirModal(opcion:string){
      switch(opcion){
          case "ventanamodal":
             this.verModal = true;
            break;
           default:
             break;
      }
  }

  private abrirArchivos(){

  }

  public enviadoPorModal(obj:ObjetoEmitidoModalArchivos){
    this.activo = false;
    this.verModal = false;
      switch(obj.type){
          case ACCIONES_MODALARCHIVOS.CANCELAR:
              console.log("Se cancela");
            break;
          case ACCIONES_MODALARCHIVOS.SUBIRARCHIVO:
            this.cargando = true;
            setTimeout(() => {
                this.cargando = false;
                this.subidaCorrecta = true;
            }, 2000);
            break;
      }
  }

}
