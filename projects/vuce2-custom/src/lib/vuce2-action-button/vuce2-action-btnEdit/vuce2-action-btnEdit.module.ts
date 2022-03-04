import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2ModulesModule } from "../../vuce2-modules";
import { Vuce2ActionBtnEditComponent } from "./vuce2-action-btnEdit.component";


@NgModule({
    imports:[
        CommonModule,
        Vuce2ModulesModule
    ],
    declarations:[
        Vuce2ActionBtnEditComponent
    ],
    exports:[
        Vuce2ActionBtnEditComponent
    ]
})
export class Vuce2ActionBtnEditModule {}
