import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {
  LoginComponent,
  PageNotFoundComponent,
  RegisterComponent,
} from "./components";

const routes: Routes = [
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "",
    loadChildren: () =>
      import(`../app/components/dashboard/dashboard.module`).then(
        (m) => m.DashboardModule
      ),
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
