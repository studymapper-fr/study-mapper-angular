import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  steps = [
    { name: '1',status: 'current' },
    { name: '2', status: 'upcoming' },
    { name: '3', status: 'upcoming' },
  ];
  selectedStep = 0;
  signupForm = new FormGroup({
    firstName: new FormControl('Nancy', Validators.minLength(2)),
    lastName: new FormControl('Drew'),
    email: new FormControl(''),
    cellPhoneNo: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  stepClicked(step: any) {
    this.selectedStep = step;
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

}
