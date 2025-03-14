import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-spinner',
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
})
export class LoadingSpinnerComponent {
  @Input() diameter: number = 50;
  @Input() strokeWidth: number = 5;
  @Input() color: string = 'primary';
  @Input() message: string = '';
  @Input() mode: 'inline' | 'fullscreen' = 'inline';
}
