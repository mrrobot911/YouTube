import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'youtube-svg-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export default class SvgIconComponent {
  @Input() icon!: string;

  @Input() width?: number = 20;

  @Input() height?: number = 13;

  @Input() size?: number = 24;

  @Input() fill?: string;

  @Input() class?: string;

  ngOninit(): void {
    if (!this.width || !this.height) {
      this.width = this.size;
      this.height = this.size;
    }
  }
}
