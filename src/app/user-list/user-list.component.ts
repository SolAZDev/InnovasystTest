import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  http = inject(HttpClient);
  users = [{ name: '', email: '', gender: '', active: '' }];
  displayedColumns = ['name', 'email', 'gender', 'active']
  constructor() { }

  ngOnInit(): void {
    try {
      this.http.get("https://gorest.co.in/public/v2/users").subscribe(usr => {
        this.users = JSON.parse(JSON.stringify(usr));
      })
    } catch (error) {
      alert("Network Error");
    }
  }

}
