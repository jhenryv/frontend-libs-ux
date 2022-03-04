import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2ModulesModule } from "../../vuce2-modules";

import { Vuce2ActionBtnDeleteComponent } from "./vuce2-action-btnDelete.component";


@NgModule({
    imports:[
        CommonModule,
        Vuce2ModulesModule
    ],
    declarations:[
        Vuce2ActionBtnDeleteComponent
    ],
    exports:[
        Vuce2ActionBtnDeleteComponent
    ]
})
export class Vuce2ActionBtnDeleteModule {}
