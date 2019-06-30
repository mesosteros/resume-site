import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
    resumeSectionExpanded = false;

    constructor() { }

    ngOnInit() {
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
    }
}
