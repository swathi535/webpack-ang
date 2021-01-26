import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';

import { HttpClientModule } from "@angular/common/http";
import { PostsService } from './services/posts.service';
import { UsersService } from './services/users.service';
@NgModule({
  declarations: 
   [AppComponent, 
   HomeComponent, 
   LoginComponent,
   RegisterComponent, 
   PostsComponent, 
   UsersComponent],
  imports: [BrowserModule, AppRoutingModule,FormsModule,HttpClientModule],
  providers: [PostsService,UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
