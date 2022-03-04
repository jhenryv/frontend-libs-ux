import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'vuce2-action-btnEdit',
  templateUrl: './vuce2-action-btnEdit.component.html',
  styleUrls: ['./vuce2-action-btnEdit.component.scss'],
  providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(
                () => Vuce2ActionBtnEditComponent
			),
			multi: true
		}
	]
})
export class Vuce2ActionBtnEditComponent implements ControlValueAccessor{

  @Input()
  disabled: boolean;

  @Input()
  backgroundColor:string;

  @Input()
  color:string;

  @Input()
  texto:string;

  public value!: string;
  onChange: any = () => { }
  onTouched: any = () => { }


  constructor() {
    this.backgroundColor=this.backgroundColor??'#007BFF';
    this.color=this.color??'#FFFFFF';
    this.texto='';
  }
  public writeValue( value: string ): void {
		this.texto = value;
	}
  registerOnChange( fn: any ): void {
		this.onChange = fn;
	}
  registerOnTouched( fn: any ): void {
		this.onTouched = fn;
	}
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
 

}
