import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.css']
})
export class DeleteOrderComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
