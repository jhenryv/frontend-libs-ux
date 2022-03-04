import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2InputTextComponent } from "./vuce2-input-text.component";
import { Vuce2ModulesModule } from "../vuce2-modules";

@NgModule({
    imports:[
        CommonModule,
        Vuce2ModulesModule,
    ],
    declarations:[
        Vuce2InputTextComponent
    ],
    exports:[
        Vuce2InputTextComponent
    ]
})
export class Vuce2InputTextModule {}
