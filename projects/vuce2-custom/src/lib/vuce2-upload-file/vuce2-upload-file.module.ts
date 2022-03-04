import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Vuce2UploadFileComponent } from './vuce2-upload-file.component';
import { Vuce2ModulesModule } from '../vuce2-modules';

@NgModule({
    declarations: [
        Vuce2UploadFileComponent
    ],
    imports: [
        CommonModule,
        Vuce2ModulesModule
    ],
    exports: [
        Vuce2UploadFileComponent
    ]
})
export class Vuce2UploadFileModule {}
