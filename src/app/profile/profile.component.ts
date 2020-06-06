import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Users } from '../users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

users:User[];
user: User;


  constructor(private userService: UserService) {

   }

  ngOnInit(): void {
       // this.users=Users;
       this.userService.getUsers().subscribe((profiles) => this.users = profiles );    
  }

   onSelect(u:User){
      this.user=u;
    }

    displayDetails(u:User){
    const newUserIndex =  this.users.findIndex(ele => {
       return ele.tp_id === u.tp_id;
     })
    this.users[newUserIndex]=u;
    //this.userService.getUsers().subscribe((profiles) => this.users = profiles );
    }
  
}
