import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of} from "rxjs/observable/of";
import {Trajets} from './Trajets';
import {catchError, tap} from "rxjs-operators";

@Injectable()
export class TrajetService {

    private ApiUrl="http://localhost:8000/api";
    private _options: RequestOptions = null;

    constructor(private http: HttpClient) {}


    preparHeader() {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            })
        };
        return httpOptions;
    }


    getTrajets(): Observable<Trajets[]> {
        const httpOptions = this.preparHeader();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', 'auth-token');
        this._options = new RequestOptions({headers: headers});
        return this.http.get<Trajets[]>(this.ApiUrl+'/trajet',httpOptions);
    }

}
