import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of} from "rxjs/observable/of";
import { Utilisateur } from "./Utilisateur";
import {ConducteurProfile} from '../ConducteurProfile/ConducteurProfile';





@Injectable()
export class FirstService {

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

    Passager(id:number): Observable<Utilisateur[]> {

        const httpOptions = this.preparHeader();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', 'auth-token');
        this._options = new RequestOptions({headers: headers});
        return this.http.get<Utilisateur[]>(this.ApiUrl+"/user/passager/"+id,httpOptions);
    }

    Conducteur(id:number): Observable<Utilisateur[]> {

        const httpOptions = this.preparHeader();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', 'auth-token');
        this._options = new RequestOptions({headers: headers});
        return this.http.get<Utilisateur[]>(this.ApiUrl+"/user/conducteur/"+id,httpOptions);
    }


    login (utilisateur: Utilisateur): Observable<Utilisateur> {
        const httpOptions = this.preparHeader();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', 'auth-token');
        this._options = new RequestOptions({headers: headers});
        return this.http.post<Utilisateur>(this.ApiUrl+'/user/login', utilisateur,httpOptions);
    }

}
