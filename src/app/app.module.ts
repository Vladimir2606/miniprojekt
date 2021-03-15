import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ListComponent } from "./list/list.component";
import { DataService } from "./data.service";
import { appRouterModule } from "./app.routes";
import { ImpressumComponent } from "./impressum/impressum.component";
import { FussballComponent } from "./fussball/fussball.component";
import { BasketballComponent } from './basketball/basketball.component';
import { HandballComponent } from './handball/handball.component';
import { VolleyballComponent } from './volleyball/volleyball.component';
import { TennisComponent } from './tennis/tennis.component';
import { FootballComponent } from './football/football.component';

@NgModule({
  imports: [BrowserModule, FormsModule, appRouterModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent,
    ImpressumComponent,
    FussballComponent,
    BasketballComponent,
    HandballComponent,
    VolleyballComponent,
    TennisComponent,
    FootballComponent
  ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
