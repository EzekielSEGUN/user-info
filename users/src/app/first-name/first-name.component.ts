import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css']
})
export class FirstNameComponent implements OnInit {

  apiFirstName: Observable<User[]>;

  constructor(private userService: UserService) {
    this.apiFirstName=this.userService.geUser();
   }

  ngOnInit(): void {
  }

}
