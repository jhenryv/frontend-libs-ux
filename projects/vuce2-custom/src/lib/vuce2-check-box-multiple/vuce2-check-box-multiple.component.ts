import { Component, forwardRef, Input, } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ICheckValue } from '../interfaces/check-value';

@Component({
  selector: 'vuce2-check-box-multiple',
  templateUrl: './vuce2-check-box-multiple.component.html',
  styleUrls: ['./vuce2-check-box-multiple.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => Vuce2CheckBoxMultipleComponent
      ),
      multi: true
    }
  ]
})
export class Vuce2CheckBoxMultipleComponent implements ControlValueAccessor {

  @Input()
  etiqueta: string;

  @Input()
  items: ICheckValue[];

  @Input()
  control: AbstractControl;

  disabled: boolean;
  onChange: any = () => { }
  onTouched: any = () => { }

  constructor() {
  }

  public writeValue(valor: any): void {
    if (valor) {
      if (Array.isArray(valor)) {
        valor.forEach(val => {
          this.items.find(item => item.textValue == val).checked = true
        });
      }
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
    this.items.forEach(x => {
      if (x.textValue == event.source.value)
        x.checked = event.checked;
    })
    let itemCheck = [];
    this.items.filter(x => x.checked).forEach(obj => {
      itemCheck.push(obj.textValue)
    });
    this.onChange(itemCheck);
  }

}
