import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormValidator } from './form-validator';

@Component({
  selector: 'vuce2-form-error-msg',
  templateUrl: './vuce2-form-error-msg.component.html',
  styleUrls: ['./vuce2-form-error-msg.component.scss']
})
export class Vuce2FormErrorMsgComponent implements OnInit {

  @Input() 
  control: AbstractControl;

  fieldName: string;

  constructor() { }

  ngOnInit(): void {
  }

  get errorMessage() {
    if (this.control) {
      for (const propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) &&
          this.control.touched) {
          this.fieldName = this.getControlName(this.control);
          return FormValidator.getErrorMsg(this.fieldName, propertyName, this.control.errors[propertyName]);
        }
      }
    }
    return null;
  }

  getControlName = (control: AbstractControl) => {
    var controlName = null;
    var parent = control["_parent"];    
    if (parent instanceof FormGroup) {     
      Object.keys(parent.controls).forEach((name) => {      
        if (control === parent.controls[name]) {          
          controlName = name;
        }
      });
    }   
    return controlName;
  }


}
