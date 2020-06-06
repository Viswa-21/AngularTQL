import { Component, OnInit, Input,Output,EventEmitter, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnChanges {

  @Input('userData') selectedUser:User;
  user:User;
  
  updatedUser : any={};
  
  @Output() valueChange: EventEmitter<User> = new EventEmitter();

  constructor(private userService: UserService) { 
   }

  ngOnChanges(): void {
    this.user={ 
      tp_group: this.selectedUser.tp_group,
      tp_id: this.selectedUser.tp_id,
      trading_partner_name: this.selectedUser.trading_partner_name,
      isa_qual: this.selectedUser.isa_qual,
      isa_id: this.selectedUser.isa_id,
      gs_id: this.selectedUser.gs_id
    };
  }
  
  updateUser(u: User){
   
   this.updatedUser=u;
   this.updatedUser.tp_id=this.selectedUser.tp_id;
   this.updatedUser.tp_group= this.selectedUser.tp_group;
   this.updatedUser.trading_partner_name=this.selectedUser.trading_partner_name;
   this.userService.putUser(this.updatedUser)
    .subscribe(user => {
      this.updatedUser = user;});

    this.valueChange.emit(this.updatedUser);
    //console.log(this.updatedUser);
  }

}
