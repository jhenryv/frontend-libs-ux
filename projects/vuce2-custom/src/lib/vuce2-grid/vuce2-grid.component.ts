import { Component, ContentChildren, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, QueryList, SimpleChanges, TemplateRef } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { fromEvent, Observable, Subject, Subscription } from "rxjs";
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Vuce2GridCellTemplateDirective } from "./vuce2-grid-cell-template.directive";
import { DatasourceOrder, DatasourceParameters, DatasourceResult, TableColumn, TableDataSource, TableOptions, TablePaging } from "./vuce2-grid.interface";
import { Vuce2GridLocalDataSource } from "./vuce2-grid.localDataSource";
import { ColumnState, Vuce2GridService } from "./vuce2-grid.service";

@Component({
    selector: 'vuce2-grid',
    templateUrl: './vuce2-grid.component.html',
    styleUrls: ['./vuce2-grid.component.scss'],
    providers: [Vuce2GridService]
})
export class Vuce2GridComponent implements OnChanges, OnDestroy, OnInit {

    private subscription: Subscription;
    //private fullTextFilterValueChanged: Subject<string> = new Subject<string>();

    processing: boolean = false;
    @Input() options: TableOptions = null;
    @Input() rows: Array<any> = []; //| TableDataSource = [];
    @Input() datasource: TableDataSource | Array<any> = null;
    @Input() columns: Array<TableColumn> = [];
    @Input() paging: TablePaging = null;
    @ContentChildren(Vuce2GridCellTemplateDirective) cellTemplates: QueryList<Vuce2GridCellTemplateDirective>;

    @Output() onRefresh: EventEmitter<boolean> = new EventEmitter<boolean>();

    $eventBus: Subscription;

    public constructor(private sanitizer: DomSanitizer, public state: Vuce2GridService) {
        // this.fullTextFilterValueChanged.pipe(
        //     debounceTime(300),
        //     distinctUntilChanged()
        // ).subscribe(filterValue => this.onChangeTable());
    }

    ngOnInit() {
        this.subscription = this.state.stateChanged$.subscribe(() => this.onChangeTable());
        this.$eventBus = fromEvent<CustomEvent>(window, 'app-event-translate-language').subscribe((e) => this.onEventHandler(e));
        ////console.log(this.subscription);
    }

    ngOnChanges(changes: SimpleChanges): void {
        //console.log('changes', changes);
        if (changes.options && changes.options.isFirstChange()) {
            this.state.setOptions(changes.options.currentValue);
        }
        if (changes.paging && changes.paging.isFirstChange()) {
            this.state.setPaging(changes.paging.currentValue);
        }
        if (changes.columns && changes.columns.isFirstChange()) {
            //console.log('entro a ngOnChanges setColumns',changes.columns.currentValue)
            this.state.setColumns(changes.columns.currentValue);
            //console.log(this.state);
        }
        if (changes.datasource && !changes.datasource.isFirstChange()) {
            //console.log('entro a ngOnChanges onChangeTable')
            this.onChangeTable();
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    public sanitize(html: string): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    public onChangeTable(): void {
        if (this.datasource) {
            //console.log('onChangeTable',this.datasource);
            this.processing = true;

            // let orders: Array<DatasourceOrder> = new Array<DatasourceOrder>();
            // this.state.sortStack.forEach((column: ColumnState) => {
            //     let order: DatasourceOrder = {
            //         dir: column.sortOrder,
            //         name: column.def.name
            //     };
            //     orders.push(order);
            // });

            // let filters: Array<DatasourceFilter> = new Array<DatasourceFilter>();
            // this.state.columns.forEach((column: ColumnState) => {
            //     if (column.hasFilter) {
            //         let filter: DatasourceFilter = {
            //             name: column.def.name,
            //             type: column.def.filter.type,
            //             value: column.filterValue
            //         };
            //         filters.push(filter);
            //     }
            // });

            let request: DatasourceParameters = {
                // start: 1,  // BORRAR
                // length: 1,  // BORRAR
                start: (this.state.paging.currentPage - 1) * this.state.paging.itemsPerPage,
                length: this.state.paging.itemsPerPage,
                // filters: filters,
                // orders: orders,
                // fullTextFilter: this.state.fullTextFilter
            };

            let observable: Observable<any> = null;
            if (this.datasource instanceof Array) {
                //console.log('this.datasource instanceof Array ')
                observable = new Vuce2GridLocalDataSource(this.datasource).asObservable(request);
                //console.log(observable)
            } else {
                //console.log('this.datasource else')
                observable = this.datasource(request);
                //console.log(observable);
            }

            observable.subscribe(
                async (result: DatasourceResult) => {
                    //console.log(result);
                    //console.log('observable.subscribe', result.data);
                    //this.columns = result.columns;
                    await this.state.setColumns(this.columns);
                    //console.log('columns',this.columns);
                    this.rows = result.data;
                    //console.log('rows', this.rows);
                    this.state.paging.recordsFiltered = result.recordsFiltered;
                    this.state.paging.recordsTotal = result.recordsTotal;
                },
                error => {
                    //console.log(error);
                },
                () => {
                    this.processing = false;
                }
            );
        }
    }

    // L 268
    public getHtml(row:any, column:TableColumn): string {
        if (column.render) {
            let data: any = this.getData(row, column.name);
            return column.render(data, row);
        }
        return this.getData(row, column.name);
    }

    // L 276
    public getData(row: any, propertyName: string): string {
        ////console.log('getData', row, propertyName);
        // //console.log('getData', propertyName.split('.').reduce((prev: any, curr: string) => prev[curr], row))
        const col = this.columns.find(x=>x.name== propertyName);
        if(col.hidden) return;
        return propertyName.split('.').reduce((prev: any, curr: string) => prev[curr], row);
    }

    // L 291
    getCellTemplate(col: TableColumn, standardTemplate: TemplateRef<any>): TemplateRef<any> {
        // //console.log(col);
        // //console.log(this.cellTemplates);
        let template = this.cellTemplates.filter(p => p.vuce2GridCellTemplate === col.name);
        ////console.log(template);
        if (template.length > 0) {
            return template.map(p => p.templateRef)[0];
        }
        return standardTemplate;
    }

    RefreshEvent(){
        //console.log('lanzo el evento refresh event');
        //this.state.setPaging(this.paging);
        
        this.state.changePaging(1, this.paging.itemsPerRefresh);
        this.onRefresh.emit(true);
    }

    onEventHandler(e: CustomEvent) {
        //console.log('onEventHandler',e);
        if (e.detail) {
            const response = e.detail;
            this.options = {
                ...this.options,
                language : response.locale
            }
            this.state.setOptions(this.options);
            //this.onChangeTable();
        }
    }

}



