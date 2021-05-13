import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class DroneService {
  usersUrl;
  constructor(private http: HttpClient) {
    this.usersUrl = "http://localhost:8080/test";
  }

  public save() {
    return this.http.get<any>(this.usersUrl);
  }
}
