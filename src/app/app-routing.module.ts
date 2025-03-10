import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
  },
  {
    path: "hobbies",
    loadChildren: () =>
      import("./hobbies/hobbies.module").then((m) => m.HobbiesModule),
  },
  {
    path: "resume",
    loadChildren: () =>
      import("./resume/resume.module").then((m) => m.ResumeModule),
  },
  {
    path: "**",
    component: ContentComponent,
  },
];

/**
 * App Routing Module
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
