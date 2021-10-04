import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  apiAvatar: Observable<User[]>;

  constructor(private userService: UserService) {
    this.apiAvatar=this.userService.geUser();
   }
  ngOnInit(): void {
  }

}
