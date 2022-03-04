import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Vuce2MaterialModule } from '../vuce2-material';
import { Vuce2FormErrorMsgModule } from '../vuce2-form-error-msg';


const sharedModules = [
  CommonModule,
  Vuce2MaterialModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  Vuce2FormErrorMsgModule
];

@NgModule({
  declarations: [],
  imports: [
    ...sharedModules
  ],
  exports: [
    ...sharedModules
  ]
})
export class Vuce2ModulesModule {}
