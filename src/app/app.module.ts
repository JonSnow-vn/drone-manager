import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DroneManagerComponent } from './drone-manager/drone-manager.component';
import { DialogAddNewDroneComponent } from './dialog/dialog-add-new-drone/dialog-add-new-drone.component';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';


const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DroneManagerComponent,
    DialogAddNewDroneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ...modules,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    DialogAddNewDroneComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
