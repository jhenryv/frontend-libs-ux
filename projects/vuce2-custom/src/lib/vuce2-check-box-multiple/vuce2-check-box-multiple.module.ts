import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2CheckBoxMultipleComponent } from './vuce2-check-box-multiple.component';
import { Vuce2ModulesModule } from "../vuce2-modules";


@NgModule({
  declarations: [
    Vuce2CheckBoxMultipleComponent
  ],
  imports: [
    CommonModule,
    Vuce2ModulesModule
  ],
  exports: [
    Vuce2CheckBoxMultipleComponent
  ]
})
export class Vuce2CheckBoxMultipleModule { }
