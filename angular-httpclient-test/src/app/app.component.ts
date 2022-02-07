import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, lastValueFrom, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'httpclient-test';
  result: any = {}
  origin!: string;
  userAgent!: string;

  sub$!: Subscription

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.asPromise('https://httpbin.org/get')
    //this.asObservable('https://httpbin.org/get')
  }

  ngOnDestroy(): void {
    this.sub$?.unsubscribe()
  }

  asObservablefromPromise(url: string) {
    const result$ = this.http.get<any>(url)
    // promise -> observable
    this.sub$ = from(lastValueFrom(result$))
      .pipe(
        map(result => {
          return {origin: result.origin, userAgent: result.headers['User-Agent']}
        })
      )
      .subscribe(result => {
        this.result = result
        this.origin = result.origin
        this.userAgent = result.userAgent
      })
  }

  asPromise(url: string) {
    console.info('as promise')
    // returns observable - convention is $ suffix
    const result$ = this.http.get<any>(url)
    // convert observable to promise
    lastValueFrom(result$)
    .then(result => {
      this.origin = result.origin
      this.userAgent = result.headers['User-Agent']
      this.result = result
      return {origin: result.origin, userAgent: result.headers['User-Agent']}
    })
    .then(result => {
      this.result = result
      this.origin = result.origin
      this.userAgent = result.userAgent
    })
    .catch(error => {
      this.result = error
    })
  }

  asObservable(url: string) {
    console.info('as observable')
    this.sub$ = this.http.get<any>(url)
    .pipe(
      map(result => {
        return {origin: result.origin, userAgent: result.headers['User-Agent']}
      })
    )
    .subscribe(result => {
      this.result = result
      this.origin = result.origin
      this.userAgent = result.userAgent
    })
  }

}
