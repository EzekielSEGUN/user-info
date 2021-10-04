import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  geUser() {
    return this.http.get<User[]>("https://615862985167ba00174bbad0.mockapi.io/api/users")
    
  }

 
  constructor(private http: HttpClient) { 
    
  }
}
