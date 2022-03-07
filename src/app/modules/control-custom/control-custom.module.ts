import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlComponent } from './componentes/form-control/form-control.component'; 
import { Vuce2GridModule, Vuce2ActionBtnEditModule, Vuce2ActionBtnDeleteModule,  Vuce2ModulesModule, Vuce2MaterialModule, Vuce2AlertIconModule, Vuce2BreadcrumbModule, Vuce2IconBadgeModule, Vuce2CardModule, Vuce2NavModule, Vuce2LinkModule, Vuce2LabelIconModule } from '../../../../projects/vuce2-custom/src/public-api';
import { FormGridComponent } from './componentes/form-grid/form-grid.component';
import { Vuce2CheckBoxModule, Vuce2RadioButtonModule, Vuce2SelectModule, Vuce2InputTextareaModule, Vuce2InputTextModule,Vuce2ButtonModule } from '../../../../projects/vuce2-custom/src/public-api';
import { ToolControlComponent } from './componentes/tool-control/tool-control.component';
import { RouterModule } from '@angular/router';
import { APP_CUSTOM_ROUTES } from './control-custom.routes';

const vuce2Modules = [
  Vuce2MaterialModule,
  Vuce2ModulesModule,
  Vuce2ButtonModule,
  Vuce2RadioButtonModule,
  Vuce2InputTextareaModule,
  Vuce2SelectModule,
  Vuce2CheckBoxModule,
  Vuce2InputTextModule,
  Vuce2AlertIconModule,
  Vuce2BreadcrumbModule,
  Vuce2IconBadgeModule,
  Vuce2LinkModule,
  Vuce2NavModule,
  Vuce2CardModule,
  Vuce2GridModule,
  Vuce2LabelIconModule,
  Vuce2ActionBtnEditModule,
  Vuce2ActionBtnDeleteModule,
];


@NgModule({
  declarations: [
    FormControlComponent,
    FormGridComponent,
    ToolControlComponent     
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(APP_CUSTOM_ROUTES),  
    ...vuce2Modules
  ],
  
  exports: [    
    FormControlComponent,
    FormGridComponent,
    ToolControlComponent   
  ]
  

})
export class ControlCustomModule { }
