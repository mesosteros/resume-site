import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ContentComponent } from "./content/content.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { WelcomeComponent } from "./welcome/welcome.component";

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
    ContentComponent,
    WelcomeComponent
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
  constructor() {}
}
