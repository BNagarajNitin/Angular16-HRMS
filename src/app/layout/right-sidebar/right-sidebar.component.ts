import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  ElementRef,
  Renderer2,



} from '@angular/core';
import { ConfigService } from '@config';

import { UnsubscribeOnDestroyAdapter } from '@shared';
import { DirectionService, InConfiguration, RightSidebarService } from '@core';

@Component({

  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss'],
})
export class RightSidebarComponent
  extends UnsubscribeOnDestroyAdapter

{
  selectedBgColor = 'white';
  maxHeight?: string;
  maxWidth?: string;
  showpanel = false;
  isOpenSidebar?: boolean;
  isDarkSidebar = false;
  isDarTheme = false;
  public innerHeight?: number;
  headerHeight = 60;
  isRtl = false;
  public config!: InConfiguration;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public elementRef: ElementRef,
    private rightSidebarService: RightSidebarService,
    private configService: ConfigService,
    private directionService: DirectionService
  ) {
    super();
  }





  selectTheme(e: string) {
    this.selectedBgColor = e;
    const prevTheme = this.elementRef.nativeElement
      .querySelector('.settingSidebar .choose-theme li.active')
      .getAttribute('data-theme');
    this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
    this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
    localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
    localStorage.setItem('choose_skin_active', this.selectedBgColor);
  }





  onClickedOutside(event: Event) {
    const button = event.target as HTMLButtonElement;
    if (button.id !== 'settingBtn') {
      if (this.isOpenSidebar === true) {
        this.toggleRightSidebar();
      }
    }
  }
  toggleRightSidebar(): void {
    this.rightSidebarService.setRightSidebar(
      (this.isOpenSidebar = !this.isOpenSidebar)
    );
  }
}
