import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2TabComponent } from './vuce2-tab.component';
import { Vuce2ModulesModule } from "../vuce2-modules";

@NgModule({
    imports: [
        CommonModule,
        Vuce2ModulesModule
    ],
    declarations: [
        Vuce2TabComponent
    ],
    exports: [
        Vuce2TabComponent
    ]
})
export class Vuce2TabModule { }
