import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SwapiService } from '../swapi.service';
import { People } from '../people';

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

  @Output() searchEvent = new EventEmitter();


  wars = People;

  constructor(private swapiService: SwapiService) { }
  
  onSubmit(searchValue: string, e) {
    e.preventDefault()
    this.searchEvent.emit(searchValue)
    console.log(searchValue)
  }

  ngOnInit() {
    this.swapiService.searchPeople('name').subscribe((data) =>{
      console.log(data);
      this.wars = data['wars'];
    }); 
  }
}
