import { Component, OnInit } from '@angular/core';


import { PostModel } from '../models/post.model';
import { UserModel } from '../models/user.model';

import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  users: any[] = [];


  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
  ) {
    this.getPosts()
  }
  getPosts() {
    this.postsService.getPosts()
      .subscribe( posts => {this.posts = posts; this.setUserName()} )
    this.usersService.getUsers()
      .subscribe( users => {this.users = users; this.setUserName()})
 
  }

  setUserName() {
    if (this.posts && this.users) {
      for(const post of this.posts) {
        for(const user of this.users) {
          if (post.userId === user.id) {
            post.name = user.name
          }
        }
      }
    }
  }


  ngOnInit(): void {
  }

}
