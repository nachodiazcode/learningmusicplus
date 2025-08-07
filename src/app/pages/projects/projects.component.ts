import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Proyecto {
  nombre: string;
  descripcion: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  proyectos: Proyecto[] = [
    { nombre: 'LearningMusicPlus', descripcion: 'Plataforma de aprendizaje musical en línea.', link: '#' },
    { nombre: 'ByteLovers News-Tech', descripcion: 'Portal de noticias de tecnología con microservicios.', link: '#' },
    { nombre: 'App de Composición', descripcion: 'Herramienta web para crear partituras colaborativamente.', link: '#' }
  ];
}
