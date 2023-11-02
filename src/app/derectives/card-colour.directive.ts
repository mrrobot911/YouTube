import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[youtubeCardColour]',
})
export default class CardColourDirective implements OnInit {
  @Input('youtubeCardColour')
    date!: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    const currentDate = new Date();
    const publicationDate = new Date(this.date);
    const time = (currentDate.getTime() - publicationDate.getTime()) / (1000 * 60 * 60 * 24);
    let color: string;

    if (time > 180) {
      color = 'red';
    } else if (time > 30) {
      color = 'yellow';
    } else if (time > 7) {
      color = 'green';
    } else {
      color = 'blue';
    }
    this.renderer2.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }
}
