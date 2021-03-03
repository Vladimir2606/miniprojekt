import { RouterModule, Routes } from "@angular/router";
import { ImpressumComponent } from "./impressum/impressum.component";
import { ListComponent } from "./list/list.component";

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
    path: "",
    redirectTo: "overview",
    pathMatch: "full"
  }
];
export const appRouterModule = RouterModule.forRoot(routes);