import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISelectItem, RadioButtonControl } from 'projects/vuce2-custom/src/public-api';
import Swal from 'sweetalert2';
import { AlertService } from '../alert.service';
import { FormControlService } from './form-control.service';

@Component({
  selector: 'form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {
  titulo = "Controles de Formulario"
  form: FormGroup;
  dataForm: string;

  productos: ISelectItem[];
  rubros: RadioButtonControl; 

  constructor(
    private alertService: AlertService,
    private service: FormControlService ) { }

  ngOnInit(): void {
    this.productos = this.service.getProductos();
    this.rubros = this.service.getRubros();
  
    this.crearFormGroup();
    this.dataForm
  }

  crearFormGroup(){
    this.form = new FormGroup({
      direccion: new FormControl('',Validators.required),
      producto: new FormControl('', Validators.required),
      rubro: new FormControl('', Validators.required),
      permitido: new FormControl('', ),
      comentario: new FormControl('', Validators.required)
    })
  }

  guardar(){
    if(this.form.valid){  
      this.dataForm = JSON.stringify(this.form.getRawValue());
      Swal.fire({
        title: 'Registro de Formulario',
        text: `Está seguro que desea registrar los datos del formulario`,
        html: this.dataForm,
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: `Si deseo registrar`
      }).then(result => {
        if(result)
          this.alertService.success(`Se registro con exito`);             
      })
    }
  }

  get direccion(){
    return this.form.controls['direccion'];
  }
  get producto(){
    return this.form.controls['producto'];
  }
  get rubro(){
    return this.form.controls['rubro'];
  }
  get permitido(){
    return this.form.controls['permitido'];
  }
  get comentario(){
    return this.form.controls['comentario']
  }
}
