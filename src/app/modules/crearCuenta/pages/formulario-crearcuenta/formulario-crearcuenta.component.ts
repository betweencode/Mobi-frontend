import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-crearcuenta',
  templateUrl: './formulario-crearcuenta.component.html',
  styleUrls: ['./formulario-crearcuenta.component.scss']
})
export class FormularioCrearcuentaComponent implements OnInit {

  public formGroup!:FormGroup;
  public verPassword:boolean = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.createForm();
  }

  private createForm():FormGroup{
    return this.fb.group({
      correo:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
      celular:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      terminos:[false,[Validators.required,Validators.requiredTrue]]
    });
  }

  public onSubmit(){
    if(this.formGroup.invalid){
        Object.values(this.formGroup.controls).forEach(control=>{
          control.markAllAsTouched();
        });
        return;
    }
    this.guardar();
  }

  private guardar(){
    console.log("guada datos");
  }

  get f():any{
    
    return  this.formGroup.controls;
  }

  public vacio(parametro:any):boolean{
    return Boolean(parametro)
  }

}
