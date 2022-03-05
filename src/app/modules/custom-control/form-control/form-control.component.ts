import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISelectItem } from 'projects/vuce2-custom/src/public-api';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  form: FormGroup;
  productos: ISelectItem[];
  dataForm: string;
  
  constructor() { }

  ngOnInit(): void {
    this.getProductos();
    this.crearFormGroup();
    this.dataForm
  }

  crearFormGroup(){
    this.form = new FormGroup({
      direccion: new FormControl('',Validators.required),
      producto: new FormControl('', Validators.required),
    })
  }

  getProductos(){
    this.productos = [
      {
        id: '1',
        text: 'marino'
      },
      {
        id: '2',
        text: 'vagetal'
      },
      {
        id: '3',
        text: 'transgenico'
      }
    ];
  }

  guardar(){
    if(this.form.valid){  
      this.dataForm = JSON.stringify(this.form.getRawValue());
    }

  }

  get direccion(){
    return this.form.controls['direccion'].value;
  }
  get producto(){
    return this.form.controls['producto'].value;
  }

}
