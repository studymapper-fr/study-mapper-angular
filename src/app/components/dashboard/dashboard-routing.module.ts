import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "@app/auth/auth.guard";
import { HelpComponent } from "../help/help.component";
import { PageNotFoundComponent } from "../index";
import { PrivacyComponent } from "../privacy/privacy.component";
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
      {
        path: "privacy",
        component: PrivacyComponent,
        loadChildren: () =>
          import("../privacy/privacy.module").then((m) => m.PrivacyModule),
      },
      {
        path: "help",
        component: HelpComponent,
        loadChildren: () =>
          import("../help/help.module").then((m) => m.HelpModule),
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
