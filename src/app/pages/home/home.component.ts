import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Curso {
  titulo: string;
  progreso: number; // %
  ruta: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  saludo: string = 'Hola Nacho';

  cursosEnProgreso: Curso[] = [
    { titulo: 'Piano Básico', progreso: 40, ruta: '/piano' },
    { titulo: 'Guitarra Intermedio', progreso: 65, ruta: '/guitarra' },
    { titulo: 'Bajo Avanzado', progreso: 20, ruta: '/bajo' },
  ];
}
