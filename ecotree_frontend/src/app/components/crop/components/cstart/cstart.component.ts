import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {CResultComponent} from "../c-result/c-result.component";
import {CRecommendComponent} from "../c-recommend/c-recommend.component";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-cstart',
  templateUrl: './cstart.component.html',
  styleUrls: ['./cstart.component.scss']
})
export class CstartComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = "row";
    dialogConfig.width = '60%';
    dialogConfig.height = 'auto';
    // console.log(row);
    console.log('----------------------------');
    const dialogRef = this.dialog.open(CRecommendComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log("response code1")
      console.log(result)
      console.log("response code2")
      // this.refreshTable();
    });
  }
}
