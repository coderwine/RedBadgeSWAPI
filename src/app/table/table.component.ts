import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../swapi.service';
import {People} from '../people'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  characters=People;

  constructor(private SwapiService: SwapiService) { }

  ngOnInit() {
    this.SwapiService.searchPeople(' ')
    .subscribe((data) => {
      this.characters = data['characters'];
      console.log(data)
    })
  }

}
