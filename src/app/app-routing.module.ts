import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DroneManagerComponent } from './drone-manager/drone-manager.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: "home",
    component: DroneManagerComponent,
  },
  {
    path: "",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
