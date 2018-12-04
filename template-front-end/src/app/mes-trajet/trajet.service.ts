import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of} from "rxjs/observable/of";
import {Trajets} from './Trajets';
import {ConducteurProfile} from '../ConducteurProfile/ConducteurProfile';
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


    getConducteurTrajet(id:number): Observable<Trajets[]> {
        const httpOptions = this.preparHeader();
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', 'auth-token');
        this._options = new RequestOptions({headers: headers});
        return this.http.get<Trajets[]>(this.ApiUrl+"/trajet/conducteur/"+id,httpOptions);
    }


    addTrajet (trajet: Trajets): Observable<Trajets> {
        const httpOptions = this.preparHeader();
        return this.http.post<Trajets>(this.ApiUrl+'/trajet/add', trajet,httpOptions);
    }

    deleteTrajet(trajet: Trajets | number) : Observable<Trajets> {
        const httpOptions = this.preparHeader();
        const id = typeof trajet === 'number' ? trajet : trajet.id;
        const url = `${this.ApiUrl}/trajet/del/${id}`;
        return this.http.delete<Trajets>(url,httpOptions);
    }

    Acceptation(num:number) : Observable<Trajets> {
        const httpOptions = this.preparHeader();
        const url = `${this.ApiUrl}/reservation/acceptation/${num}`;
        return this.http.delete<Trajets>(url,httpOptions);
    }

    Refus(num:number) : Observable<Trajets> {
        const httpOptions = this.preparHeader();
        const url = `${this.ApiUrl}/reservation/refus/${num}`;
        return this.http.delete<Trajets>(url,httpOptions);
    }

    closeTrajet(trajet: Trajets | number) : Observable<Trajets> {
        const httpOptions = this.preparHeader();
        const id = typeof trajet === 'number' ? trajet : trajet.id;
        const url = `${this.ApiUrl}/trajet/close/${id}`;
        return this.http.delete<Trajets>(url,httpOptions);
    }

    getLignesReservation (id:number): Observable<Trajets[]> {
        const httpOptions = this.preparHeader();
        const url = `${this.ApiUrl}/reservation/${id}`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', 'auth-token');
        this._options = new RequestOptions({headers: headers});
        return this.http.get<Trajets[]>(url,httpOptions);
    }

    getLignesHistorique(id:number): Observable<Trajets[]> {
        const httpOptions = this.preparHeader();
        const url = `${this.ApiUrl}/reservation/historique/${id}`;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', 'auth-token');
        this._options = new RequestOptions({headers: headers});
        return this.http.get<Trajets[]>(url,httpOptions);
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            // console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }


    private log(message: string) {
        console.log(message);
    }
}
