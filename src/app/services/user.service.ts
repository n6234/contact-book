import { Injectable } from '@angular/core';

import { users } from '../user';

@Injectable()
export class UserService {
  users: any[] = users;

  getUsers() {
    return this.users;
  }

  updateUser(userUpdate) {
    let user = this.users.find((u) => u.id === userUpdate.id);
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.users.splice(index, 0, userUpdate);
  } 
}