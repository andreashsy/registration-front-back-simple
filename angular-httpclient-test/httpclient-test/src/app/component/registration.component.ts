import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from './customer/model';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup
  user!: User
  response: String = ''

  constructor(private fb: FormBuilder,
    private regSvc: RegistrationService) { }

  ngOnInit(): void {
    this.registrationForm = this.createRegistrationForm()
  }

  registerUser() {
    console.info("Register Button pressed")
    this.user = this.registrationForm.value as User
    console.info("name: ", this.user.name)
    this.regSvc.sendRegistration(this.user)
      .then(result => {
        this.response = JSON.stringify(result)
      })
      .catch(result => {
        this.response = JSON.stringify(result.error)
      })
  }

  createRegistrationForm() {
    return this.fb.group({
      name: this.fb.control(""),
      email: this.fb.control("")
    })
  }

}
