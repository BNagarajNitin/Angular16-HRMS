import { Component } from '@angular/core';
import { FontService } from 'app/font.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  constructor(public fontService: FontService) {}

}
