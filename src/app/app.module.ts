import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { DialogsModule } from '@progress/kendo-angular-dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DroneManagerComponent } from './drone-manager/drone-manager.component';
import { DialogAddNewDroneComponent } from './dialog/dialog-add-new-drone/dialog-add-new-drone.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DroneManagerComponent,
    DialogAddNewDroneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
