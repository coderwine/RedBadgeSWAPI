import { Component, OnInit, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { FloatLabelType } from '@angular/material/core';

export interface War {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  wars: War[] = [
    {value: 'people', viewValue: 'People'},
    {value: 'starships', viewValue: 'Ships'},
    {value: 'films', viewValue: 'Films'}
  ];
  constructor() { }

  ngOnInit() {
 
  }  
} 


