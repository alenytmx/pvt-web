import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class AlertaService {
  constructor(){}
   // Alerta simple
   mostrarAlertaSimple(titulo: string, texto: string, icono: SweetAlertIcon = 'info') {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: icono,
      confirmButtonText: 'Aceptar'
    });
  }

  // Alerta con confirmación
  mostrarAlertaConfirmacion(titulo: string, texto: string) {
    return Swal.fire({
      title: titulo,
      text: texto,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    });
  }

  // Alerta con entrada de texto
  mostrarAlertaConEntrada(titulo: string, texto: string, placeholder: string = '') {
    return Swal.fire({
      title: titulo,
      text: texto,
      input: 'text',
      inputPlaceholder: placeholder,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    });
  }

  // Alerta de éxito
  mostrarAlertaExito(titulo: string, texto: string) {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  // Alerta de error
  mostrarAlertaError(titulo: string, texto: string) {
    Swal.fire({
      title: titulo,
      text: texto,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  }

  // Alerta con temporizador
  mostrarAlertaConTemporizador(titulo: string, texto: string, tiempo: number = 3000) {
    Swal.fire({
      title: titulo,
      text: texto,
      timer: tiempo,
      timerProgressBar: true,
      showConfirmButton: false
    });
  }

  // Alerta con imagen personalizada
  mostrarAlertaConImagen(titulo: string, texto: string, imagenUrl: string) {
    Swal.fire({
      title: titulo,
      text: texto,
      imageUrl: imagenUrl,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Imagen personalizada',
      confirmButtonText: 'Aceptar'
    });
  }

  // Alerta con HTML personalizado
  mostrarAlertaConHtml(titulo: string, html: string) {
    Swal.fire({
      title: titulo,
      html: html,
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
  }

  // Alerta de carga (loading)
  mostrarAlertaDeCarga(titulo: string, texto: string) {
    Swal.fire({
      title: titulo,
      text: texto,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  }

  // Cerrar una alerta de carga
  cerrarAlertaDeCarga() {
    Swal.close();
  }
  /*
        constructor(private alertaService: AlertaService) {}

        mostrarAlertaSimple() {
          this.alertaService.mostrarAlertaSimple('¡Hola!', 'Este es un mensaje simple.', 'info');
        }

        mostrarConfirmacion() {
          this.alertaService.mostrarAlertaConfirmacion('¿Estás seguro?', 'No podrás revertir esta acción.')
            .then((result) => {
              if (result.isConfirmed) {
                this.alertaService.mostrarAlertaExito('¡Confirmado!', 'Se ha realizado la acción.');
              } else {
                this.alertaService.mostrarAlertaSimple('Cancelado', 'No se realizó la acción.', 'info');
              }
            });
        }

        mostrarEntradaTexto() {
          this.alertaService.mostrarAlertaConEntrada('Ingrese un valor', 'Escribe algo:', 'Ejemplo')
            .then((result) => {
              if (result.isConfirmed) {
                this.alertaService.mostrarAlertaExito('Valor ingresado', `Has escrito: ${result.value}`);
              }
            });
        }

        mostrarConTemporizador() {
          this.alertaService.mostrarAlertaConTemporizador('Cargando...', 'Esto se cerrará automáticamente.', 2000);
        }

        mostrarConImagen() {
          this.alertaService.mostrarAlertaConImagen('Imagen personalizada', 'Esta es una alerta con imagen.', 'https://via.placeholder.com/400');
        }

        mostrarConHtml() {
          this.alertaService.mostrarAlertaConHtml('Contenido HTML', '<strong>Este es un mensaje en negritas</strong><br>y con <i>HTML</i>.');
        }

        mostrarCarga() {
          this.alertaService.mostrarAlertaDeCarga('Cargando...', 'Por favor espera.');
          setTimeout(() => {
            this.alertaService.cerrarAlertaDeCarga();
          }, 3000);
        }
  */
}
