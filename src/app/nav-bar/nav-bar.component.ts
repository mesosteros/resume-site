import { Component, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    group
} from '@angular/animations';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.scss'],
    animations: [
        trigger('openClose', [
            state('in', style({ height: '*', opacity: 0 })),
            transition(':leave', [
                style({ height: '*', opacity: 1 }),
                group([
                    animate(200, style({ height: 0 })),
                    animate('200ms ease-in-out', style({ opacity: 0 }))
                ])
            ]),
            transition(':enter', [
                style({ height: '0', opacity: 0 }),
                group([
                    animate(300, style({ height: '*' })),
                    animate('300ms ease-in-out', style({ opacity: 1 }))
                ])

            ])
        ])
    ]
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
