import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  apiGender: Observable<User[]>;

  constructor(private userService: UserService) {
    this.apiGender=this.userService.geUser();
   }


  ngOnInit(): void {
  }

}
