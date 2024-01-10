import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectSubaccountComponent } from '../select-subaccount/select-subaccount.component';

@Component({
  selector: 'app-monitor1',
  templateUrl: './monitor1.component.html',
  styleUrls: ['./monitor1.component.scss']
})
export class Monitor1Component {
  constructor(public dialog: MatDialog) {}
  openSelectSubaccountDialog(){
    this.dialog.open(SelectSubaccountComponent)
  }

}
