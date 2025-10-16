import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighlightDirective implements OnInit {
  @Input('appHighLight') highlightColor: string = '';

  @Input() defaultColor: string = 'transparent';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor =
      this.highlightColor || this.defaultColor;
  }
}
