import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: "overview",
    component: ListComponent
  },
  {
    path: "",
    redirectTo: "overview",
    pathMatch: "full"
  }
];
export const appRouterModule = RouterModule.forRoot(routes);