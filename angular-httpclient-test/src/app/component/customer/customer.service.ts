import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Customer } from "./model";

@Injectable() //   ({providedIn: 'root'})
export class CustomerService {

  constructor(private http: HttpClient){

  }
  getCustomer(): Promise<Customer> {
    return lastValueFrom(
      this.http.get<Customer>("http://localhost:8080/api/customer")
    )
  }
}
