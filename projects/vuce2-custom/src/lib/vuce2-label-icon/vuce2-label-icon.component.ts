import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vuce2-label-icon',
  templateUrl: './vuce2-label-icon.component.html',
  styleUrls: ['./vuce2-label-icon.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Vuce2LabelIconComponent),
      multi: true,
    },
  ],
})
export class Vuce2LabelIconComponent implements ControlValueAccessor {
  @Input()
  texto: string;

  @Input()
  path_img: string;

  @Input()
  url: string;

  @Input()
  disabled: boolean = false;

  public value: boolean = false;
  public change: any = () => {};
  public touched: any = () => {};

  constructor() {
    this.texto = '';
    this.path_img = '';
    this.url = '';
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.change = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
