import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { ContentfulService } from '../../shared/contentful/contentful.service';
import { LoadingService } from '../../shared/loading/loading.service';
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
  public isLoading: boolean = true;
  public trainingData: any = [];

  constructor(
    private loadingService: LoadingService,
    @Inject(DOCUMENT) private document: Document,
    private seoService: SeoService,
    private contentfulService: ContentfulService
  ) {}

  ngOnInit() {
    this.loadingService.show();

    this.contentfulService
      .getEntries('training')
      .then((entries: any) => {
        this.trainingData = entries.items
          .map((trainingEntry: any) => trainingEntry.fields)
          .sort((trainingA: any, trainingB: any) =>
            trainingA.trainingGroup.localeCompare(trainingB.trainingGroup)
          );
      })
      .catch((error) => (this.trainingData = []))
      .finally(() => {
        this.loadingService.hide();
        this.isLoading = false;
      });
  }

  ngAfterViewInit(): void {
    this.seoService.updateTitleServer('Training and Certifications');
    this.seoService.setCanonicalURL(this.document.URL);
  }
}
