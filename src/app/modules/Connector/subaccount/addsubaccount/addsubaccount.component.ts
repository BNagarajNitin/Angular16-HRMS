import { Component } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addsubaccount',
  templateUrl: './addsubaccount.component.html',
  styleUrls: ['./addsubaccount.component.scss']
})
export class AddsubaccountComponent {
  constructor(private dialogRef: MatDialogRef<AddsubaccountComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
