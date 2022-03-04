import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[vuce2GridCellTemplate]'
})
export class Vuce2GridCellTemplateDirective {

    @Input() public vuce2GridCellTemplate: string;

    constructor(public templateRef: TemplateRef<any>) { }
}
