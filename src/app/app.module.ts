import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CharactersComponent } from './characters/characters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app.material.module';
import { DropdownComponent } from './dropdown/dropdown.component';


import { DrawerComponent } from './drawer/drawer.component';


import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { MessagesComponent } from './messages/messages.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

    CharactersComponent, 
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppMaterialModule

    CharactersComponent,
    SearchComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule

    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
