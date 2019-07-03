import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Footer Component
 *
 * @export
 * @class FooterComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  /**
   * Creates an instance of FooterComponent.
   * 
   * @param {Router} router
   * @memberof FooterComponent
   */
  constructor(private router: Router) { }

  /**
   * Lifecycle hook
   *
   * @memberof FooterComponent
   */
  ngOnInit() {
  }
}
