import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { People } from '../people';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators';

export interface War {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  searchPeople: any;

  wars: War[] = [
    {value: 'people', viewValue: 'People'},
    {value: 'starships', viewValue: 'Ships'},
    {value: 'films', viewValue: 'Films'}
  ];

  constructor(private swapiService: SwapiService) { }

  ngOnInit(){  
  }

  search(type: string, info: string): void {
    this.swapiService.getPeople(type, info).subscribe(data => {
      console.log(data);
      this.searchPeople = data;
      console.log(this.searchPeople.results);
    })
  }
}
