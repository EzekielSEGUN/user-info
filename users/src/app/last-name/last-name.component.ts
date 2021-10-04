import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-last-name',
  templateUrl: './last-name.component.html',
  styleUrls: ['./last-name.component.css']
})
export class LastNameComponent implements OnInit {

  apiLastName: Observable<User[]>;

  constructor(private userService: UserService) {
    this.apiLastName=this.userService.geUser();
   }
  ngOnInit(): void {
  }

}
