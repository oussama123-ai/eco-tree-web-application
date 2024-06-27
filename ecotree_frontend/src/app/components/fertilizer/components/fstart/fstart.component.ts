import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CRecommendComponent} from "../../../crop/components/c-recommend/c-recommend.component";
import {FRecommendComponent} from "../f-recommend/f-recommend.component";

@Component({
  selector: 'app-fstart',
  templateUrl: './fstart.component.html',
  styleUrls: ['./fstart.component.scss']
})
export class FstartComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog2() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = "row";
    dialogConfig.width = '60%';
    dialogConfig.height = 'auto';
    // console.log(row);
    console.log('----------------------------');
    const dialogRef = this.dialog.open(FRecommendComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log("response code1")
      console.log(result)
      console.log("response code2")
      // this.refreshTable();
    });
  }
}
