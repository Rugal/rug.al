import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly headerHeight: number = environment.headerHeight;
  readonly headerFadeInBuffer: number = environment.headerFadeInBuffer;
  colorHeader: boolean = false;

  constructor() {}

  onWindowScroll($event: Event) {
    this.colorHeader = window.pageYOffset + this.headerFadeInBuffer + this.headerHeight
      >= window.innerHeight;
  }
}

