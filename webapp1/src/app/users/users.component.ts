import { Component, OnInit } from '@angular/core';

// Service
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  constructor(
    private usersService: UsersService
   ) { }
  
  getUsers(): void {
   
    this.usersService.getUsers()
      .subscribe(users => this.users = users)
  }

  ngOnInit() {
    this.getUsers()
  }

}
