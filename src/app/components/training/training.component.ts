import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { ContentfulService } from '../../shared/contentful/contentful.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { SeoService } from '../../shared/seo/seo.service';

@Component({
  selector: 'app-training',
  imports: [CommonModule, LoadingSpinnerComponent],
  providers: [ContentfulService, SeoService],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
})
export class TrainingComponent implements OnInit, AfterViewInit {
  public trainingData: any = [];
  public loading = signal(false);
  public error = signal(false);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService,
    private contentfulService: ContentfulService
  ) {
    effect(() => {
      if (this.error()) {
        console.error('Contentful error');
      }
    });
  }

  ngOnInit() {
    this.fetchContent();
  }

  ngAfterViewInit(): void {
    this.seoService.updateTitleServer('Training and Certifications');
    this.seoService.setCanonicalURL(this.document.URL);
  }

  private fetchContent() {
    this.loading.set(true);
    this.error.set(false);
    this.contentfulService
      .getEntries('training')
      .then((entries: any) => {
        this.trainingData = entries.items
          .map((trainingEntry: any) => trainingEntry.fields)
          .sort((trainingA: any, trainingB: any) =>
            trainingA.trainingGroup.localeCompare(trainingB.trainingGroup)
          );
      })
      .catch((error) => {
        this.trainingData = [];
        this.error.set(true);
      })
      .finally(() => {
        this.loading.set(false);
      });
  }
}
