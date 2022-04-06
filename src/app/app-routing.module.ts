import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { SingUpComponent } from './home/sing-up/sing-up.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { ListTaskComponent } from './task/list-task/list-task.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: "task",
    component: ListTaskComponent
  },
  {
    path: "create",
    component: CreateTaskComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "singUp",
    component: SingUpComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
