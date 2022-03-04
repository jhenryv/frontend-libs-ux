import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2RadioButtonComponent } from './vuce2-radio-button.component';
import { Vuce2ModulesModule } from "../vuce2-modules";

@NgModule({
  declarations: [
    Vuce2RadioButtonComponent
  ],
  imports: [
    CommonModule,
    Vuce2ModulesModule  
  ],
  exports:[
    Vuce2RadioButtonComponent
  ]
})
export class Vuce2RadioButtonModule { }
