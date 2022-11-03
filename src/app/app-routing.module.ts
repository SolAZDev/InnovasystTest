import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInRegisterComponent } from './log-in-register/log-in-register.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', component: LogInRegisterComponent },
  { path: 'users', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
