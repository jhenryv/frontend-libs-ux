import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CardValue } from '../models/card-value';

@Component({
  selector: 'vuce2-card',
  templateUrl: './vuce2-card.component.html',
  styleUrls: ['./vuce2-card.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Vuce2CardComponent),
      multi: true,
    },
  ],
})
export class Vuce2CardComponent implements ControlValueAccessor {
  @Input()
  card: CardValue = {};
  public value: boolean = false;
  public change: any = () => {};
  public touched: any = () => {};

  constructor() {
   
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
}
