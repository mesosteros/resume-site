import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { TrainingComponent } from './training/training.component';
import { ResumeComponent } from './resume/resume.component';

/**
 * Resume Module
 *
 * @export
 * @class ResumeModule
 */
@NgModule({
  declarations: [SkillsComponent, ExperienceComponent, EducationComponent, CertificationsComponent, TrainingComponent, ResumeComponent],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
