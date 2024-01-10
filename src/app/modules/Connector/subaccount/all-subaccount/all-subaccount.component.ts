import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddsubaccountComponent } from '../addsubaccount/addsubaccount.component';

@Component({
  selector: 'app-all-subaccount',
  templateUrl: './all-subaccount.component.html',
  styleUrls: ['./all-subaccount.component.scss']
})
export class AllSubaccountComponent {
  constructor(public dialog: MatDialog) {}
  openAddSubaccountDialog(){
    this.dialog.open(AddsubaccountComponent)
  }

}
