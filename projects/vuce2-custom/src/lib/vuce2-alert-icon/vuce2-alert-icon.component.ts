import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vuce2-alert-icon',
  templateUrl: './vuce2-alert-icon.component.html',
  styleUrls: ['./vuce2-alert-icon.component.scss'],
  providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(
                () => Vuce2AlertIconComponent
			),
			multi: true
		}
	]
})
export class Vuce2AlertIconComponent implements ControlValueAccessor{

  @Input()
  texto: string;

  @Input()
  icono: string;

  public value: boolean=false;
  public change: any = () => {};
  public touched: any = () => {};

  constructor() { 
    this.texto = '';
    this.icono = '';
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
