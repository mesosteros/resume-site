import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {}

  updateCanonicalURLserver(url: string) {
    this.meta.updateTag({ rel: 'canonical', href: url });
    this.meta.addTag({
      property: 'og:url',
      content: url,
    });
  }

  updateTitleServer(titleSuffix: string) {
    const defaultTitle =
      'Carlos Santos - Front-End Tech Manager | Angular Expert';
    this.title.setTitle(`${defaultTitle} | ${titleSuffix}`);
    this.meta.addTag({
      property: 'og:title',
      content: `${defaultTitle} | ${titleSuffix}`,
    });
  }

  setCanonicalURL(url?: string) {
    const canonical = url == undefined ? this.document.URL : url;
    let link: any = this.document.querySelector('link[rel="canonical"]');
    if (link == null) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }
}
