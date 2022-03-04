import { Component, forwardRef, Input, OnInit } from "@angular/core";
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from "@angular/forms";
import { ISelectItem } from "../interfaces/select-item";

@Component({
    selector: 'vuce2-select',
    templateUrl: './vuce2-select.component.html',
    styleUrls: ['./vuce2-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(
                () => Vuce2SelectComponent
            ),
            multi: true
        }
    ]
})
export class Vuce2SelectComponent implements ControlValueAccessor{

    @Input()
    etiqueta: string = '';

    @Input()
    items: ISelectItem[] = [];

    @Input()
    texto_alternativo: string = '';

    @Input()
    control: AbstractControl;

    selected: string;
    disabled: boolean;
    onChanged: any = () => { }
    onTouched: any = () => { }

    constructor() {     
    }
   
    writeValue(value: any): void {      
            this.selected = value;       
    }

    registerOnChange(fn: any): void {
        this.onChanged = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    onChangeValue(event: any) {
        this.onChanged(event.target.value);
    }


}
