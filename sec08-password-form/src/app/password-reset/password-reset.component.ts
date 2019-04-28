import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from "./password.validators";

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
  form = new FormGroup({
    oldPassword: new FormControl(
      "", 
      [ Validators.required,
        PasswordValidator.doNotMatchOldPassword ]),
    newPassword: new FormControl("", Validators.required),
    confirmPassword: new FormControl("", Validators.required)
  });

  get oldPassword() {
    return this.form.get("oldPassword");
  }

  get newPassword() {
    return this.form.get("newPassword");
  }

  get confirmPassword() {
    return this.form.get("confirmPassword");
  }

  constructor() { }

  ngOnInit() {
  }
}

