import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { SORT_ORDER, TableColumn, TableOptions, TablePaging } from "./vuce2-grid.interface";
import { Languages } from "./vuce2-grid.languages";

export interface PagingState {
    currentPage:number;
    itemsPerPage: number;
    recordsTotal: number; 
    recordsFiltered: number; 
}

export interface ColumnState {
    //filterValue: any;
    // sortOrder : SORT_ORDER;
    def: TableColumn;
    // hasSort: boolean;
    // hasFilter: boolean;
}

@Injectable()
export class Vuce2GridService {
    private stateChangedSource: BehaviorSubject<Vuce2GridService> = new BehaviorSubject<Vuce2GridService>(this);


    stateChanged$: Observable<Vuce2GridService>;
    //showFilterRow: boolean = false;
    //orderMulti: boolean = true;
    columns: ColumnState[];
    paging: PagingState;
    //sortStack: ColumnState[] = [];
    fullTextFilter: string;
    language: any = null;
    showRefresh:boolean;

    constructor() {
        this.stateChanged$ = this.stateChangedSource.asObservable();
    }

    // 44
    public setOptions(options: TableOptions): void {
        //this.orderMulti = !!options.orderMulti ? options.orderMulti : true;
        this.language = typeof options.language === "string" ? Languages[options.language] : options.language;
        //console.log('options.showRefresh >>>', options.showRefresh);
        if(options.showRefresh){
            this.showRefresh = options.showRefresh==true?true:false;
        }else{
            this.showRefresh = options.showRefresh==false?false:true;
        }
    }


    // L 49
    public setColumns(columns: Array<TableColumn>) {
        return new Promise<void>(
            (resolve)=>{ 
                console.log('columns', columns);
                const columnsF = columns.filter(x=>x.hidden==(false || undefined));
                console.log('columns hidden', columnsF);
                this.columns = columnsF.map(c => {
                    // if (!!c.filter) {
                    //     this.showFilterRow = true;
                    // }
        
                    let column: ColumnState = {
                        //filterValue: null,
                        // sortOrder: c.defaultSortOrder,
                        def: c,
                        //hasSort: c.sort,
                        //hasFilter: !!c.filter
                    };
        
                    // if (!!column.sortOrder) {
                    //     this.sortStack.push(column);
                    // }
        
                    return column;
                });
            resolve();
        }); 
        
    }


    // L 71
    public setPaging(paging: TablePaging): void {
        this.paging = {
            currentPage: 1,
            itemsPerPage: paging.itemsPerPage,
            recordsTotal: 0,
            recordsFiltered: 0
        };
    }

    public changePaging(page: number, itemsPerPage:any){
        console.log('changePaging');
        console.log(page,itemsPerPage);
        this.paging.currentPage = page;
        this.paging.itemsPerPage = Number.parseInt(itemsPerPage);
        this.notify();
    }

    public notify () : void {
        this.stateChangedSource.next(this);
    }




}
