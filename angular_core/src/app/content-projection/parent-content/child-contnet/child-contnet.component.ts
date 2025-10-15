import {
  Component,
  ContentChild,
  Directive,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-child-contnet',
  templateUrl: './child-contnet.component.html',
  styleUrls: ['./child-contnet.component.scss'],
})
export class ChildContnetComponent implements OnInit {
  @Input() type!: string;
  content: any;
  expanded: any;

  constructor() {}

  ngOnInit(): void {}
}

// @Directive({
//   selector: '[appExampleZippyContent]',
// })
// export class ZippyContentDirective {
//   constructor(public templateRef: TemplateRef<unknown>) {}
// }

// @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
