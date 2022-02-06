import { Component, OnInit } from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signinForm.value)
  }
}
