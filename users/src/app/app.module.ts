import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstNameComponent } from './first-name/first-name.component';
import { LastNameComponent } from './last-name/last-name.component';
import { AvatarComponent } from './avatar/avatar.component';
import { GenderComponent } from './gender/gender.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostUserComponent } from './post-user/post-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    FirstNameComponent,
    LastNameComponent,
    AvatarComponent,
    GenderComponent,
    BirthdayComponent,
    HeaderComponent,
    WelcomeComponent,
    PostUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
