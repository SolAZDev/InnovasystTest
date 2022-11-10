import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GorestService } from '../gorest.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})
export class UserListComponent implements OnInit {

  dialog = inject(MatDialog);
  http = inject(GorestService);
  fb = inject(FormBuilder);

  users = [{ name: '', email: '', gender: '', status: '' }];
  displayedColumns = ['name', 'email', 'gender', 'active', 'tools']
  activeUser = { id: 0, name: '', email: '', gender: '', status: '' }
  displaySpinner = false;

  @ViewChild('delUser') delDialog = {} as TemplateRef<any>;
  @ViewChild('editUser') edDialog = {} as TemplateRef<any>;

  userEdit = this.fb.group({
    fName: ["", [Validators.required, Validators.maxLength(20)]],
    lName: ["", [Validators.required, Validators.maxLength(20)]],
    email: ["", [Validators.required, Validators.email]],
  });

  constructor() { }

  async ngOnInit() {
    this.updateUserList();
  }

  updateUserList() {
    this.http.get('/users')?.subscribe(usrs => {
      this.users = usrs as any[];
    });
  }

  openDelDialog(user: any) {
    this.activeUser = user;
    this.dialog.open(this.delDialog)
  }
  openEdDialog(user: any) {
    this.activeUser = user;
    let name = this.activeUser.name.split(' ');
    this.userEdit.controls.fName.setValue(name[0]);
    this.userEdit.controls.lName.setValue(name[1]);
    this.userEdit.controls.email.setValue(this.activeUser.email);
    this.dialog.open(this.edDialog)
  }
  closeDialog() { this.dialog.closeAll(); }

  deleteUser() {
    this.displaySpinner = true;
    this.http.delete('/users/' + this.activeUser.id)?.subscribe(del => {
      this.displaySpinner = false;
      alert("User " + this.activeUser.name + " has been deleted.");
      this.updateUserList();
      this.closeDialog();
    })
  }

  updateUser() {
    if (this.userEdit.invalid) { return; }
    this.displaySpinner = true;
    this.http.put('/users/' + this.activeUser.id, {
      name: this.activeUser.name,
      email: this.activeUser.email,
      status: this.activeUser.status
    })?.subscribe(update => {
      this.displaySpinner = false;
      alert("User Upadted!");
      this.updateUserList();
      this.closeDialog();
    })
  }
}
