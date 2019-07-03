import { Component, OnInit } from '@angular/core';

/**
 * About Component
 *
 * @export
 * @class AboutComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  /**
   * Creates an instance of AboutComponent.
   * 
   * @memberof AboutComponent
   */
  constructor() { }

  /**
   * Lifecycle hook
   *
   * @memberof AboutComponent
   */
  ngOnInit() {
  }
}
