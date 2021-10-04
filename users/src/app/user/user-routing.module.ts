import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarComponent } from '../avatar/avatar.component';
import { BirthdayComponent } from '../birthday/birthday.component';
import { FirstNameComponent } from '../first-name/first-name.component';
import { GenderComponent } from '../gender/gender.component';
import { HeaderComponent } from '../header/header.component';
import { LastNameComponent } from '../last-name/last-name.component';
import { UserListComponent } from '../user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent, },
  { path: 'first-name', component: FirstNameComponent, },
  { path: 'last-name', component: LastNameComponent, },
  { path: 'avartar', component: AvatarComponent, },
  { path: 'birthday', component: BirthdayComponent, },
  { path: 'gender', component: GenderComponent, },
  { path: 'header', component: HeaderComponent, },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
