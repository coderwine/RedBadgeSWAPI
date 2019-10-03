import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { People } from './people';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root'
})

export class SwapiService {

    private swapiURL = 'https://swapi.co/api'

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'Application/json'})
    };

    constructor(
        private http: HttpClient
    ) {}
    
    getPeople(type: string, info: string): Observable<People[]> {
        return this.http.get<People[]>(`${this.swapiURL}/${type}/?search=${info}`);
    }
}