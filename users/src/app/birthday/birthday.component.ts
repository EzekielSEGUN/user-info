import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {

  apiBirthday: Observable<User[]>;

  constructor(private userService: UserService) {
    this.apiBirthday=this.userService.geUser();
   }

  ngOnInit(): void {
  }

}
