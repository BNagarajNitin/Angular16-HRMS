import { DOCUMENT } from '@angular/common';
import {
  Component,
  Inject,
  ElementRef,
  OnInit,
  AfterViewInit,
  Renderer2,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ConfigService } from '@config';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { DirectionService, InConfiguration, RightSidebarService } from '@core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent extends UnsubscribeOnDestroyAdapter
implements OnInit, AfterViewInit







{
  selectedBgColor = 'green';
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
  ngOnInit() {
    this.config = this.configService.configData;
    this.subs.sink = this.rightSidebarService.sidebarState.subscribe(
      (isRunning) => {
        this.isOpenSidebar = isRunning;
      }
    );
    this.setRightSidebarWindowHeight();
  }

  ngAfterViewInit() {
    this.selectedBgColor = localStorage.getItem('choose_skin_active') as string;

    if (localStorage.getItem('menuOption')) {
      if (localStorage.getItem('menuOption') === 'menu_dark') {
        this.isDarkSidebar = true;
      } else if (localStorage.getItem('menuOption') === 'menu_light') {
        this.isDarkSidebar = false;
      }
    }

    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'dark') {
        this.isDarTheme = true;
      } else if (localStorage.getItem('theme') === 'light') {
        this.isDarTheme = false;
      }
    }

    if (localStorage.getItem('isRtl')) {
      if (localStorage.getItem('isRtl') === 'true') {
        this.isRtl = true;
      } else if (localStorage.getItem('isRtl') === 'false') {
        this.isRtl = false;
      }
    }
  }





  lightThemeBtnClick() {
    this.renderer.removeClass(this.document.body, 'dark');
    this.renderer.removeClass(this.document.body, 'submenu-closed');
    this.renderer.removeClass(this.document.body, 'menu_dark');
    this.renderer.removeClass(this.document.body, 'logo-black');
    if (localStorage.getItem('choose_skin')) {
      this.renderer.removeClass(
        this.document.body,
        localStorage.getItem('choose_skin') as string
      );
    } else {
      this.renderer.removeClass(
        this.document.body,
        'theme-' + this.config.layout.theme_color
      );
    }

    this.renderer.addClass(this.document.body, 'light');
    this.renderer.addClass(this.document.body, 'submenu-closed');
    this.renderer.addClass(this.document.body, 'menu_light');
    this.renderer.addClass(this.document.body, 'logo-white');
    this.renderer.addClass(this.document.body, 'theme-white');
    const theme = 'light';
    const menuOption = 'menu_light';
    this.selectedBgColor = 'white';
    this.isDarkSidebar = false;
    localStorage.setItem('choose_logoheader', 'logo-white');
    localStorage.setItem('choose_skin', 'theme-white');
    localStorage.setItem('theme', theme);
    localStorage.setItem('menuOption', menuOption);
  }
  darkThemeBtnClick() {
    this.renderer.removeClass(this.document.body, 'light');
    this.renderer.removeClass(this.document.body, 'submenu-closed');
    this.renderer.removeClass(this.document.body, 'menu_light');
    this.renderer.removeClass(this.document.body, 'logo-white');
    if (localStorage.getItem('choose_skin')) {
      this.renderer.removeClass(
        this.document.body,
        localStorage.getItem('choose_skin') as string
      );
    } else {
      this.renderer.removeClass(
        this.document.body,
        'theme-' + this.config.layout.theme_color
      );
    }
    this.renderer.addClass(this.document.body, 'dark');
    this.renderer.addClass(this.document.body, 'submenu-closed');
    this.renderer.addClass(this.document.body, 'menu_dark');
    this.renderer.addClass(this.document.body, 'logo-black');
    this.renderer.addClass(this.document.body, 'theme-black');
    const theme = 'dark';
    const menuOption = 'menu_dark';
    this.selectedBgColor = 'black';
    this.isDarkSidebar = true;
    localStorage.setItem('choose_logoheader', 'logo-black');
    localStorage.setItem('choose_skin', 'theme-black');
    localStorage.setItem('theme', theme);
    localStorage.setItem('menuOption', menuOption);
  }
  setRightSidebarWindowHeight() {
    this.innerHeight = window.innerHeight;
    const height = this.innerHeight - this.headerHeight;
    this.maxHeight = height + '';
    this.maxWidth = '500px';
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
  switchDirection(event: MatSlideToggleChange) {
    const isrtl = String(event.checked);
    if (
      isrtl === 'false' &&
      document.getElementsByTagName('html')[0].hasAttribute('dir')
    ) {
      document.getElementsByTagName('html')[0].removeAttribute('dir');
      this.renderer.removeClass(this.document.body, 'rtl');
      this.directionService.updateDirection('ltr');
    } else if (
      isrtl === 'true' &&
      !document.getElementsByTagName('html')[0].hasAttribute('dir')
    ) {
      document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
      this.renderer.addClass(this.document.body, 'rtl');
      this.directionService.updateDirection('rtl');
    }
    localStorage.setItem('isRtl', isrtl);
    this.isRtl = event.checked;
  }
  setRTLSettings() {
    document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
    this.renderer.addClass(this.document.body, 'rtl');
    this.isRtl = true;
    localStorage.setItem('isRtl', 'true');
  }
  setLTRSettings() {
    document.getElementsByTagName('html')[0].removeAttribute('dir');
    this.renderer.removeClass(this.document.body, 'rtl');
    this.isRtl = false;
    localStorage.setItem('isRtl', 'false');
  }
  // Add these properties to the component class
isLightSidebar: string | boolean = true; // Initial value for sidebar color

// Modify the existing lightSidebarBtnClick and darkSidebarBtnClick functions
lightSidebarBtnClick() {
  this.changeSidebarColor('light');
}

darkSidebarBtnClick() {
  this.changeSidebarColor('dark');
}


// Add the changeSidebarColor function

  changeSidebarColor(color: string) {
    this.isLightSidebar = color;
    localStorage.setItem('sidebarColor', color);

    // Remove existing color classes and then add the selected color class
    this.renderer.removeClass(this.document.body, 'menu_light');
    this.renderer.removeClass(this.document.body, 'menu_dark');
    this.renderer.removeClass(this.document.body, 'menu_red');
    this.renderer.removeClass(this.document.body, 'menu_green');

    if (color === 'light') {
      this.renderer.addClass(this.document.body, 'menu_light');
    } else if (color === 'dark') {
      this.renderer.addClass(this.document.body, 'menu_dark');
    } else if (color === 'red') {
      this.renderer.addClass(this.document.body, 'menu_red');
    } else if (color === 'green') {
      this.renderer.addClass(this.document.body, 'menu_green');
    }
  }



}
