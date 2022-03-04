import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2SelectComponent } from './vuce2-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Vuce2ModulesModule } from "../vuce2-modules";


@NgModule({
    declarations: [
        Vuce2SelectComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        Vuce2ModulesModule,
     
    ],
    exports: [
        Vuce2SelectComponent
    ]
})
export class Vuce2SelectModule {}
