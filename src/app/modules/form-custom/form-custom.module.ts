import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { Vuce2ActionBtnDeleteModule, Vuce2ActionBtnEditModule, Vuce2GridModule, Vuce2ModulesModule } from 'projects/vuce2-custom/src/public-api';

const vuce2Modules = [
  Vuce2ModulesModule,
  Vuce2GridModule,
  Vuce2ActionBtnEditModule,
  Vuce2ActionBtnDeleteModule,
];


@NgModule({
  declarations: [
    FormReactiveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormCustomModule { }
