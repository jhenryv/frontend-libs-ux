import { Component, Input } from "@angular/core";
import { Observable } from "rxjs";
import { DatasourceParameters, DatasourceResult, TableColumn, TableDataSource, TableOptions, TablePaging } from "projects/vuce2-custom/src/public-api";
import { FormGridService } from "./form-grid.service";

@Component({
    selector: 'form-grid',
    templateUrl: './form-grid.component.html',
    styleUrls:['./form-grid.component.scss'],
    providers:[ FormGridService ]
})
export class FormGridComponent {

    @Input()
    lang!:string;

    constructor(private service: FormGridService){ }

    public options: TableOptions = {      
        className: ['table-striped'],
        language: this.lang?this.lang:"es"        
    };

    public paging: TablePaging = {
        itemsPerPage: 10,
        itemsPerPageOptions: [5, 10, 25, 50, 100],
        itemsPerRefresh: 10,
        maxSize: 5,
        showPaging: true
    }

    public datasource: TableDataSource = (request: DatasourceParameters): Observable<DatasourceResult> => {
        console.log('request',request);      
        return this.service.getUsersDataSource(request);
    }

    public columns: TableColumn[] = [
        { 
            title: 'Name', 
            name: 'name', 

        },
        { 
            title: 'Username', 
            name: 'username', 

        },
        { 
            title: 'Email', 
            name: 'email', 
            hidden: true,
        },
        { 
            title: 'Estado', 
            name: 'estado', 
        },
        {           
            title: '', 
            name: 'btnEdit',
            width: "10px"
        },
        { 
           
            title: '', 
            name: 'btnDelete',
            width: "10px"
        }
    ];

    handlerEdit(row: any) {
        alert("EDIT row: \n\n" + JSON.stringify(row));
    }

    handlerDelete(row: any) {
        alert("DELETE row: \n\n" + JSON.stringify(row));
    }

    handlerRefresh(e){
        if(e){
            console.log('handlerRefresh',e);
          
        }
    }

    onLang(locale:string){
        const busEvent = new CustomEvent('app-event-translate-language', {
            bubbles: true,           
            detail: { locale: locale }
        });        
        dispatchEvent(busEvent);
    }

}