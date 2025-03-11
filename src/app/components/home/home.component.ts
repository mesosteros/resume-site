import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { SeoService } from '../../shared/seo/seo.service';
import { DOCUMENT } from '@angular/common';
import { environment } from '../../../environments/environment';

const canonicalUrl = `${environment.hostUrl}`;

@Component({
  selector: 'app-home',
  imports: [IntroComponent],
  providers: [SeoService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(
    private seoService: SeoService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.seoService.updateTitleServer('Home');
    this.seoService.setCanonicalURL(this.document.URL);
  }
}
