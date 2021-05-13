import { Component, OnInit } from '@angular/core';
import { DialogAddNewDroneComponent } from '../dialog/dialog-add-new-drone/dialog-add-new-drone.component';
import { DialogService } from '../service/dialog-service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-drone-manager',
  templateUrl: './drone-manager.component.html',
  styleUrls: ['./drone-manager.component.css']
})
export class DroneManagerComponent implements OnInit {

  constructor(private dialogService: DialogService, public dialog: MatDialog) { }
  name ="daoda"
  animal ="fdfd"
  ngOnInit() {
  }

  addNewDrone(){
      const dialogRef = this.dialog.open(DialogAddNewDroneComponent, {
        data: {name: this.name, animal: this.animal}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    
  }

}
