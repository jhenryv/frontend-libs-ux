import { Component, forwardRef, Input } from "@angular/core";
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'vuce2-input-text',
  templateUrl: './vuce2-input-text.component.html',
  styleUrls: ['./vuce2-input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => Vuce2InputTextComponent
      ),
      multi: true
    }
  ]
})
export class Vuce2InputTextComponent implements ControlValueAccessor {

  @Input()
  etiqueta: string; 

  @Input()
  placeholder: string;

  @Input()
  texto_alternativo: string;

  @Input()
  icono: string;

  @Input()
  control: AbstractControl;

  value: string = '';
  disabled: boolean = false;
  onChanged: any = () => { }
  onTouched: any = () => { }

  constructor() {
    this.placeholder = '';
    this.texto_alternativo = '';
    this.icono = '';
    this.etiqueta = '';  
    
  }

  public writeValue(value: string): void {
    if (value) {
      this.value = value;
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

  onChangeValue(event: Event): void {
    const value: string =
      (<HTMLInputElement>event.target).value;
    this.onChanged(value);
  }

}
