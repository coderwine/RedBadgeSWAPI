import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CharactersComponent } from './characters/characters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { AppMaterialModule } from './app.material.module';
import { DropdownComponent } from './dropdown/dropdown.component';

=======
import { DrawerComponent } from './drawer/drawer.component';
>>>>>>> 4072dbefc85a801b956e186edcb289dcff15a294

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
    CharactersComponent, 
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppMaterialModule
=======
    CharactersComponent,
    DrawerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
>>>>>>> 4072dbefc85a801b956e186edcb289dcff15a294
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
