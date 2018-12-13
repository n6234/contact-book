import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: [ './user-form.component.css' ]
})
export class UserFormComponent  {
  @Input()
  user: User;
  @Output()
  onFormClose: EventEmitter<any> = new EventEmitter();
  userForm;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      id: new FormControl(),
      name: new FormControl(),
      surname: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
    });
  }

  ngOnChanges() {
    this.userForm.setValue({
      id: this.user ? this.user.id : '',
      name: this.user ? this.user.name : '',
      surname: this.user ? this.user.surname : '',
      phone: this.user ? this.user.phone : '',
      email: this.user ? this.user.email : ''
    });
  }

  onSubmit() {
    this.userService.updateUser(this.userForm.value);
    this.clearForm();
  }

  cancel() {
    this.clearForm();
  }

  clearForm() {
    this.user = undefined;
    this.ngOnChanges();
    this.onFormClose.emit();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
