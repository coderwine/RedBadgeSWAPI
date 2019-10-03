import { Component, OnInit } from '@angular/core';
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

  wars = People;

  constructor(private swapiService: SwapiService) { }

  ngOnInit() {
    this.swapiService.getPeople().subscribe((data) =>{
      console.log(data);
      this.wars = data['wars'];
    });
  }

}
