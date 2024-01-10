import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectSubaccountComponent } from '../select-subaccount/select-subaccount.component';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.scss']
})
export class AuditsComponent {
  constructor(public dialog: MatDialog) {}
  openSelectSubaccountDialog(){
    this.dialog.open(SelectSubaccountComponent)
  }


}
