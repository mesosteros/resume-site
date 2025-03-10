import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
} from "@angular/animations";
import { faGithub, faLinkedin, faDAndD } from "@fortawesome/free-brands-svg-icons";
import {
  faBusinessTime,
  faCaretDown,
  faCaretUp,
  faFileContract,
  faLaptopCode,
  faCircleUser,
  faUserGraduate,
  faWrench,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Nav Bar Component
 *
 * @export
 * @class NavBarComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
  animations: [
    trigger("openClose", [
      state("in", style({ "max-height": "*", opacity: 0 })),
      transition(":leave", [
        style({ height: "*", opacity: 1 }),
        group([
          animate(400, style({ height: 0 })),
          animate("400ms ease-in-out", style({ opacity: 0 })),
        ]),
      ]),
      transition(":enter", [
        style({ height: 0, opacity: 0 }),
        group([
          animate(400, style({ height: "*" })),
          animate("400ms ease-in-out", style({ opacity: 1 })),
        ]),
      ]),
    ]),
  ],
  standalone: false,
})
export class NavBarComponent implements OnInit {
  resumeSectionExpanded: boolean;
  faBusinessTime = faBusinessTime;
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp;
  faFileUser = faFileContract;
  faLaptopCode = faLaptopCode;
  faUserCircle = faCircleUser;
  faUserGraduate = faUserGraduate;
  faWrench = faWrench;
  faDiceD20 = faDAndD;
  faFileCertificate = faFileCircleCheck;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  /**
   * Creates an instance of NavBarComponent.
   *
   * @memberof NavBarComponent
   */
  constructor() {}

  /**
   * Lifecycle hook
   *
   * @memberof NavBarComponent
   */
  ngOnInit() {
    this.resumeSectionExpanded = false;
  }

  /**
   * Toggle state of the resume section between expanded and not
   *
   * @memberof NavBarComponent
   */
  public clickResumeSection = (event: Event): boolean => {
    event.stopPropagation();
    this.resumeSectionExpanded = !this.resumeSectionExpanded;
    return this.resumeSectionExpanded;
  };
}
