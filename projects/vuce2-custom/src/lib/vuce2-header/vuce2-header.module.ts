import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2HeaderComponent } from './vuce2-header.component';
import { Vuce2MaterialModule } from '../vuce2-material';


@NgModule({
  imports: [
    CommonModule,
    Vuce2MaterialModule
  ],
  declarations:[
    Vuce2HeaderComponent
  ],
  exports: [
    Vuce2HeaderComponent
  ]
})
export class Vuce2HeaderModule {}
