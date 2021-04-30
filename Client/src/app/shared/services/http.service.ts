import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import News from '../models/news';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    URL_ADDRESS = 'http://localhost:3001/api/news/';

    constructor(private http: HttpClient) {

    }

    // GET
    getNews(): Observable<any> {
        return this.http.get<Array<any>>(this.URL_ADDRESS)
        // .pipe(catchError(this.handleError));
    }

    // GET/id
    getNewsById(id: number): Observable<any> {
        return this.http.get<any>(`${this.URL_ADDRESS}/${id}`)
        // .pipe(catchError(this.handleError));
    }

    // private handleError(error: HttpErrorResponse) {
    //     if (error.error instanceof ErrorEvent) {
    //         // A client-side or network error occurred. Handle it accordingly.
    //         console.error('An error occurred:', error.error.message);
    //     } else {
    //         // The backend returned an unsuccessful response code.
    //         // The response body may contain clues as to what went wrong.
    //         console.error(
    //             `Backend returned code ${error.status}, ` +
    //             `body was: ${error.error}`);
    //     }
    //     // Return an observable with a user-facing error message.
    //     return throwError(
    //         'Something bad happened; please try again later.');
    // }
}