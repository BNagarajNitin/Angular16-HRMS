import { Component } from '@angular/core';
import { FontService } from 'app/font.service';

@Component({
  selector: 'app-allcompany',
  templateUrl: './allcompany.component.html',
  styleUrls: ['./allcompany.component.scss']
})
export class AllcompanyComponent {
  constructor(public fontService: FontService) {}
}
