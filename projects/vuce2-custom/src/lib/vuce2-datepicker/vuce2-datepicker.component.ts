import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'vuce2-datepicker',
    templateUrl: 'vuce2-datepicker.component.html',
    styleUrls: ['./vuce2-datepicker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Vuce2DatepickerComponent),
            multi: true,
        },
    ],
})
export class Vuce2DatepickerComponent implements ControlValueAccessor, OnInit {

    @Input()
    etiqueta: string = '';

    @Input()
    disabled: boolean = false;

    @Input()
    fecha:string = '';

    @Input()
    control: AbstractControl;

    public value: any;
    public onChange: any = () => {};
    public onTouched: any = () => {};


    constructor(){}

    ngOnInit(){
        this.value = this.fecha;
    }

    writeValue(obj: any): void {
        this.fecha = obj;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    onChangeValue(event: Event): void {     
        const value: any =
            (<HTMLInputElement>event.target).value;
        this.onChange(value);
    }
}
