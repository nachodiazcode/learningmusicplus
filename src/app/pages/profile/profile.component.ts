import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  nombre = 'Nacho';
  correo = 'nacho@example.com';
  cursos = [
    { nombre: 'Piano Básico', progreso: 40 },
    { nombre: 'Guitarra Intermedio', progreso: 65 },
    { nombre: 'Bajo Avanzado', progreso: 20 }
  ];
}
