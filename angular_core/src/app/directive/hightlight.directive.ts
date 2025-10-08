import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighlightDirective implements OnInit {
  // ✅ Accept color from property binding → [appHighLight]="'red'"
  @Input('appHighLight') highlightColor: string = '';

  // ✅ Accept default color → defaultColor="yellow"
  @Input() defaultColor: string = 'transparent';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    // ✅ Apply the highlight color (if provided) or fallback to defaultColor
    this.elementRef.nativeElement.style.backgroundColor =
      this.highlightColor || this.defaultColor;
  }
}
