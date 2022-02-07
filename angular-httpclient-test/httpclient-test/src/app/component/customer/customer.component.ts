import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { CustomerService } from './customer.service';
import { Customer } from './model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, OnDestroy {
  sub$!: Subscription
  result!: Customer

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomer()
      .then(result => {
        this.result = result
      })
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe()
  }

/*   asObservable(url: string) {
    let params = new HttpParams()
      .set("id", "1234")
      .set("comments", "hello")

    let headers = new HttpHeaders().set("asdf", "asdf")

    this.sub$ = this.http.get<Customer>(url, {params}) // javascript syntax for params:params
    .pipe(
      map((result: Customer) => {
        return {result}
      })
    )
    .subscribe(result => {
      this.result = result as Customer
    })
  } */

}
