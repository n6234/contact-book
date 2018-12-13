import { Component } from '@angular/core';

import { User } from './user';
import { UserService } from './services/user.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  users: User[];
  editUser: User;

  constructor(private userService: UserService) {
    this.getUsers();
  }

  onFormClose() {
    console.log('onFormClose');
    this.getUsers();
  }

  getUsers() {
    this.users = this.userService.getUsers();
  }

  editSelectedUser(user: User) {
    this.editUser = user;
  }
}
