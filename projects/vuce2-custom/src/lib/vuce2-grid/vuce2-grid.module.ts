import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vuce2GridComponent } from './vuce2-grid.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatIconModule } from '@angular/material/icon';
import { Vuce2GridCellTemplateDirective } from './vuce2-grid-cell-template.directive';

@NgModule({
    declarations: [
        Vuce2GridComponent,
        Vuce2GridCellTemplateDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        PaginationModule,
        MatIconModule
    ],
    exports: [
        Vuce2GridComponent,
        Vuce2GridCellTemplateDirective
    ]
})
export class Vuce2GridModule { }
