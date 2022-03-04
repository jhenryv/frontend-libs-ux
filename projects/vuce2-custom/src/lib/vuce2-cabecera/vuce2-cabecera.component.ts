import { Component, Input } from "@angular/core";

@Component({
    selector: 'vuce2-cabecera',
    templateUrl: './vuce2-cabecera.component.html',
    styleUrls: ['./vuce2-cabecera.component.scss']
})
export class Vuce2CabeceraComponent {

    @Input()
    title:string='';

    @Input()
    subtitle:string='';

}
