import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2ModulesModule } from "../vuce2-modules";
import { Vuce2ButtonComponent } from "./vuce2-button.component";


@NgModule({
    imports:[
        CommonModule, 
        Vuce2ModulesModule
    ],
    declarations:[
        Vuce2ButtonComponent
    ],
    exports:[
        Vuce2ButtonComponent
    ]
})
export class Vuce2ButtonModule {}
