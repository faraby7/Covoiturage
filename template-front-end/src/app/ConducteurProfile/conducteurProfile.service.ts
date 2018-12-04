import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of} from "rxjs/observable/of";
import {Trajets} from '../trajet/Trajets';
import {ConducteurProfile} from './ConducteurProfile';






@Injectable()
export class ConducteurProfileService {

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


    getConducteur(id:number): Observable<ConducteurProfile[]> {
        const httpOptions = this.preparHeader();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', 'auth-token');
        this._options = new RequestOptions({headers: headers});
        return this.http.get<ConducteurProfile[]>(this.ApiUrl+"/conducteur/"+id,httpOptions);
    }



    getConducteurTrajet(id:number): Observable<ConducteurProfile[]> {
        const httpOptions = this.preparHeader();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', 'auth-token');
        this._options = new RequestOptions({headers: headers});
        return this.http.get<ConducteurProfile[]>(this.ApiUrl+"/trajet/conducteur/"+id,httpOptions);
    }



    getConducteurVehicule(id:number): Observable<ConducteurProfile[]> {
        const httpOptions = this.preparHeader();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', 'auth-token');
        this._options = new RequestOptions({headers: headers});
        return this.http.get<ConducteurProfile[]>(this.ApiUrl+"/vehicule/conducteur/"+id,httpOptions);
    }



}
