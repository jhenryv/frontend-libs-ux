import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Vuce2InputTextareaComponent } from "./vuce2-input-textarea.component";
import { Vuce2ModulesModule } from "../vuce2-modules";

@NgModule({
    imports:[
        CommonModule,
        Vuce2ModulesModule
    ],
    declarations:[
        Vuce2InputTextareaComponent
    ],
    exports:[
        Vuce2InputTextareaComponent
    ]
})
export class Vuce2InputTextareaModule {}
