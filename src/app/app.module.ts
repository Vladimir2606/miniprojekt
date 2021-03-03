import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import { DataService } from './data.service';
import { appRouterModule } from "./app.routes";
import { ImpressumComponent } from './impressum/impressum.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, appRouterModule ],
  declarations: [ AppComponent, NavbarComponent, ListComponent, ImpressumComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
