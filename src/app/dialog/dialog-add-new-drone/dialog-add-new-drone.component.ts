import { Component, OnInit , Inject} from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Drone } from 'src/app/entitys/drone-entity';
import { DroneService } from 'src/app/service/drone-service';


@Component({
  selector: 'app-dialog-add-new-drone',
  templateUrl: './dialog-add-new-drone.component.html',
  styleUrls: ['./dialog-add-new-drone.component.css']
})
export class DialogAddNewDroneComponent implements OnInit {
drone: Drone;

constructor(
  public dialogRef: MatDialogRef<DialogAddNewDroneComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any, private droneService: DroneService) {}

  ngOnInit() {
    this.drone = new Drone()
  }

  saveDrone(){
    console.log(this.drone)
    this.droneService.save().subscribe();
  }

}
