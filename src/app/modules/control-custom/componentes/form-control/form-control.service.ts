import { Injectable } from '@angular/core';
import { ISelectItem, RadioButtonControl } from 'projects/vuce2-custom/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor() { }

  getRubros() {
    let rubros: RadioButtonControl = {

      disabled: false,
      name: "rubro",
      etiqueta: "Rubro",
      controlType: "radioButton",
      required: false,
      options: [
        {
          key: "1",
          value: "Exportacion",
          selected: false
        },
        {
          key: "0",
          value: "Importacion",
          selected: false
        }
      ]
    }
    return rubros;
  }

  getProductos(){
    let productos: ISelectItem[] = [
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
    return productos;
  }

 
}
