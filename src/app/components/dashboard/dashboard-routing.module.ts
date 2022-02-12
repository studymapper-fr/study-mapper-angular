import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@app/auth/auth.guard";
import { PageNotFoundComponent } from "../index";
import { ResumeComponent } from "../resume/resume.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "resume",
        component: ResumeComponent,
        loadChildren: () =>
          import("../resume/resume.module").then((m) => m.ResumeModule),
      },
      { path: "**", pathMatch: "full", component: PageNotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class DashboardRoutingModule {}
