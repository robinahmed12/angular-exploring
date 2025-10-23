import { DUMMY_USERS } from './../../typed/user.model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class  Users {

 users = DUMMY_USERS
 


}
