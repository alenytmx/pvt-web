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
  isSidebarOpen = false;  // Para controlar si el sidebar está abierto o cerrado
  isSubmenuOpen: { [key: string]: boolean } = {};  // Control para los submenús
  private intervalId: any;
  currentDateTime: string="";
  constructor(private router: Router, private userService: UserService, private aRoute: ActivatedRoute){
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }
  ngOnInit(){
    this.currentComponent = 'inicio';
    this.intervalId = setInterval(() => {
      this.updateDateTime(); // Actualiza la fecha y hora cada segundo
    }, 1000);
  }
  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Limpia el intervalo al destruir el componente
    }
  }

  updateDateTime(): void {
    const now = new Date();
    this.currentDateTime = now.toLocaleString(); // Ajusta el formato según tus necesidades
  }
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
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;  // Alternar visibilidad del sidebar
  }

  toggleSubmenu(menu: string) {
    this.isSubmenuOpen[menu] = !this.isSubmenuOpen[menu];  // Alternar submenú
  }
}
