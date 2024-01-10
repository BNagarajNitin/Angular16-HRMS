import { Component } from '@angular/core';
import { FontService } from 'app/font.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  constructor(public fontService: FontService) {}
}
