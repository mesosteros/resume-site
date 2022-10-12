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
  styleUrls: ["./experience.component.scss"],
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
    "Dec.",
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
        id: "Deloitte Digital",
        image: "../../../assets/deloitte.jpg",
        longDescription: [
          "Managing Front-End Development teams.",
          "Project Acquisition and Management.",
          "Evaluated candidates on Technical Interviews.",
          "Organize the management tasks and assist the Senior Tech Manager with daily issues.",
        ],
        location: "Lisbon, Portugal",
        position: "Tech Manager",
        startDate: this.formatDateForCV(8, 2022),
        endDate: "Current",
      },
      {
        id: "Deloitte Digital",
        image: "../../../assets/deloitte.jpg",
        longDescription: [
          "Developed Web Applications using Angular 6/7 and NestJS.",
          "Worked on Unit Testing using Jasmine and Jest and increased test coverage above 90%.",
          "Evaluated candidates on Technical Interviews and created an interview questionnaire.",
        ],
        location: "Lisbon, Portugal",
        position: "Tech Experienced Senior",
        startDate: this.formatDateForCV(2, 2022),
        endDate: this.formatDateForCV(8, 2022),
      },
      {
        id: "Affinity",
        image: "../../../assets/affinity.jpg",
        longDescription: [
          "Front-End Development using Angular and ReactJS, and Back-End Development with NodeJS, using TypeScript, JavaScript, HTML5, and SCSS.",
          "Allocated to Deloitte Digital Agency.",
        ],
        location: "Lisbon, Portugal",
        position: "Senior Consultant",
        startDate: this.formatDateForCV(1, 2021),
        endDate: this.formatDateForCV(2, 2022),
      },
      {
        id: "Altran",
        image: "../../../assets/altran.png",
        longDescription: [
          "Developed Web Applications using AngularJS, Angular 2-10 and NestJS.",
          "Worked on Unit Testing using Jasmine and Jest and increased test coverage above 90%.",
          "Evaluated candidates on Technical Interviews and helped improved the interview questionnaire.",
          "Created and established departments’ Code Copyright manual for use in all projects.",
          "Scrum Master for a Software as a Medical Device project following MVP (Minimum Viable Product) development strategy",
        ],
        location: "Fundão, Portugal",
        position: "Junior Consultant / Consultant (2018)",
        startDate: this.formatDateForCV(7, 2018),
        endDate: this.formatDateForCV(7, 2020),
      },
      {
        id: "Altran",
        image: "../../../assets/altran.png",
        longDescription: [
          "Developed Web Applications using AngularJS, Angular 2-10 and NestJS.",
          "Worked on Unit Testing using Jasmine and Jest and increased test coverage above 90%.",
        ],
        location: "Fundão, Portugal",
        position: "Junior Consultant / Consultant (2018)",
        startDate: this.formatDateForCV(6, 2016),
        endDate: this.formatDateForCV(7, 2018),
      },
      {
        id: "Innabler",
        image: "../../../assets/innabler.png",
        longDescription: [
          "Development of websites using the Meteor.js tool set (JavaScript, HTML5, CSS3, MongoDB).",
          "Created an Arch Linux ARM server with a local Git repository for internal projects.",
        ],
        location: "Guimarães, Portugal",
        position: "Web Developer Intern",
        startDate: this.formatDateForCV(4, 2014),
        endDate: this.formatDateForCV(8, 2015),
      },
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
