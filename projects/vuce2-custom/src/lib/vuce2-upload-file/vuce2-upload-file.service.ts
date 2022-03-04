import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class Vuce2UploadFileService {

    constructor(private http: HttpClient) { }

    addFile(url: string, idUser: string, profileImage: File): Observable<any> {
        var formData: any = new FormData();
        formData.append("file", profileImage);

        return this.http.post(`${url}?usuarioCreacion=${idUser}`, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(
            catchError(this.errorMgmt)
        )
    }

    errorMgmt(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }


}
