import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-register',
  templateUrl: './log-in-register.component.html',
  styleUrls: ['./log-in-register.component.sass']
})
export class LogInRegisterComponent implements OnInit {

  login = true;
  fb = inject(FormBuilder);
  http = inject(HttpClient);

  logInForm = this.fb.group({
    email: ["testUser@gorest.io", [Validators.required, Validators.email]],
    pass: ["DummyPass", [Validators.required]]
  })

  registerForm = this.fb.group({
    fName: ["", [Validators.required, Validators.maxLength(20)]],
    lName: ["", [Validators.required, Validators.maxLength(20)]],
    email: ["", [Validators.required, Validators.email]],
    pass: ["", [Validators.required, Validators.minLength(8)]],
    gender: [0, [Validators.min(1)]]
  });

  genderList = [
    { name: "No Gender", value: 0 },
    { name: "Male", value: 1 },
    { name: "Female", value: 2 },
    { name: "Other", value: 3 },
  ]

  ngOnInit(): void { }

  submitRegistration() {
    // if (this.registerForm.invalid) return;
    const body = {
      name: this.registerForm.controls.fName.value + " " + this.registerForm.controls.lName.value,
      gender: this.genderList.find(g => g.value == this.registerForm.controls.gender.value)?.name.toLowerCase(),
      email: this.registerForm.controls.email.value,
      status: 'active'
    }
    this.http.post("https://gorest.co.in/public/v2/users", body).subscribe(res => {
      //Their example always says its not authorized, so we just ignore it here.
    })
    this.login = true;
    alert("Account Created!");
  }
}
