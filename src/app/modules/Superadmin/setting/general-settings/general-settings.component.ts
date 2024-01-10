import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FontService } from 'app/font.service';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent {
  content=new FormControl('',[Validators.required]);
  constructor(public fontService: FontService) {}
}
