import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { TableColumn } from "projects/vuce2-custom/src/public-api";

interface IInfo{
    columns: TableColumn[];
    items:any[];
}

@Injectable()
export class FormGridService {
    constructor(private http: HttpClient) { }

    getUsersDataSource(request:any): Observable<any> {
        let url = 'https://jsonplaceholder.typicode.com/users?';
        return this.getDataSource(url, request);
    }

    private getDataSource(url:string, request:any): Observable<any> {
        console.log('request',request);
        let page = request.start > 0 ? (request.start / request.length) + 1 : request.start + 1;
        url += `_page=${page}&_limit=${request.length}&`;
       
        return this.http.get(url, {observe: 'response'}).pipe(
            map(res => {
                let data = res.body;
                let count = res.headers.get('x-total-count');
                return {
                    recordsTotal: count,
                    recordsFiltered: count,
                    data: data
                };
            })
        );
    }
}