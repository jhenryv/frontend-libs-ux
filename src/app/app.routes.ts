import { Routes } from "@angular/router";
import { FormControlComponent } from "./modules/custom-control/form-control/form-control.component";

export const APP_ROUTES: Routes = [

    {
        path: 'custom',
        component: FormControlComponent,
        pathMatch: 'full'

    },
]