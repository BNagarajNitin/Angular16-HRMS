import { Component } from '@angular/core';
import { FontService } from 'app/font.service';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent {
  constructor(public fontService: FontService) {}
}
