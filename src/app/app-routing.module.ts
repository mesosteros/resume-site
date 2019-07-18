import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'hobbies',
    loadChildren: () =>
      import('./hobbies/hobbies.module').then(m => m.HobbiesModule)
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume/resume.module').then(m => m.ResumeModule)
  },
  {
    path: '**',
    component: ContentComponent
  }
];

/**
 * App Routing Module
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
