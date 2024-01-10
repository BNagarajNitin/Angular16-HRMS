import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FontService } from 'app/font.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent {
  content=new FormControl('',[Validators.required]);
  constructor(public fontService: FontService) {}
}
