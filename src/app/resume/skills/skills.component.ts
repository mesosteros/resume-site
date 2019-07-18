import { Component, OnInit } from '@angular/core';
import { Observable, zip, of } from 'rxjs';

/**
 * Skills Component
 *
 * @export
 * @class SkillsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  public skillsList: Array<any>;
  /**
   * Creates an instance of SkillsComponent.
   *
   * @memberof SkillsComponent
   */
  constructor() {
    const baseArray = new Array();
    this.skillsList = [...baseArray, ...baseArray];
  }

  /**
   * Lifecycle hook
   *
   * @memberof SkillsComponent
   */
  ngOnInit() {
    this.generateSkillsList().subscribe(
      (skills: Array<any>): void => {
        this.skillsList = skills;
      }
    );
  }

  private generateSkillsList(): Observable<Array<any>> {
    const mainSkills = this.generateMainSkills();
    const secondarySkills = this.generateSecondarySkills();
    return of(new Array(mainSkills, secondarySkills));
  }

  private generateMainSkills(): Array<any> {
    return [
      { skillId: 'JavaScript/TypeScript', skillImage: '' },
      { skillId: 'Angular', skillImage: '' },
      { skillId: 'Git', skillImage: '' },
      { skillId: 'Jasmine', skillImage: '' },
      { skillId: 'Jest', skillImage: '' },
      { skillId: 'HTML/CSS', skillImage: '' }
    ];
  }

  private generateSecondarySkills(): Array<any> {
    return [
      { skillId: 'Scrum' },
      { skillId: 'MeteorJS' },
      { skillId: 'NestJs' },
      { skillId: 'angularJs' },
      { skillId: 'bootstrap' },
      { skillId: 'bulma' },
      { skillId: 'SCSS' },
      { skillId: 'MongoDB' }
    ];
  }
}
