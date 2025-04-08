import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewHomeComponent } from './components/home/view-home/view-home.component';


const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'login', component: LoginComponent},
  { path: 'home', component: ViewHomeComponent},
  {path: '*', redirectTo:'login',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
