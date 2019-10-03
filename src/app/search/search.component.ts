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

    public _wars = [];

  // onSubmit = () => {
    
  //   this.swapiService.searchPeople().subscribe((data) =>{
  //     // console.log(data);
  //     this._wars = data['results.films'];
  //     console.log(this._wars);
      
  //   });
  // }

  onSubmit = (searchBox) => {
    
    this.swapiService.searchPeople(searchBox).subscribe(data => this.people$ =(data['results']))
    this.data = this.people$
    
  }
  people$;
  data;
  // people$: Observable<People[]>;

  constructor(private swapiService: SwapiService) { }
  
  // search(term: string): void {
  //   this.searchTerm.next(term);
  // }

  ngOnInit(): void {
      // this.people$ = this.searchTerm.pipe(
      // distinctUntilChanged(),
      // switchMap((term: string) => this.swapiService.searchPeople(term))
    // )
  }
}
