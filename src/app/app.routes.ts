import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/control-custom/control-custom.module')
            .then(m => m.ControlCustomModule)
    }

]