import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  noticias = [
    {
      titulo: 'Nuevo curso de piano 🎹',
      fecha: '7 ago 2025',
      descripcion: 'Hemos lanzado un nuevo curso para nivel avanzado. ¡Domina el piano como un profesional!',
    },
    {
      titulo: 'Actualización del sitio 🛠️',
      fecha: '5 ago 2025',
      descripcion: 'Mejoras en la interfaz, nuevas animaciones y modo oscuro mejorado.',
    },
    {
      titulo: 'Desafío semanal disponible 💪',
      fecha: '3 ago 2025',
      descripcion: 'Participa del reto y gana un certificado exclusivo. ¡Inscríbete ya!',
    },
  ];
}
