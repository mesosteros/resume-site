import { Component, OnInit } from '@angular/core';

/**
 * Content Component
 *
 * @export
 * @class ContentComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  /**
   * Creates an instance of ContentComponent.
   * 
   * @memberof ContentComponent
   */
  constructor() { }

  /**
   * Lifecycle hook
   *
   * @memberof ContentComponent
   */
  ngOnInit() {
  }

}
