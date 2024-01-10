import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontService {

  constructor() { }
  selectedFontStyle = 'font-style1';
  selectedFontSize = 'large';
  selectedFontColor = 'black';

  setFontStyle(style: string) {
    this.selectedFontStyle = style;
  }

  setFontSize(size: string) {
    this.selectedFontSize = size;
  }

  setFontColor(color: string) {
    this.selectedFontColor = color;
  }
}

