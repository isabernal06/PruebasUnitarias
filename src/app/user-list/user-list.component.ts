import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any;
  selectedUser: User | any = {};

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAllUsers()
      .subscribe(data => {
        this.users = data;
        this.selectedUser = this.users[0];
      });
  }

  selected(user: User) {
    this.selectedUser = user;
  }

}
