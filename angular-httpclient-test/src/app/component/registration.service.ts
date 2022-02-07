import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { User } from "./customer/model";

@Injectable()
export class RegistrationService {

  constructor( private http: HttpClient) {}

  sendRegistration(user: User) {
    console.log("sending registration...")
    const headers = new HttpHeaders()
      .set("Content-Type", "application/x-www-form-urlencoded")
    const body = new HttpParams()
      .set("name", user.name)
      .set("email", user.email)

    return lastValueFrom(
      this.http.post<string>("https://reg-server-backend.herokuapp.com/api/register/", body.toString(), {headers})

    )
  }
}
