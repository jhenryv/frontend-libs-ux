import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { RadioButtonControl } from '../models/radio-button-control';

@Component({
  selector: 'vuce2-radio-button',
  templateUrl: './vuce2-radio-button.component.html',
  styleUrls: ['./vuce2-radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => Vuce2RadioButtonComponent
      ),
      multi: true
    }
  ]
})
export class Vuce2RadioButtonComponent implements ControlValueAccessor {

  @Input()
  label: string;

  @Input()
  etiqueta!: string;

  @Input()
  item: RadioButtonControl;

  @Input()
  control: AbstractControl;
  
  disabled: boolean;
  onChanged: any = () => { }
  onTouched: any = () => { }

  constructor() {
    this.label = '';
  }

  writeValue(value: any): void {
    if (value) {
      this.item.options.forEach(x => {
        if (x.key === value)
          x.selected = true;
      })
    }
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

  onChangeValue(event: MatRadioChange) {   
    this.onChanged(event.value);
  }  

}
