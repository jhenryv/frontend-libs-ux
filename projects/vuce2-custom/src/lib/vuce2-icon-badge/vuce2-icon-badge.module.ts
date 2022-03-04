import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2IconBadgeComponent } from './vuce2-icon-badge.component';
import { Vuce2ModulesModule } from "../vuce2-modules";

@NgModule({
  declarations: [
    Vuce2IconBadgeComponent
  ],
  imports: [
    CommonModule,
    Vuce2ModulesModule
  ],
  exports: [
    Vuce2IconBadgeComponent
  ]
})
export class Vuce2IconBadgeModule { }
