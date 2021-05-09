import { Component, OnInit } from '@angular/core';
import { DialogService } from '@progress/kendo-angular-dialog';
import { DialogAddNewDroneComponent } from '../dialog/dialog-add-new-drone/dialog-add-new-drone.component';

@Component({
  selector: 'app-drone-manager',
  templateUrl: './drone-manager.component.html',
  styleUrls: ['./drone-manager.component.css']
})
export class DroneManagerComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  addNewDrone(){
    const dialogRef = this.dialogService.open({
      title: 'Please confirm',

      // Show component
      content: DialogAddNewDroneComponent,

      actions: [{ text: 'Cancel' }, { text: 'Delete', primary: true }]
  });

  const userInfo = dialogRef.content.instance;
  userInfo.name = 'admin';
  userInfo.age = 42;
  }

}
