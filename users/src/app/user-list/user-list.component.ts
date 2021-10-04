import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

apiUserList: Observable<User[]>;

  constructor(private userService: UserService) {
    this.apiUserList=this.userService.geUser();
   }

  ngOnInit(): void {
  }

}
