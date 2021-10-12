import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialogRef

  constructor(
    public dialog: MatDialog,
  ) { }

  public open ( after ) {
    this.dialogRef = this.dialog.open(
      DialogComponent,
     {
      height: '800px',
      width: '1200px',
     }
    );

    this.dialogRef.afterClosed().subscribe(after);
  }

  public close () {
    this.dialogRef.close()
  }

}
