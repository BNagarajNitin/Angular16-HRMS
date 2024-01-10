import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-subaccount',
  templateUrl: './select-subaccount.component.html',
  styleUrls: ['./select-subaccount.component.scss']
})
export class SelectSubaccountComponent {
  constructor(private dialogRef: MatDialogRef<SelectSubaccountComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
  searchTerm: string = '';

  onSearch(): void {
    // Implement your search logic here using the 'searchTerm' value.
    console.log('Search term:', this.searchTerm);
    // You can send an HTTP request to fetch search results or manipulate data as needed.
  }

}
