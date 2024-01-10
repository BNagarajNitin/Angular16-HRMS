import { Component, EventEmitter, Output } from '@angular/core';


@Component({

  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.scss']
})
export class FontSizeComponent {
  sidebarColor: string = 'light'; // Initially, set the sidebar color to 'light'

  constructor() {}

  changeSidebarColor(color: string) {
    // Handle the change in sidebar color based on the selected color
    console.log(`Changing sidebar color to ${color}`);

    this.sidebarColor = color;

  }
  fontColors: string[] = ['red', 'blue', 'green', 'orange', 'purple'];
  selectedColor: string = 'black';

  @Output() colorChange = new EventEmitter<string>();

  onColorChange() {
    this.colorChange.emit(this.selectedColor);
  }
}
