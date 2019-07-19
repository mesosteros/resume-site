import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Education Component
 *
 * @export
 * @class EducationComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  public educationHistory: Array<any>;
  public months = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'June',
    'July',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.'
  ];

  /**
   * Creates an instance of EducationComponent.
   *
   * @memberof EducationComponent
   */
  constructor() {}

  /**
   * Lifecycle hook
   *
   * @memberof EducationComponent
   */
  ngOnInit() {
    this.generateEducationList().subscribe(
      (educationData: Array<any>): void => {
        this.educationHistory = educationData;
      }
    );
  }

  /**
   * Returns an observable stream of all education data
   *
   * @private
   * @returns {Observable<Array<any>>}
   * @memberof EducationComponent
   */
  private generateEducationList(): Observable<Array<any>> {
    return of(this.generateEducationHistory());
  }

  /**
   * Generates Education Data Array
   *
   * @private
   * @returns {Array<any>}
   * @memberof EducationComponent
   */
  private generateEducationHistory(): Array<any> {
    return [
      {
        id: 'University of Trás-os-Montes e Alto Douro',
        image: 'https://bulma.io/images/placeholders/128x128.png',
        shortDescription:
          'Bachelor of Information and Communication Technology',
        longDescription: ['Information Systems', 'Programming Methodologies'],
        location: 'Vila Real, Portugal',
        type: 'Bachelor of Information and Communication Technology',
        startDate: this.formatDateForCV(9, 2006),
        endDate: this.formatDateForCV(7, 2010)
      },
      {
        id: 'University of Linköping',
        image: 'https://bulma.io/images/placeholders/128x128.png',
        shortDescription: 'Erasmus',
        longDescription: ['Erasmus experience for 1 semester'],
        location: 'Linköping, Sweden',
        type: 'Junior Consultant',
        startDate: this.formatDateForCV(8, 2008),
        endDate: this.formatDateForCV(1, 2009)
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
   * @memberof EducationComponent
   */
  private formatDateForCV(month: number, year: number): any {
    const d = new Date(year, month - 1);
    const formattedDateString = `${
      this.months[d.getMonth()]
    }, ${d.getFullYear()}`;

    return formattedDateString;
  }
}
