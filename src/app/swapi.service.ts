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

    private swapiURL = 'https://swapi.co/api/people'

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'Application/json'})
    };

    constructor(
        private http: HttpClient,
        private messageService: MessageService) {} 
    
    // People from API
    getPeople (): Observable<People[]> {
        return this.http.get<People[]>(this.swapiURL)
        .pipe(
            tap(_=> this.log('fetched Forced')),
            catchError(this.handleError<People[]>('Wars in Stars', []))
        );
    }

    // GET by ID
    getPerson<Data>(id:number): Observable<People> {
        const url = `${this.swapiURL}/?id=${id}`;
        return this.http.get<People[]>(url)
        .pipe(
            map(someJedi => someJedi[0]),
            tap(h => {
                const outcome = h ? `fetched` : `not what you were looking for`;
                this.log(`${outcome} person id=${id}`);
            }),
            catchError(this.handleError<People>(`getPerson id=${id}`))
        );
    }

    // GET people w/ Search Term
    searchPeople(term: string): Observable<People[]> {
        if(!term.trim()) {
            return of ([]);
        }
        return this.http.get<People[]>(`${this.swapiURL}/?name=$${term}`).pipe(
            tap(_=> this.log(`Found the some possible Rebels matching "${term}"`)),
            catchError(this.handleError<People[]>('searchPeople', []))
        );
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    private log(message:string) {
        this.messageService.add(`Looking for?... ${message}`);
    }

}