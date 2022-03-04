import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2CheckBoxComponent } from './vuce2-check-box.component';
import { Vuce2ModulesModule } from "../vuce2-modules";


@NgModule({
  declarations: [
    Vuce2CheckBoxComponent
  ],
  imports: [
    CommonModule,
    Vuce2ModulesModule
  ],
  exports: [
    Vuce2CheckBoxComponent
  ]
})
export class Vuce2CheckBoxModule { }
