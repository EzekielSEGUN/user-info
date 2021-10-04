import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent {
  
  constructor(private http: HttpClient) { }
  onSubmit(User: any){
    this.http.post("https://615862985167ba00174bbad0.mockapi.io/api/users", User)
    .subscribe((result)=> {
    // console.warn(User);
  })
  
  // ngOnInit(): void {
  // }

}
}