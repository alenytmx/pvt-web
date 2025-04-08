import { Component } from '@angular/core';
import { AlertaService } from '../../services/alerta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserService } from '../../services/users/user.service'; // Importa tu servicio
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup;
  mostrarPassword: boolean = false;
  mostrarAnimacion: boolean = false;

  constructor(
    private alertaService: AlertaService,
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.mostrarCarga();
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  mostrarCarga() {
    this.alertaService.mostrarAlertaDeCarga('¡Bienvenido!', 'Cargando... por favor espera.');
    setTimeout(() => {
      this.alertaService.cerrarAlertaDeCarga();
    }, 3000);
  }

  togglePassword(): void {
    this.mostrarPassword = !this.mostrarPassword;
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { user, password } = this.loginForm.value;
      this.userService.login({ username: user, password }).subscribe({
        next: (res) => {
          Swal.fire('¡Bienvenido!', res.message, 'success');
          this.router.navigate(['/home']);
        },
        error: (err) => {
          Swal.fire('Error', err.error.message || 'Credenciales inválidas', 'error');
        }
      });
  
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  
}
