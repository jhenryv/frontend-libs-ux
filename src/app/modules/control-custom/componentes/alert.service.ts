import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  error(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Ocurrio un error...',
      html: message
    });
  }

  success( message: string) {
    Swal.fire({
      icon: 'success',
      html: message     

    })
  }

  info( message: string) {
    Swal.fire({
      icon: 'info',
      html: message     

    })
  }

  warning( message: string) {
    Swal.fire({
      icon: 'warning',
      html: message,
    })
  }

  question(message: string) {
    Swal.fire({
      icon: 'question',
      html: message    

    })
  }
  
  
}
