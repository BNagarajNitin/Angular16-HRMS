import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-alerting',
  templateUrl: './alerting.component.html',
  styleUrls: ['./alerting.component.scss']
})
export class AlertingComponent implements OnInit {

  dataSource = new MatTableDataSource<any>([]); // Replace 'any' with your data type

  // Define the displayedColumns property as an array of column names
  displayedColumns: string[] = ['status', 'date', 'alertMessage', 'origin', 'action'];

  ngOnInit():void{
    this.getMethod()
      }

  public getJSONvalue:any;
  public postJSONvalue:any;


  constructor(private http: HttpClient) {}


  public getMethod(){
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((data)=>
      console.log(data)
    )
  }


}
