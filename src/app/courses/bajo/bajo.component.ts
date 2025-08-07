import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Leccion {
  titulo: string;
  descripcion: string;
  ruta: string;
}

@Component({
  selector: 'app-bajo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bajo.component.html',
})
export class BajoComponent {
  progreso: number = 20;

  lecciones: Leccion[] = [
    { titulo: 'Introducción al Bajo', descripcion: 'Conoce las partes del bajo y cómo sostenerlo.', ruta: '/cursos/bajo/leccion/1' },
    { titulo: 'Groove Básico', descripcion: 'Aprende a mantener un ritmo constante y sólido.', ruta: '/cursos/bajo/leccion/2' },
    { titulo: 'Escalas y Arpegios', descripcion: 'Desarrolla movilidad y precisión en el diapasón.', ruta: '/cursos/bajo/leccion/3' },
  ];

  recursos: string[] = [
    'Ejercicio de groove en 4/4',
    'Tablatura: Walking bass sencillo',
    'Vídeo: Técnica de slap básica'
  ];
}
