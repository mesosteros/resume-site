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
  styleUrls: ["./skills.component.scss"]
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
    this.generateSkillsList().subscribe((skills: Array<any>): void => {
      this.skillsList = skills;
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
        image:
          "https://chocolatey.org/content/packageimages/typescript.3.8.3.png"
      },
      {
        id: "Angular",
        image: "https://miro.medium.com/max/256/1*suUQPQVUKJJ-BmFBuXju5g.png"
      },
      {
        id: "Git",
        image:
          "https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/256px-Git_icon.svg.png"
      },
      {
        id: "Jasmine",
        image: "https://jasmine.github.io/images/jasmine-white-horizontal.svg"
      },
      {
        id: "Jest",
        image:
          "https://firsttris.gallerycdn.vsassets.io/extensions/firsttris/vscode-jest-runner/0.4.15/1579636752731/Microsoft.VisualStudio.Services.Icons.Default"
      },
      {
        id: "HTML/CSS",
        image: "https://icon-library.net/images/html5-icon/html5-icon-7.jpg"
      }
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
      { id: "MongoDB" }
    ];
  }
}
