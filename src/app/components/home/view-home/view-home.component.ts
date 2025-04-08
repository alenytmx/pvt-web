import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/users/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-view-home',
  standalone: false,
  templateUrl: './view-home.component.html',
  styleUrl: './view-home.component.css'
})
export class ViewHomeComponent {
  currentComponent: string = '';
  id : string | null;
  currentUser: User | null = null;
  currentUserName: string = '';
  guardarUsuario : string = '';
  guardarId : number | undefined;
  saveRol : string = '';
  store : string | undefined = '';
  firstname! : string ;
  constructor(private router: Router, private userService: UserService, private aRoute: ActivatedRoute){
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(){}
  selectComponent(component: string) {
    this.currentComponent = component;
  }
  logout() {
    this.userIsLoggedIn();
    this.userService.logout(); 
    this.router.navigate(['/login']);
  }
  userIsLoggedIn(): boolean {
    return this.currentUser !== null; 
  }
}
