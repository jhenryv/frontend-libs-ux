import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2DatepickerComponent } from './vuce2-datepicker.component';
import { Vuce2ModulesModule } from "../vuce2-modules";

@NgModule({
  declarations: [
    Vuce2DatepickerComponent
  ],
  imports: [
    CommonModule,
    Vuce2ModulesModule  
  ],
  exports: [
    Vuce2DatepickerComponent
  ]
})
export class Vuce2DatepickerModule { }
