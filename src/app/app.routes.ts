import { RouterModule, Routes } from "@angular/router";
import { BasketballComponent } from "./basketball/basketball.component";
import { FootballComponent } from "./football/football.component";
import { FussballComponent } from "./fussball/fussball.component";
import { HandballComponent } from "./handball/handball.component";
import { ImpressumComponent } from "./impressum/impressum.component";
import { ListComponent } from "./list/list.component";
import { TennisComponent } from "./tennis/tennis.component";
import { VolleyballComponent } from "./volleyball/volleyball.component";

const routes: Routes = [
  {
    path: "home",
    component: ListComponent
  },
  {
    path: "impressum",
    component: ImpressumComponent
  },
  {
    path: "fussball",
    component: FussballComponent
  },
  {
    path: "basketball",
    component: BasketballComponent
  },
  {
    path: "handball",
    component: HandballComponent
  },
  {
    path: "volleyball",
    component: VolleyballComponent
  },
  {
    path: "tennis",
    component: TennisComponent
  },
  {
    path: "football",
    component: FootballComponent
  },
  {
    path: "",
    redirectTo: "overview",
    pathMatch: "full"
  }
];
export const appRouterModule = RouterModule.forRoot(routes);
