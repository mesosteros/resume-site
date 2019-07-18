import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HobbiesComponent } from './hobbies/hobbies.component';

const routes: Routes = [
  {
    path: '**',
    component: HobbiesComponent
  }
];

/**
 * Hobbies Routing Module
 *
 * @export
 * @class HobbiesRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HobbiesRoutingModule {}
