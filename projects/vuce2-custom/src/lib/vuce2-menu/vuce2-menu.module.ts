import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2MenuComponent } from './vuce2-menu.component';
import { Vuce2ModulesModule } from "../vuce2-modules";

@NgModule({
    imports: [
        CommonModule,
        Vuce2ModulesModule
    ],
    declarations: [
        Vuce2MenuComponent
    ],
    exports: [
        Vuce2MenuComponent
    ]
})
export class Vuce2MenuModule { }
