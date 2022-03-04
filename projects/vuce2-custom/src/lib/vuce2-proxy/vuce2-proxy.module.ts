import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Vuce2ModulesModule } from "../vuce2-modules";
import { PluginProxyComponent } from './plugin-proxy.component';

@NgModule({
    imports: [
        CommonModule,
        Vuce2ModulesModule
    ],
    declarations: [
        PluginProxyComponent
    ],
    exports: [
        PluginProxyComponent
    ]
})
export class Vuce2ProxyModule { }
