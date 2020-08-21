import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";

/**
 * Skills Component
 *
 * @export
 * @class SkillsComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  public skillsList: Array<any>;
  public languageSkillsList: Array<any>;

  /**
   * Creates an instance of SkillsComponent.
   *
   * @memberof SkillsComponent
   */
  constructor() {
    const baseArray = new Array();
    this.skillsList = [...baseArray, ...baseArray];
    this.languageSkillsList = baseArray;
  }

  /**
   * Lifecycle hook
   *
   * @memberof SkillsComponent
   */
  ngOnInit() {
    this.generateSkillsList().subscribe((skills: Array<any>): void => {
      this.skillsList = skills;
      this.generateLanguageSkills().subscribe((languages: Array<any>): void => {
        this.languageSkillsList = languages;
      });
    });
  }

  /**
   * Returns an observable stream of all skill arrays
   *
   * @private
   * @returns {Observable<Array<any>>}
   * @memberof SkillsComponent
   */
  private generateSkillsList(): Observable<Array<any>> {
    const mainSkills = this.generateMainSkills();
    const secondarySkills = this.generateSecondarySkills();
    return of(new Array(mainSkills, secondarySkills));
  }

  /**
   * Generates Core Skills Array
   *
   * @private
   * @returns {Array<any>}
   * @memberof SkillsComponent
   */
  private generateMainSkills(): Array<any> {
    return [
      {
        id: "JavaScript/TypeScript",
        image: "../../../assets/typescript.3.8.3.png",
      },
      {
        id: "Angular",
        image: "../../../assets/angular.png",
      },
      {
        id: "Git",
        image: "../../../assets/git.png",
      },
      {
        id: "Jasmine",
        image: "../../../assets/jasmine.svg",
      },
      {
        id: "Jest",
        image: "../../../assets/jest.png",
      },
      {
        id: "HTML/CSS",
        image: "../../../assets/html5.png",
      },
    ];
  }

  /**
   * Generates Additional Skills Array
   *
   * @private
   * @returns {Array<any>}
   * @memberof SkillsComponent
   */
  private generateSecondarySkills(): Array<any> {
    return [
      { id: "Scrum" },
      { id: "MeteorJS" },
      { id: "NestJs" },
      { id: "angularJs" },
      { id: "bootstrap" },
      { id: "bulma" },
      { id: "SCSS" },
      { id: "MongoDB" },
    ];
  }

  /**
   * Generates Language Skills Array
   *
   * @private
   * @returns {Array<any>}
   * @memberof SkillsComponent
   */
  private generateLanguageSkills(): Observable<Array<any>> {
    return of(
      new Array(
        { id: "Portuguese", level: "Native Language" },
        { id: "English", level: "C2, Fluent" },
        { id: "French", level: "B2, Intermediate" },
        { id: "German", level: "A1, Basic" }
      )
    );
  }
}
