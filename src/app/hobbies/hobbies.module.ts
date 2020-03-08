import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HobbiesRoutingModule } from './hobbies-routing.module';
import { HobbiesComponent } from './hobbies/hobbies.component';

/**
 * Hobbies Module
 *
 * @export
 * @class HobbiesModule
 */
@NgModule({
  declarations: [HobbiesComponent],
  imports: [CommonModule, HobbiesRoutingModule]
})
export class HobbiesModule {}
