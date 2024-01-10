import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectSubaccountComponent } from '../select-subaccount/select-subaccount.component';

@Component({
  selector: 'app-log-traces',
  templateUrl: './log-traces.component.html',
  styleUrls: ['./log-traces.component.scss']
})
export class LogTracesComponent {
  constructor(public dialog: MatDialog) {}
  openSelectSubaccountDialog(){
    this.dialog.open(SelectSubaccountComponent)
  }
}
