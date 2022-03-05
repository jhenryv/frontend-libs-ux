import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './form-control/form-control.component'; 
import {  Vuce2InputTextModule,Vuce2ButtonModule, Vuce2ModulesModule, Vuce2SelectModule } from 'projects/vuce2-custom/src/public-api';
import { FormGridComponent } from './form-grid/form-grid.component';

const vuce2Modules = [
  Vuce2ModulesModule,
  Vuce2ButtonModule,
  Vuce2SelectModule,
  Vuce2InputTextModule
];


@NgModule({
  declarations: [
    FormControlComponent,
    FormGridComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...vuce2Modules
  ]

})
export class CustomControlModule { }
