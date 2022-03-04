import { Component, forwardRef, Input, } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ICheckValue } from '../interfaces/check-value';

@Component({
  selector: 'vuce2-check-box',
  templateUrl: './vuce2-check-box.component.html',
  styleUrls: ['./vuce2-check-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => Vuce2CheckBoxComponent
      ),
      multi: true
    }
  ]
})
export class Vuce2CheckBoxComponent implements ControlValueAccessor {

  @Input()
  textValue: string;

  @Input()
  control: AbstractControl;

  disabled: boolean;
  onChange: any = () => { }
  onTouched: any = () => { }
  checked: boolean;

  constructor() { }

  public writeValue(valor: any): void {
    if (valor) {
      this.checked = valor;
    }
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

  onChangeValue(event: MatCheckboxChange) {
    this.onChange(event.checked);
  }



}
