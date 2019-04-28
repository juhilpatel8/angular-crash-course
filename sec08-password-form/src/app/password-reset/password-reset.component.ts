import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  oldPassword = "abc";
  model = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  }

  form = new FormGroup({
    oldPassword: new FormControl(""),
    newPassword: new FormControl("")
  });

  constructor() { }

  ngOnInit() {
  }
}
