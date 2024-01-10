import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
//import { UserService } from '@core/service/user.service';

@Component({
  selector: 'app-security-status',
  templateUrl: './security-status.component.html',
  styleUrls: ['./security-status.component.scss']
})
export class SecurityStatusComponent {
  dataSource = new MatTableDataSource<any>([]); // Replace 'any' with your data type

  // Define the displayedColumns property as an array of column names
  displayedColumns: string[] = ['status', 'area', 'description',  'actions'];
  displayedColumns1: string[] = ['displayname', 'applicationallowlist', 'payloadtrace'];
 // constructor(private apiService: UserService ) {}


  }




