import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SelectSubaccountComponent } from '../select-subaccount/select-subaccount.component';

@Component({
  selector: 'app-on-premise-to-cloud',
  templateUrl: './on-premise-to-cloud.component.html',
  styleUrls: ['./on-premise-to-cloud.component.scss']
})
export class OnPremiseToCloudComponent {
  constructor(public dialog: MatDialog) {}
  openSelectSubaccountDialog(){
    this.dialog.open(SelectSubaccountComponent)
  }
  dataSource = new MatTableDataSource([]); // Replace 'any' with your data type

  // Define the displayedColumns property as an array of column names
  displayedColumns: string[] = ['status', 'port', 'type', 'connection', 'connectionsince','details','action'];


}
