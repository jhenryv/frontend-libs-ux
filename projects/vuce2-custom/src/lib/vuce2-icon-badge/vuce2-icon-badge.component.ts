import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'vuce2-icon-badge',
  templateUrl: './vuce2-icon-badge.component.html',
  styleUrls: ['./vuce2-icon-badge.component.scss'],
  providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(
                () => Vuce2IconBadgeComponent
			),
			multi: true
		}
	]
})
export class Vuce2IconBadgeComponent implements ControlValueAccessor {

  @Input() 
  disabled: boolean =false;

  @Input()
  valor: string;

  @Input()
  url: string;

  @Input()
  path_img: string;

  public value: boolean=false;
  public change: any = () => {};
  public touched: any = () => {};

  constructor() {
    this.valor = '';
    this.url = '';
    this.path_img = '';
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
