import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Leccion {
  titulo: string;
  descripcion: string;
  ruta: string;
}

@Component({
  selector: 'app-guitarra',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './guitarra.component.html',
})
export class GuitarraComponent {
  progreso: number = 65;

  lecciones: Leccion[] = [
    { titulo: 'Introducción a la Guitarra', descripcion: 'Conoce las partes de la guitarra y afinación.', ruta: '/cursos/guitarra/leccion/1' },
    { titulo: 'Acordes Básicos', descripcion: 'Aprende los acordes mayores y menores más usados.', ruta: '/cursos/guitarra/leccion/2' },
    { titulo: 'Ritmos y Rasgueos', descripcion: 'Domina patrones rítmicos y técnicas de rasgueo.', ruta: '/cursos/guitarra/leccion/3' },
  ];

  recursos: string[] = [
    'Tablatura: Progresión de acordes básica',
    'Ejercicio de cambio rápido de acordes',
    'Vídeo: Técnicas de rasgueo'
  ];
}
