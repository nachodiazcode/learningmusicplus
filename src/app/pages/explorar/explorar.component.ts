import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Curso {
  titulo: string;
  descripcion: string;
  icono: string;
  ruta: string;
  colorFrom: string;
  colorTo: string;
}

@Component({
  selector: 'app-explorar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './explorar.component.html',
})
export class ExplorarComponent {
  cursos: Curso[] = [
    {
      titulo: 'Piano',
      descripcion: 'Clases desde nivel básico hasta avanzado, con ejercicios prácticos y partituras interactivas.',
      icono: '🎹',
      ruta: '/cursos/piano',
      colorFrom: 'from-pink-200',
      colorTo: 'to-pink-300'
    },
    {
      titulo: 'Guitarra',
      descripcion: 'Aprende acordes, riffs, escalas y técnicas para dominar tu estilo preferido.',
      icono: '🎸',
      ruta: '/cursos/guitarra',
      colorFrom: 'from-amber-200',
      colorTo: 'to-amber-300'
    },
    {
      titulo: 'Bajo',
      descripcion: 'Desarrolla ritmo y groove con clases adaptadas para todos los niveles.',
      icono: '🎵',
      ruta: '/cursos/bajo',
      colorFrom: 'from-teal-200',
      colorTo: 'to-teal-300'
    }
  ];
}
