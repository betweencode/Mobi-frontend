import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validacionidentidad',
  templateUrl: './validacionidentidad.component.html',
  styleUrls: ['./validacionidentidad.component.scss']
})
export class ValidacionidentidadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public recibirEvento(obj:any){
      switch(obj.type){
          case "ine":
            break;
          case "reverso":
            break;
          case "foto":
            break;
          default:
            console.log("Hubo un error");
            break;
      }
  }

}
