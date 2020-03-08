import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { faArrowAltCircleLeft } from "@fortawesome/pro-regular-svg-icons";

/**
 * Experience Component
 *
 * @export
 * @class ExperienceComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"]
})
export class ExperienceComponent implements OnInit {
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  public experienceHistory: Array<any>;
  public months = [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec."
  ];

  /**
   * Creates an instance of ExperienceComponent.
   *
   * @memberof ExperienceComponent
   */
  constructor() {
    this.experienceHistory = new Array();
  }

  /**
   * Lifecycle hook
   *
   * @memberof ExperienceComponent
   */
  ngOnInit() {
    this.generateExperiencesList().subscribe(
      (experiencesData: Array<any>): void => {
        this.experienceHistory = experiencesData;
      }
    );
  }

  /**
   * Returns an observable stream of all experience data
   *
   * @private
   * @returns {Observable<Array<any>>}
   * @memberof ExperienceComponent
   */
  private generateExperiencesList(): Observable<Array<any>> {
    return of(this.generateExperienceHistory());
  }

  /**
   * Generates Experiences Data Array
   *
   * @private
   * @returns {Array<any>}
   * @memberof ExperienceComponent
   */
  private generateExperienceHistory(): Array<any> {
    return [
      {
        id: "Altran",
        image:
          "https://media-exp1.licdn.com/dms/image/C560BAQHg32IurQQB_Q/company-logo_200_200/0?e=2159024400&v=beta&t=w1Ifk_Ym6Qk-E9uyApwIy9wHeQcjFJjEmzxVgqwkPrI",
        shortDescription:
          "Altran is an Engineering Consulting company, with projects in the Information Technology domain.",
        longDescription: [
          "Developed Web Applications using Angular 6/7 and NestJS.",
          "Worked on Unit Testing using Jasmine and Jest and increased test coverage above 90%.",
          "Evaluated candidates on Technical Interviews and helped improved the interview questionnaire.",
          "Created and established departments’ Code Copyright manual for use in all projects."
        ],
        location: "Fundão, Portugal",
        position: "Consultant",
        startDate: this.formatDateForCV(7, 2018),
        endDate: "Current"
      },
      {
        id: "Altran",
        image:
          "https://media-exp1.licdn.com/dms/image/C560BAQHg32IurQQB_Q/company-logo_200_200/0?e=2159024400&v=beta&t=w1Ifk_Ym6Qk-E9uyApwIy9wHeQcjFJjEmzxVgqwkPrI",
        shortDescription:
          "Altran is an Engineering Consulting company, with projects in the Information Technology domain.",
        longDescription: [
          "Developed Web Applications using AngularJS, Angular 2+, NestJS, and KendoUI.",
          "Learned and trained other team members in Unit Testing with Jasmine and Jest.",
          "Learned AngularJS, Angular 2+ and to work under the Scrum methodology."
        ],
        location: "Fundão, Portugal",
        position: "Junior Consultant",
        startDate: this.formatDateForCV(6, 2016),
        endDate: this.formatDateForCV(7, 2018)
      },
      {
        id: "Innabler",
        image:
          "https://media-exp1.licdn.com/dms/image/C4D0BAQFDrxrLGfKEMg/company-logo_200_200/0?e=1591833600&v=beta&t=QQhd_I2SUZO__QNLGkci7Hh5jEg6K6Fc26SKImgN7Lc",
        shortDescription:
          "Innabler is a small start-up company, focused on creating websites for clients.",
        longDescription: [
          "Developed Web Applications using the MeteorJS Framework.",
          "Learned to code in JavaScript.",
          "Created an Arch Linux ARM server with a local Git repository for internal projects."
        ],
        location: "Guimarães, Portugal",
        position: "Web Developer Intern",
        startDate: this.formatDateForCV(4, 2014),
        endDate: this.formatDateForCV(8, 2015)
      }
    ];
  }

  /**
   * Formats the date to be CV conforming
   *
   * @private
   * @param {number} month
   * @param {number} year
   * @returns {*}
   * @memberof ExperienceComponent
   */
  private formatDateForCV(month: number, year: number): any {
    const d = new Date(year, month - 1);
    const formattedDateString = `${
      this.months[d.getMonth()]
    }, ${d.getFullYear()}`;

    return formattedDateString;
  }
}
