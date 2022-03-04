import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IBreadCrumb } from '../interfaces/breadcrumb';

@Component({
  selector: 'vuce2-breadcrumb',
  templateUrl: './vuce2-breadcrumb.component.html',
  styleUrls: ['./vuce2-breadcrumb.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Vuce2BreadcrumbComponent),
      multi: true,
    },
  ],
})
export class Vuce2BreadcrumbComponent implements ControlValueAccessor {
  public value: boolean = false;
  public change: any = () => {};
  public touched: any = () => {};

  @Input()
  items: IBreadCrumb[];

  constructor() {
    this.items = [];
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

  onclick(item: IBreadCrumb): void {
    this.items.forEach((x) => {
      if (item.id == x.id) item.selected = true;
      else x.selected = false;
    });
  }
}
