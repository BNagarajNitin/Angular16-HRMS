import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-cloud-to-on-premises',
  templateUrl: './cloud-to-on-premises.component.html',
  styleUrls: ['./cloud-to-on-premises.component.scss']
})
export class CloudToOnPremisesComponent {
  dataSource = new MatTableDataSource<any>([]); // Replace 'any' with your data type

  // Define the displayedColumns property as an array of column names
  displayedColumns: string[] = ['name', 'description', 'type', 'trusted', 'action'];


}
