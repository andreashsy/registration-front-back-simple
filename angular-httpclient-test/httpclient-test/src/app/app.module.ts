import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './component/customer/customer.component'
import { CustomerService } from './component/customer/customer.service';
import { RegistrationComponent } from './component/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from './component/registration.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService,
              RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
