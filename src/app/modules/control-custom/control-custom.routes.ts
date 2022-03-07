import { Routes } from "@angular/router";
import { FormControlComponent } from "./componentes/form-control/form-control.component";
import { FormGridComponent } from "./componentes/form-grid/form-grid.component";
import { ToolControlComponent } from "./componentes/tool-control/tool-control.component";

export const APP_CUSTOM_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'controles',
        pathMatch: 'full'
    },
    {
        path: 'controles',
        component: FormControlComponent,
        pathMatch: 'full'
    },
    {
        path: 'tools',
        component: ToolControlComponent,
        pathMatch: 'full'
    },
    {
        path: 'grid',
        component: FormGridComponent,
        pathMatch: 'full'
    }
]
