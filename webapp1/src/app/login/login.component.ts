import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor( private router: Router) { }
  username:any;
  password:any;
  ngOnInit(): void {
  }
  onSubmit(  ) {
    console.log("aa");
    console.log(this.username);
    const user={
      email:this.username,
      password:this.password
      
    }
    console.log(user);
  }

}
