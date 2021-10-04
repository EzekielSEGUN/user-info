import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostUserComponent } from './post-user/post-user.component';

const routes: Routes = [
  { path: 'post-user', component: PostUserComponent, },
  {
    path: 'user-list',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
