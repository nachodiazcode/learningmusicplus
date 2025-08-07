import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  nombre = '';
  email = '';
  mensaje = '';

  enviarFormulario() {
    console.log('Formulario enviado:', { nombre: this.nombre, email: this.email, mensaje: this.mensaje });
  }
}
