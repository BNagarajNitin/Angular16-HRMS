import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-style-switcher',
  templateUrl: './style-switcher.component.html',
  styleUrls: ['./style-switcher.component.scss']
})
export class StyleSwitcherComponent{
  selectedBgColor: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    // Initialize selectedBgColor from localStorage or set a default value
    this.selectedBgColor = localStorage.getItem('choose_skin_active') || 'white';
    this.applySelectedTheme();
  }

  selectTheme(theme: string) {
    this.selectedBgColor = theme;
    this.applySelectedTheme();
  }

  private applySelectedTheme() {
    const activeThemeElement = this.elementRef.nativeElement.querySelector('.choose-theme li button.active');

    if (activeThemeElement) {
      const prevTheme = activeThemeElement.getAttribute('data-theme');
      this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
    }

    this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
    localStorage.setItem('choose_skin', 'theme-' + this.selectedBgColor);
    localStorage.setItem('choose_skin_active', this.selectedBgColor);
  }
 }





















