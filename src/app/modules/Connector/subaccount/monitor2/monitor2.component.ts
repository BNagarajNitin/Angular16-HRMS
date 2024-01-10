import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SelectSubaccountComponent } from '../select-subaccount/select-subaccount.component';

@Component({
  selector: 'app-monitor2',
  templateUrl: './monitor2.component.html',
  styleUrls: ['./monitor2.component.scss']
})
export class Monitor2Component {
  constructor(public dialog: MatDialog) {}
  openSelectSubaccountDialog(){
    this.dialog.open(SelectSubaccountComponent)
  }

  dataSource = new MatTableDataSource([]); // Replace 'any' with your data type

  // Define the displayedColumns property as an array of column names
  displayedColumns: string[] = ['port', 'type', 'details', 'connections'];
  displayedColumns1: string[] = ['port', 'type', 'bytesrecevied','bytessent', 'actions'];

}
