import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  effect,
  signal,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TechnicalSkillsComponent } from '../technical-skills/technical-skills.component';
import { SoftSkillsComponent } from '../soft-skills/soft-skills.component';
import { LanguageSkillsComponent } from '../language-skills/language-skills.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { ContentfulService } from '../../shared/contentful/contentful.service';
import { SeoService } from '../../shared/seo/seo.service';

@Component({
  selector: 'app-skills',
  imports: [
    CommonModule,
    TechnicalSkillsComponent,
    SoftSkillsComponent,
    LanguageSkillsComponent,
    LoadingSpinnerComponent,
  ],
  providers: [ContentfulService, SeoService],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent implements OnInit, AfterViewInit {
  loadedData = 0;
  public loading = signal(false);
  public error = signal(false);
  public techSkillsData: any = [];
  public languageSkillsData: any = [];
  public softSkillsData: any = [];

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
    this.seoService.updateTitleServer('Skills');
    this.seoService.setCanonicalURL(this.document.URL);
  }

  private async fetchContent() {
    this.loading.set(true);
    this.error.set(false);
    try {
      const [techData, langData, softData] = await Promise.all([
        this.contentfulService.getEntries('skills'),
        this.contentfulService.getEntries('languageSkill'),
        this.contentfulService.getEntries('softSkills'),
      ]);
      this.getTechnicalSkills(techData);
      this.getLanguageSkills(langData);
      this.getSoftSkills(softData);
    } catch (error) {
      console.error('Error: ', error);
      this.error.set(true);
    } finally {
      this.loading.set(false);
    }
  }

  private getTechnicalSkills(techData: any) {
    this.techSkillsData = techData.items
      .map((skill: any) => skill.fields)
      .sort((skillA: any, skillB: any) =>
        skillA.title.localeCompare(skillB.title)
      );
  }

  private getLanguageSkills(langData: any) {
    this.languageSkillsData = langData.items
      .map((skill: any) => skill.fields)
      .sort(
        (skillA: any, skillB: any) => skillB.proficiency - skillA.proficiency
      );
  }

  private getSoftSkills(softData: any) {
    this.softSkillsData = softData.items.map((skill: any) => skill.fields);
  }
}
