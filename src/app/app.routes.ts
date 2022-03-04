import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [

    {
        path: 'form',
        loadChildren: ()=> import('./modules/form-custom/form-custom.module')
            .then(m=>m.FormCustomModule)
    },
]