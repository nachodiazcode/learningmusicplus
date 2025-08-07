import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Leccion {
  titulo: string;
  descripcion: string;
  ruta: string;
}

@Component({
  selector: 'app-piano',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './piano.component.html',
})
export class PianoComponent {
  progreso: number = 40;

  lecciones: Leccion[] = [
    { titulo: 'Introducción al Piano', descripcion: 'Conoce las partes del piano y postura correcta.', ruta: '/cursos/piano/leccion/1' },
    { titulo: 'Notas y Escalas Básicas', descripcion: 'Aprende las notas y la escala mayor.', ruta: '/cursos/piano/leccion/2' },
    { titulo: 'Acordes Mayores y Menores', descripcion: 'Domina los acordes fundamentales.', ruta: '/cursos/piano/leccion/3' },
  ];

  recursos: string[] = [
    'Partitura: Escala de Do Mayor',
    'Ejercicio de digitación para manos',
    'Vídeo: Cómo mantener el ritmo'
  ];
}
