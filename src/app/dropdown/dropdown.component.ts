import { Component, OnInit, Input } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { FloatLabelType } from '@angular/material/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

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
    {value: 'people-0', viewValue: 'People'},
    {value: 'ships-1', viewValue: 'Ships'},
    {value: 'films-2', viewValue: 'Films'}
  ];

  // clickMessage = "";

  // onClickMe() {
  //   this.clickMessage = "swapiURL";
  // }
  // constructor() { }

  ngOnInit() {
    
  }  
} 





