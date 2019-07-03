import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// tslint:disable-next-line:max-line-length
import { faBusinessTime, faCaretDown, faCaretUp, faLaptopCode, faUserCircle, faUserGraduate, faWrench } from '@fortawesome/pro-regular-svg-icons';
import { faDiceD20, faFileCertificate } from '@fortawesome/pro-light-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

/**
 * App Base Module
 *
 * @export
 * @class AppModule
 */
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  /**
   * Creates an instance of AppModule.
   * @memberof AppModule
   */
  constructor() {
    library.add(faBusinessTime);
    library.add(faCaretDown);
    library.add(faCaretUp);
    library.add(faLaptopCode);
    library.add(faUserCircle);
    library.add(faUserGraduate);
    library.add(faWrench);
    library.add(faDiceD20);
    library.add(faFileCertificate);
    library.add(faGithub);
    library.add(faLinkedin);
  }
}
